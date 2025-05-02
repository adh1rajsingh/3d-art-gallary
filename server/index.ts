import express from "express";
import { createServer } from "http"; // Use Node's built-in http server
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// No need for express.json() or express.urlencoded() if no API
// No need for complex API logging middleware

// Simple request logger (optional, remove if not needed)
app.use((req, _res, next) => {
  log(`${req.method} ${req.originalUrl}`);
  next();
});

// Create the HTTP server instance using the Express app
const server = createServer(app);

// Determine if running in development or production
// NODE_ENV is commonly set by tools like nodemon, tsx, or hosting platforms
const isDevelopment = process.env.NODE_ENV === "development";

// Asynchronously set up Vite or serve static files
(async () => {
  if (isDevelopment) {
    // Setup Vite middleware in development
    await setupVite(app, server);
  } else {
    // Serve static files in production
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

// Optional: Basic error handling (catches errors passed via next(e))
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  log(`Error: ${err.message}`, "error");
  console.error(err.stack); // Log the full stack trace for debugging
  res
    .status(err.status || 500)
    .send(isDevelopment ? err.stack : "Internal Server Error");
});
