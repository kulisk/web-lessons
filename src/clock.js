export function Clock(id) {
    let clock = document.getElementById(id);

    this.start = function () {
        this.tick();
        setInterval(this.tick, 1000);
    }

    this.tick = function () {
        let date = new Date();
        let halfDay = (date.getHours() >= 12) ? 'PM' : 'AM';
        clock.textContent = `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()} ${halfDay}`;
    }
}