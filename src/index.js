import "../styles/main.css";

function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("ul.todos");
    document.getElementById('create').addEventListener('click', createTodo);

    const deleteButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < deleteButtons.length; i++) {
        listenDeleteTodo(deleteButtons[i]);
    }

    function createTodo() {
        if (input.value === '') {
            return alert('enter todo name');
        }
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.classList.add("todo-text");
        const newTodo = input.value;
        textSpan.append(newTodo);

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("remove");
        deleteBtn.innerHTML = '&times;';

        ul.appendChild(li).append(textSpan, deleteBtn);
        input.value = "";

        listenDeleteTodo(deleteBtn);
    }

    function listenDeleteTodo(element) {
        element.addEventListener("click", (event) => {
            element.parentElement.remove();
            event.stopPropagation();
        });
    }
}

document.addEventListener("DOMContentLoaded", onPageLoaded);