import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT ?? 4000);
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const webDist = path.resolve(currentDir, "../../web/dist");

app.use(helmet());
app.use(cors({ origin: process.env.WEB_ORIGIN?.split(",") ?? "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "ai-documentary-news-studio-api", timestamp: new Date().toISOString() });
});

app.get("/api/config", (_req, res) => {
  res.json({
    productName: "AI Documentary News Studio",
    defaultLanguage: "ar-MA",
    supportedLanguages: ["ar-MA", "ar"],
    targetAspectRatio: "16:9",
    targetResolution: "1920x1080",
    targetDurationMinutes: { min: 5, max: 10 }
  });
});

// In production, the API server also serves the built Vite application.
app.use(express.static(webDist));
app.get("*", (_req, res) => {
  res.sendFile(path.join(webDist, "index.html"));
});

app.listen(port, () => {
  console.log(`Studio API listening on port ${port}`);
});
