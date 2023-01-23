import "./Home.css";
import Navbar from "../Navbar/Navbar";
import ToDoList from "../ToDoList/ToDoList";

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <ToDoList />
            </div>
        </div>
    );
}

export default Home;
