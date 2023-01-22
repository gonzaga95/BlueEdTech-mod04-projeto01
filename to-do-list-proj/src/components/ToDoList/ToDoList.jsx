import "./ToDoList.css";

function ToDoList() {
    return (
        <form>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
            />
            <button type="submit" className="btn btn__add">
                Adicionar
            </button>
        </form>
    );
}

export default ToDoList;
