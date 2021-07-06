import {useState, useEffect} from "react";

export default function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    function start() {
        setIsRunning(true);
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setTime(0);
    }

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(
                () => setTime(time + 1),
                10
            );
        }
        return () => clearInterval(interval);
    })

    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>Vanilla JavaScript Stopwatch</h2>
            <p>
                <span>
                    {Math.floor(time / 100).toString()}
                </span>:
                <span>
                    {(time % 100).toString().padStart(2, '0')}
                </span>
            </p>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}