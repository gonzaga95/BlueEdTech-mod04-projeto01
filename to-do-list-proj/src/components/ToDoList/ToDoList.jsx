import "./ToDoList.css";
import {list} from "../../assets/mocks/list";

function ToDoList() {
    return (
        <div>
            <form autoComplete="off">
                <input
                    type="text"
                    id="add-input"
                    className="input input__add"
                />
                <button type="submit" className="btn btn__add">
                    Adicionar
                </button>
            </form>
            <ul>
                {list.map((list, index) => (
                    <li key={`Lista-${index}`}>
                        <label>Tarefa: </label>
                        {list.text}
                        <input type="checkbox" defaultChecked={list.complete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
