import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config"; 

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

// Sets up Vite middleware for development
export async function setupVite(app: Express, server: Server) {
  log("Setting up Vite middleware for development...", "vite");
  const vite = await createViteServer({
    ...viteConfig, 
    configFile: false, 
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        // Exit on critical Vite errors during setup
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: {
      middlewareMode: true, 
      hmr: { server }, 
    },
    appType: "custom",
  });

  // Use Vite's middleware
  app.use(vite.middlewares);

  // Catch-all route to serve index.html for client-side routing
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      // Path to your source index.html
      const clientTemplatePath = path.resolve(
        __dirname,
        "..", // Go up one level from server/
        "client",
        "index.html",
      );
      let template = await fs.promises.readFile(clientTemplatePath, "utf-8");

      // Apply Vite HTML transforms (injects HMR client, etc.)
      template = await vite.transformIndexHtml(url, template);

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e); // Pass error to Express error handler (if any)
    }
  });
  log("Vite middleware setup complete.", "vite");
}

// Serves static files from the build output directory (dist)
export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "..", "client");
  log(`Serving static files from: ${distPath}`, "express");

  if (!fs.existsSync(distPath)) {
    log(
      `Error: Build directory not found at ${distPath}. Run 'npm run build' first.`,
      "express",
    );
    process.exit(1); // Exit if build directory is missing
  }

  // Serve static files (JS, CSS, images, etc.)
  app.use(express.static(distPath));

  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
