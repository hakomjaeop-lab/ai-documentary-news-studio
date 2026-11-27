import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const port = Number(process.env.PORT ?? 4000);

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

app.listen(port, () => {
  console.log(`Studio API listening on port ${port}`);
});
