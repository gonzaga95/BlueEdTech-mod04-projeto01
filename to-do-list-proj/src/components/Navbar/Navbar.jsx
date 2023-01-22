import "./Navbar.css";
import logoBlue from "../../assets/images/logoblue.gif"

function Navbar() {

    return(
        <div className="Navbar">
            <h1 className="Title">To Do List</h1>
            <img src={logoBlue} alt="Logo da Blue EdTech" width="120px" />
        </div>
    );
}

export default Navbar;