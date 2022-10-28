import React from "react";
import LogoImg from "./brain.png"
import './logo.css';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
    return(
        <Tilt 
        className="Tilt"
        options={{max:55}}
        style={{height: 250, width: 250}}>
            <div className="logo shadow-2 w4 h4 mh3 br2 pa4 grow">
            <img src={LogoImg} alt="brain logo"></img>
        </div>
        </Tilt>
    )
}

export default Logo;