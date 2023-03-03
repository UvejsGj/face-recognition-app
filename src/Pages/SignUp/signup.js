import "./signup.css";
import Navbar from "../../components/Navbar/navbar";

const SignUp = () => {
    return(
        <>
        <Navbar/>
        <form className="forms" >
            <h1 className="createaccount"> CREATE ACCOUNT </h1>
            <input className="firstname" placeholder="First Name"/>
            <input className="lastname" placeholder="Last Name"/>
            <input className="email" type={"email"} placeholder="Email"/>
            <input className="password" type={"password"} placeholder="Password"/> 
            <input className="retypepassword" type={"password"} placeholder="Re-type password"/>
            <input type={"button"} className="button" value="Sign Up" />
        </form>
        </>
    )
}

export default SignUp;