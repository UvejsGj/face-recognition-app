import React from "react";
import LogoImg from "./brain.png"

const Logo = () => {
    return(
        <div className="logo shadow-2 w4 h4 ma4 br4 grow pa3 ">
            <img src={LogoImg} alt="brain logo"></img>
        </div>
    )
}

export default Logo;