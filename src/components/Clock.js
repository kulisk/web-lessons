import {useState, useEffect} from "react";

export default function Clock() {
    const [time, setTime] = useState(getTime())

    function format(units) {
        return units.toString().padStart(2, '0');
    }

    function getTime() {
        let date = new Date();
        let halfDay = (date.getHours() >= 12) ? 'PM' : 'AM';
        return `${format(date.getHours() % 12)}:${format(date.getMinutes())}:${format(date.getSeconds())} ${halfDay}`;
    }

    useEffect(() => {
        let interval;
        interval = setInterval(
            () => setTime(getTime()),
            1000
        );
        return () => clearInterval(interval);
    })

    return <div>{time}</div>
}