import { useEffect, useState } from "react";
import "./App.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);





  
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);

    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const centiseconds = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(centiseconds).padStart(2, "0")}`;
  };

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <main className="app">
      <div className="stopwatch-card">
        <p className="label">TIME TRACKER</p>

        <h1>Stopwatch</h1>

        <div className="timer">
          {formatTime(time)}
        </div>

        <div className="buttons">
          <button
            className="start-btn"
            onClick={() => setRunning(!running)}
          >
            {running ? "Pause" : "Start"}
          </button>

          <button
            className="reset-btn"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return <Stopwatch />;
};

export default App;