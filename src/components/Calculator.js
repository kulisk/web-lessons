import {CalculatorStyles} from './styles/styles';
import {Button} from "./Button";
import {useState} from "react";
import {buttonIds} from "./buttonIds";

export function Calculator() {
    const [expression, setExpression] = useState('');
    const operatorButtons = ['+', '-', '*', '/', '.'];

    function addValue(val) {
        if (val === 'C') {
            setExpression("");
            return 0;
        }
        if (val === "=") {
            try {
                setExpression(eval(expression).toString());
            } catch (err) {
                setExpression(err.name);
            }
            return 0;
        }
        if (val === '.'
            && (expression === ''
                || expression.split(/[\+\-\/\*]/).pop().includes('.')
                || operatorButtons.includes(expression.split('').pop()))) {
            return 0;
        }
        if (operatorButtons.includes(val)
            && val !== '.'
            && operatorButtons.includes(expression.split('').pop())) {
            return 0;
        }
        setExpression(expression + val);
    }

    function createButton(val) {
        return <Button className="calculator__btn"
                       id={"btn-" + buttonIds[val]}
                       onClick={() => addValue(val)}
                       value={val}/>
    }

    return (
        <CalculatorStyles>
            <div className="calculator__output" id="output">{expression}</div>
            {createButton("+")}
            {createButton("-")}
            {createButton("*")}
            {createButton("/")}
            {createButton("=")}
            {createButton("7")}
            {createButton("8")}
            {createButton("9")}
            {createButton("4")}
            {createButton("5")}
            {createButton("6")}
            {createButton("1")}
            {createButton("2")}
            {createButton("3")}
            {createButton("0")}
            {createButton(".")}
            {createButton("C")}
        </CalculatorStyles>
    );
}

export default Calculator