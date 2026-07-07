import { useState } from "react";
import Home from "./pages/Home";
import PlayAct1 from "./pages/PlayAct1";
import PlayAct2 from "./pages/PlayAct2";
import PlayAct3 from "./pages/PlayAct3";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "act1") {
    return (
      <PlayAct1
        onGoHome={() => setScreen("home")}
        onGoAct2={() => setScreen("act2")}
      />
    );
  }

  if (screen === "act2") {
    return (
      <PlayAct2
        onBack={() => setScreen("home")}
        onGoAct3={() => setScreen("act3")}
      />
    );
  }

  if (screen === "act3") {
    return <PlayAct3 onBack={() => setScreen("home")} />;
  }

  return (
    <Home
      onStartAct1={() => setScreen("act1")}
      onStartAct2={() => setScreen("act2")}
      onStartAct3={() => setScreen("act3")}
    />
  );
}
