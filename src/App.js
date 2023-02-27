// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Logo from './components/Logo/logo';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt"
import ImageLinkForm from "./components/ImagaeLinkForm/ImageLinkForm"

  const App = () => {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
      await loadFull(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);

    const onInputChange = (event) => {
      console.log(event.target.value);
    }

    const onButtonSubmit = () => {
      console.log("clicked");
    }
    

    return (
      <div className='App'>
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
              distance: 200,
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
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />

  
      <Navbar/>
      <Logo/>
      <Tilt/>
      <ImageLinkForm onInputChnange={onInputChange} onButtonSubmit={onButtonSubmit} />

    </div>
      

    );
  
};

export default App