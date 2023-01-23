import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";

const Todo = ({ tarefas, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: "",
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return tarefas.map((todo, index) => (
        <div
            className={todo.complete ? "todo-row completo" : "todo-row"}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="btn">
                <button
                    onClick={() => removeTodo(todo.id)}
                    className="btn__remover"
                >
                    Remover
                </button>
                <button
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className="btn__editar"
                >
                    Editar
                </button>
            </div>
        </div>
    ));
};

export default Todo;
