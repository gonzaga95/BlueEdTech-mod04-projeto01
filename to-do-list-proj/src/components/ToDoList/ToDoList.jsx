import "./ToDoList.css";

function ToDoList() {
    return (
        <div>
            <form>
                <input
                    type="text"
                    id="add-input"
                    className="input input__add"
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className="btn btn__add">
                    Adicionar
                </button>
            </form>
            <ul>
                
            </ul>
        </div>
    );
}

export default ToDoList;
