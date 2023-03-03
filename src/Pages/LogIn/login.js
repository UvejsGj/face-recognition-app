import "./login.css"
import Navbar from "../../components/Navbar/navbar";

const LogIn = () => {
    return(
        <>
        <Navbar/>
        <form className="form" >
            <h1 className="loginaccount"> Log In </h1>
            <input className="email" type={"email"} placeholder="Email"/>
            <input className="password" type={"password"} placeholder="Password"/> 
            <input type={"button"} className="button" value="Log In" />
        </form>
        </>
    )
}

export default LogIn;