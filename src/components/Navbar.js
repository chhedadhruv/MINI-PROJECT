import React from "react";
import logo from "../assets/logo.png";
import dsgt from "../assets/DSGT-logos_black.png";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <img src={dsgt} alt="logo" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
