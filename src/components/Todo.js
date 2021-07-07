import {useRef, useState} from "react";

export default function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const todoInput = useRef(null);

    function createTodo() {
        setTodos(prev => [...prev, inputValue]);
        todoInput.current.value = '';
    }

    const handleRemoveItem = (e) => {
        const removeName = e.target.getAttribute("name");
        setTodos(todos.filter(item => item !== removeName));
    };

    return (
        <div>
            <h1>Todolist</h1>
            <label>
                <input type="text" placeholder="add todo"
                       onChange={event => setInputValue(event.target.value)}
                       ref={todoInput}
                />
                <button onClick={() => createTodo()}>Add</button>
            </label>
            {todos.map((value, index) => {
                return (
                    <div key={index}>
                        <span>{value}</span>
                        <button name={value} onClick={handleRemoveItem}>&times;</button>
                    </div>
                )
            })}
        </div>
    )
}