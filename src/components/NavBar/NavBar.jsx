import React from "react";
import "./NavBar.css";
import accLogo from "../../assets/albany-can-code-logo-white.png";

function NavBar() {
    return (
        <nav>
            <img alt="AlbanyCanCode Logo" src={accLogo}/>
            <span>DATA PORTAL</span>
            <div id="menu">Menu</div>
        </nav>
    )
}

export default NavBar;
