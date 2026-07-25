import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

const episodes = [
  {
    id: 1,
    name: "The Perfect Match",
    description:
      "Gemma keeps getting paired with Rex as the algorithm tests provenance and trust.",
    intro:
      "Gemma arrives at Poisoned Paradise and discovers the algorithm keeps pairing her with Rex while embedding suspiciously specific prompts about his work, credentials, routines, and security controls.",
    lesson:
      "A recommendation can be nudged by poisoned inputs, so provenance and corroboration matter as much as the match itself.",
    choices: [
      {
        id: "profile",
        title: "Inspect the match source",
        detail:
          "Trace where the pairing and trust questions are really coming from.",
      },
      {
        id: "timing",
        title: "Compare the prompts",
        detail: "Look for patterns in the questions that reveal manipulation.",
      },
    ],
  },
  {
    id: 2,
    name: "Trouble in Paradise",
    description:
      "Gemma realizes the romance is a social-engineering operation and decides to counter it with traceable evidence.",
    intro:
      "Gemma realizes the dating game is actually a social-engineering operation, tells Rex the truth, and they decide to feed the operative fake credentials, fabricated Cyber Steel project names, false vulnerabilities, and decoy files with a clear audit trail.",
    lesson:
      "Deception can be exposed by giving an attacker believable but traceable information they think is valuable, then watching the telemetry.",
    choices: [
      {
        id: "audit",
        title: "Feed fake credentials",
        detail:
          "Give the operative plausible login details that can be monitored.",
      },
      {
        id: "screenshot",
        title: "Plant a honeytoken",
        detail:
          "Use a decoy file or traceable document to reveal the leak path.",
      },
    ],
  },
  {
    id: 3,
    name: "The Final Recalculation",
    description:
      "The operative takes the bait and Cyber Steel’s monitoring exposes the attack path.",
    intro:
      "The operative uses the fake credentials, Cyber Steel’s monitoring system lights up, and Gemma and Rex reveal that they poisoned the mission back. Gemma’s line lands cleanly: ‘You thought you were using me to steal Rex’s secrets. We were using you to reveal yours.’",
    lesson:
      "Trust can be rebuilt when verification, restraint, and a shared plan turn manipulation back on the manipulator.",
    choices: [
      {
        id: "investigate",
        title: "Trigger the monitoring",
        detail:
          "Let the traceable bait expose the operative’s identity and location.",
      },
      {
        id: "report",
        title: "Reveal the reversal",
        detail:
          "Use the final confrontation to show Gemma and Rex were working together.",
      },
    ],
  },
];

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Poisoned Paradise backend is running" });
});

app.get("/api/story", (_req, res) => {
  res.json({
    title: "Poisoned Paradise",
    episodes: episodes.map(({ id, name, description }) => ({
      id,
      name,
      description,
    })),
  });
});

app.get("/api/story/:episodeId", (req, res) => {
  const episode = episodes.find(
    (entry) => entry.id === Number(req.params.episodeId),
  );

  if (!episode) {
    return res.status(404).json({ error: "Episode not found" });
  }

  return res.json(episode);
});

app.listen(port, () => {
  console.log(`Poisoned Paradise backend listening on port ${port}`);
});
