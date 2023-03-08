import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
            
        <Link className="link1" to="/"> <p className="home">Home</p> </Link>
        <Link className="link1" to="/login"> <p className="login">Log In</p> </Link>
        <Link className="link1" to="/signup"> <p className=" signup">Sign Up</p> </Link>

        </nav>
    )      
}

export default Navbar;