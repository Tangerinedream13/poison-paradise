import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Perfect Match backend is running" });
});

app.get("/api/story", (_req, res) => {
  res.json({
    title: "Perfect Match",
    acts: [
      {
        id: 1,
        name: "The Pairing",
        description: "Gemma is paired with Rex by the algorithm.",
      },
      {
        id: 2,
        name: "Mixed Signals",
        description: "Evidence and compatibility scores begin to conflict.",
      },
      {
        id: 3,
        name: "The Reveal",
        description: "Gemma investigates the poisoned data behind the system.",
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Perfect Match backend listening on port ${port}`);
});
