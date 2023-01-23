import "./ToDoList.css";
import { useState } from "react";
import {list} from "../../assets/mocks/list";
import ToDoForm from "../ToDoForm/ToDoForm";

function ToDoList() {
    const [tarefa, setTarefa] = useState([]);


    return (
        <div>
            <ToDoForm />
        </div>
    );
}

export default ToDoList;
