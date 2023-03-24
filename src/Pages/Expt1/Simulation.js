import React from "react";
import Sets from "./LeftNav";
import "../../styles/Sets.css";
import Intersection from "../../Simulations/Intersection";
import Union from "../../Simulations/Union";

function Simulation() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Simulation</h1><br />
        <Intersection />
        <br /><br />
        <Union />
      </div>
    </>
  );
}

export default Simulation;
