export function Clock() {
    this.start = function () {
        this.interval = setInterval(this.tick, 1000);
    }

    this.tick = function () {

    }

    this.show = function () {

    }
}