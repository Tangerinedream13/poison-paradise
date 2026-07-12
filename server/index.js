import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

const acts = [
  {
    id: 1,
    name: "The Pairing",
    description: "Gemma is paired with Rex by the algorithm.",
    intro:
      "Gemma arrives at Perfect Match and discovers the algorithm has paired her with Rex, the one person who already feels suspicious.",
    lesson:
      "A recommendation can look convincing even when the evidence behind it is weak or manipulated.",
    choices: [
      {
        id: "profile",
        title: "Check the profile source",
        detail:
          "Trace the profile back to its origin before trusting the match.",
      },
      {
        id: "timing",
        title: "Compare timestamps",
        detail: "Look for shifts in the evidence that suggest tampering.",
      },
    ],
  },
  {
    id: 2,
    name: "Mixed Signals",
    description: "Evidence and compatibility scores begin to conflict.",
    intro:
      "Compatibility scores change, screenshots start circulating, and the contestants begin questioning the evidence.",
    lesson:
      "When signals conflict, the safest move is to verify the source rather than react to the drama.",
    choices: [
      {
        id: "audit",
        title: "Request the audit trail",
        detail:
          "Follow the data lineage to understand where the evidence came from.",
      },
      {
        id: "screenshot",
        title: "Verify the screenshot independently",
        detail:
          "Cross-check the screenshot with another source to expose a misleading edit.",
      },
    ],
  },
  {
    id: 3,
    name: "The Reveal",
    description: "Gemma investigates the poisoned data behind the system.",
    intro:
      "Gemma finds the poisoned data feeding the matchmaking system and realizes the system is only as trustworthy as the information it receives.",
    lesson:
      "Verification, documentation, and independent evidence are essential when a system is influenced by bad data.",
    choices: [
      {
        id: "investigate",
        title: "Trace the poisoned data",
        detail:
          "Investigate the source to understand how false data entered the system.",
      },
      {
        id: "report",
        title: "Document and report the anomaly",
        detail:
          "Preserve evidence and report the issue before acting on the manipulated story.",
      },
    ],
  },
];

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Perfect Match backend is running" });
});

app.get("/api/story", (_req, res) => {
  res.json({
    title: "Perfect Match",
    acts: acts.map(({ id, name, description }) => ({ id, name, description })),
  });
});

app.get("/api/story/:actId", (req, res) => {
  const act = acts.find((entry) => entry.id === Number(req.params.actId));

  if (!act) {
    return res.status(404).json({ error: "Act not found" });
  }

  return res.json(act);
});

app.listen(port, () => {
  console.log(`Perfect Match backend listening on port ${port}`);
});
