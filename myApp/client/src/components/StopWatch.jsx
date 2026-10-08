import React, { useState, useEffect } from 'react';

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => setTime(time + 1), 10);
        }
        return () => clearInterval(intervalId);
    }, [isRunning, time]);

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
        <div className="stopwatch-container">
            <h1>Stopwatch</h1>
            <div className="stopwatch-display">
                {hours.toString().padStart(2, "0")}:
                {minutes.toString().padStart(2, "0")}:
                {seconds.toString().padStart(2, "0")}:
                {milliseconds.toString().padStart(2, "0")}
            </div>
            <div className="stopwatch-buttons">
                <button onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button onClick={() => { setTime(0); setIsRunning(false); }}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
