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
                <span id="seconds">
                    {Math.floor(time / 100).toString()}
                </span>:
                <span id="hundredths">
                    {(time % 100).toString().padStart(2, '0')}
                </span>
            </p>
            <button id="button-start" onClick={start}>Start</button>
            <button id="button-stop" onClick={stop}>Stop</button>
            <button id="button-reset" onClick={reset}>Reset</button>
        </div>
    )
}