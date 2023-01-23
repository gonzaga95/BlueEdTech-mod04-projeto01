import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function ToDoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : "");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: uuidv4(),
            text: input,
        });
        setInput("");
    };

    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        value={input}
                        name="text"
                        className="todo__input"
                        onChange={handleChange}
                    />
                    <button className="todo_button">Editar</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        value={input}
                        name="text"
                        className="todo__input"
                        onChange={handleChange}
                    />
                    <button className="todo_button">Adicionar</button>
                </>
            )}
        </form>
    );
}

export default ToDoForm;
