import express from "express";
import { createServer } from "http";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

app.use((req, _res, next) => {
  log(`${req.method} ${req.originalUrl}`);
  next();
});

// Create the HTTP server instance using the Express app
const server = createServer(app);

const isDevelopment = process.env.NODE_ENV === "development";

(async () => {
  if (isDevelopment) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Define the port
  // Use environment variable PORT if available (common for hosting), otherwise default to 3000
  const port = process.env.PORT || 3002;

  // Start the server
  server.listen(port, () => {
    log(
      `✅ Server running in ${
        isDevelopment ? "development" : "production"
      } mode at http://localhost:${port}`,
    );
  });
})();

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  log(`Error: ${err.message}`, "error");
  console.error(err.stack); 
  res
    .status(err.status || 500)
    .send(isDevelopment ? err.stack : "Internal Server Error");
});
