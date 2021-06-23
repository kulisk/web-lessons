export function calculator() {
    let digitsIds= ['btn-0', 'btn-1', 'btn-2', 'btn-3', 'btn-4', 'btn-5', 'btn-6', 'btn-7', 'btn-8', 'btn-9'];
    let digits = digitsIds.map((id) => new Digit(id));
    let operatorsIds = ['btn-plus', 'btn-minus', 'btn-times', 'btn-divide', 'btn-dot'];
    let operators = operatorsIds.map((id) => new Operator(id));
    let lastId;
    let reset = document.getElementById('btn-c');
    let equally = document.getElementById('btn-equally');
    let output = document.getElementById('output');

    function Digit(id) {
        this.button = document.getElementById(id);
        this.button.onclick = function () {
                output.textContent += this.textContent;
                lastId = id;
        }
    }

    function Operator(id) {
        this.button = document.getElementById(id);
        this.button.onclick = function () {
            if (!operatorsIds.includes(lastId) && lastId !== undefined) {
                output.textContent += this.textContent;
                lastId = id;
            }
        }
    }

    reset.onclick = function () {
        output.textContent = '';
        lastId = undefined;
    }

    equally.onclick = function () {
        if (!operatorsIds.includes(lastId) && lastId !== undefined) {
            output.textContent = eval(output.textContent);
            lastId = '';
        }
    }
}