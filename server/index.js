import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import chat from "./routes/chat.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// 1) Serve the static portfolio from the project root
app.use(express.static(path.join(__dirname, ".."))); // .. points to the folder with index.html

// 2) API routes
app.use("/api/chat", chat);

// 3) Root route -> send index.html
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));