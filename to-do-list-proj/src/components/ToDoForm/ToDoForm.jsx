import { useState } from "react";

function ToDoForm() {
    const [input, setInput] = useState("");

    return (
        <form className="todo__form">
            <input
                type="text"
                value={input}
                name="text"
                className="todo__input"
            />
            <button className="todo_button">Adicionar</button>
        </form>
    );
}

export default ToDoForm;
