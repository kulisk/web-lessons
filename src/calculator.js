export function Calculator() {
    let digitsIds = ['btn-0', 'btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8', 'btn-9'];
    let digits = digitsIds.map((id) => new Digit(id));
    let operatorsIds = ['btn-plus', 'btn-minus', 'btn-times', 'btn-divide'];
    let operators = operatorsIds.map((id) => new Operator(id));
    let lastId;

    function Digit(id) {
        this.id = id;
        this.button = document.getElementById(this.id);
        this.button.onclick = function () {
            output.textContent += this.textContent;
            lastId = id;
        }
    }

    function Operator(id) {
        this.id = id;
        this.button = document.getElementById(this.id);
        this.button.onclick = function () {
            if (!operatorsIds.includes(lastId)){
                output.textContent += this.textContent;
                lastId = id;
            }
        }
    }

    let output = document.getElementById('output');

    let equally = document.getElementById('btn-equally');
    let dot = document.getElementById('btn-dot');
    let reset = document.getElementById('btn-c');

    reset.onclick = function () {
        output.textContent = '';
    }

    function printDigit() {
        output.textContent += this.textContent;
    }
}

// let d7 = document.getElementById('btn-7');
// let d8 = document.getElementById('btn-8');
// let d9 = document.getElementById('btn-9');
// let d4 = document.getElementById('btn-4');
// let d5 = document.getElementById('btn-5');
// let d6 = document.getElementById('btn-6');
// let d1 = document.getElementById('btn-1');
// let d2 = document.getElementById('btn-2');
// let d3 = document.getElementById('btn-3');
// let d0 = document.getElementById('btn-0');
// let plus = document.getElementById('btn-plus');
// let minus = document.getElementById('btn-minus');
// let multiply = document.getElementById('btn-times');
// let divide = document.getElementById('btn-divide');