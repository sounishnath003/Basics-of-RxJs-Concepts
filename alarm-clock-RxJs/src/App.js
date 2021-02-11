import React from "react";
import "./App.css";
import { useAlarm } from "./hooks/AlarmHooks";

function App() {
  const { state, actions$ } = useAlarm();

  return (
    <div className="App">
      <h2>Alarm Clock</h2>
      <h1> Ticking counter : {state} </h1>
      <button className="green" onClick={() => actions$.next("snoozer")}>
        Snooze
      </button>
      <button className="red" onClick={() => actions$.next("dismisser")}>
        Dismiss
      </button>
    </div>
  );
}

export default App;
