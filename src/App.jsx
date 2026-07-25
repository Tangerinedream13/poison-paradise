import { useState } from "react";
import Home from "./pages/Home";
import PlayAct1 from "./pages/PlayAct1";
import PlayAct2 from "./pages/PlayAct2";
import PlayAct3 from "./pages/PlayAct3";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "episode1") {
    return (
      <PlayAct1
        onGoHome={() => setScreen("home")}
        onGoEpisode2={() => setScreen("episode2")}
      />
    );
  }

  if (screen === "episode2") {
    return (
      <PlayAct2
        onBack={() => setScreen("home")}
        onGoEpisode3={() => setScreen("episode3")}
      />
    );
  }

  if (screen === "episode3") {
    return <PlayAct3 onBack={() => setScreen("home")} />;
  }

  return (
    <Home
      onStartEpisode1={() => setScreen("episode1")}
      onStartEpisode2={() => setScreen("episode2")}
      onStartEpisode3={() => setScreen("episode3")}
    />
  );
}
