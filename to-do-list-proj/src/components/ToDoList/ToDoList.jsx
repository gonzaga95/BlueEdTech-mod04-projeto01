import "./ToDoList.css";
import { useState } from "react";
import { list } from "../../assets/mocks/list";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDo from "../ToDo/ToDo";

function ToDoList() {
    const [tarefas, setTarefas] = useState(list);

    const addTarefa = (tarefa) => {
        if (!tarefa.text) {
            return;
        }

        const novaTarefa = [tarefa, ...tarefas];

        setTarefas(novaTarefa);
    };

    const removeTarefa = (id) => {
        const removedArr = [...tarefas].filter((todo) => todo.id !== id);

        setTarefas(removedArr);
    };

    const updateTarefas = (todoId, newValue) => {
        if (!newValue.text) {
            return;
        }

        setTarefas((prev) =>
            prev.map((item) => (item.id === todoId ? newValue : item))
        );
    };

    const completeTarefa = (id) => {
        let updatedTarefas = tarefas.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTarefas(updatedTarefas);
    };

    return (
        <>
            <ToDoForm onSubmit={addTarefa} />
            <ToDo
                tarefas={tarefas}
                completeTodo={completeTarefa}
                removeTodo={removeTarefa}
                updateTodo={updateTarefas}
            />
        </>
    );
}

export default ToDoList;
