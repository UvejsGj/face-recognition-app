import "./signup.css";
import Navbar from "../../components/Navbar/navbar";
import Tilt from "react-parallax-tilt"  

const SignUp = () => {
    return(
        <>
        <Navbar/>
        
          <Tilt/>
        <form className="forms" >
            <h1 className="createaccount"> CREATE ACCOUNT </h1>
            <input className="firstname" placeholder="First Name" required/>
            <input className="lastname" placeholder="Last Name" required/>
            <input className="email" type={"email"} placeholder="Email" required/>
            <input className="password" type={"password"} placeholder="Password" required/> 
            <input className="retypepassword" type={"password"} placeholder="Re-type password" required/>
            <input type={"button"} className="button" value="Sign Up" />
        </form>
        </>
    )
}

export default SignUp;