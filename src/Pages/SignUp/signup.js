import "./signup.css";
import Navbar from "../../components/Navbar/navbar";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt"  
import { useCallback } from "react";

const SignUp = () => {

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);
    return(
        <>
        <Navbar/>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
       // },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3  ,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle ",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
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