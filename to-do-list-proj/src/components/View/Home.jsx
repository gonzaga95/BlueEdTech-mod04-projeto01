import "./Home.css";
import Navbar from "../Navbar/Navbar";
import ToDoForm from "../ToDoForm/ToDoForm";

function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <ToDoForm />
            </div>
        </div>
    );
}

export default Home;
