import React from "react";

const NavBar = () => {
    return (
        <nav className="nav">
        <div className="navItem Profile">Аз есмь</div>
        <div className="navItem Messages">Послания</div>
        <div className="navItem News">Известия</div>
        <div className="navItem Settings">Наладка</div>
      </nav>
    )
}

export default NavBar;