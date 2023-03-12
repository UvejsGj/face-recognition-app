import "./login.css"
import Navbar from "../../components/Navbar/navbar";
import Tilt from "react-parallax-tilt"  

const LogIn = () => {
  
    return(
        <>
        
        <Navbar/>
        <Tilt/>
        <form className="form" >
            <h1 className="loginaccount"> Log In </h1>
            <input className="email" type={"email"} placeholder="Email" required/>
            <input className="password" type={"password"} placeholder="Password" required/> 
            <input type={"button"} className="button1" value="Log In" required/>
        </form>
        </>
    )
}

export default LogIn;