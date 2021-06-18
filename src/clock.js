export function Clock(id) {
    this.id = id;

    this.start = function () {
        let clockTag = document.createElement('div');
        clockTag.id = id;
        document.body.append(clockTag);
        this.clock = document.getElementById(this.id);
        clockTag.innerHTML = this.tick();
        setInterval(this.tick, 1000);
    }

    this.tick = function () {
        let date = new Date();
        let halfDay = (date.getHours() >= 12) ? 'PM' : 'AM';
        return this.clock.innerHTML = `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()} ${halfDay}`;
    }
}