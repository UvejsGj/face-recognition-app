import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{display: "flex", justifyContent: "flex-end"}}>
        <Link to="/login"> <p className="f3 pa3 ma4 link dim black underline pointer">Log In</p> </Link>
        <Link to="/signup"> <p className="f3 pa3 ma4 link dim black underline pointer">Sign Up</p> </Link>

        </nav>
    )      
}

export default Navbar;