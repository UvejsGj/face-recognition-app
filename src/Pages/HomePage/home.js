// import logo from './logo.svg';
import "./home.css";
import React, { useState, useRef } from "react";
import Navbar from "../../../src/components/Navbar/navbar"
import Logo from '../../../src/components/Logo/logo';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tilt from "react-parallax-tilt"
import ImageLinkForm from "../../components/ImagaeLinkForm/ImageLinkForm";
import {Camera} from "react-camera-pro";

  const HomePage = () => {

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

 
      const camera = useRef(null);
      const [numberOfCameras, setNumberOfCameras] = useState(0);
    


    

    return (
      
    <div className='Home'>
      <div className="camera" >
     <Camera className="camera" aspectRatio={16 / 9} ref={camera} numberOfCamerasCallback={setNumberOfCameras} />
      
      </div>
      <button
        hidden={numberOfCameras <= 1}
        onClick={() => {
          camera.current.switchCamera();
        }}
      />

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

  
      <Navbar/>
      <Logo/>
      <Tilt/>
      <ImageLinkForm onInputChnange={onInputChange} onButtonSubmit={onButtonSubmit} />

    </div>
    );
  
};

export default HomePage;