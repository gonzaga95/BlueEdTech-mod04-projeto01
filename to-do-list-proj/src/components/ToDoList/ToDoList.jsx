import "./ToDoList.css";
import { useState } from "react";
// import { list } from "../../assets/mocks/list";
import ToDoForm from "../ToDoForm/ToDoForm";

function ToDoList() {
    const [tarefas, setTarefas] = useState([]);

    const addTarefa = (tarefa) => {
        if (!tarefa.text) {
            return;
        }

        const novaTarefa = [tarefa, ...tarefas];

        setTarefas(novaTarefa);
    };

    return (
        <div>
            <ToDoForm onSubmit={addTarefa} />
        </div>
    );
}

export default ToDoList;
