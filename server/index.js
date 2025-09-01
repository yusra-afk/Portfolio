// server/index.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import chat from "./routes/chat.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve the static portfolio from repo root (one level up from /server)
app.use(express.static(path.join(__dirname, "..")));

// API routes
app.use("/api/chat", chat);

// Home -> send the root index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Optional: basic health check
app.get("/healthz", (_req, res) => res.status(200).send("ok"));

// IMPORTANT: Use Render's assigned port, fallback for local dev
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});