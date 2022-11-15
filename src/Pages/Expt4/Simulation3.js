import React from 'react'
import LeftNav3 from "./LeftNav3";
import "../../styles/LeftNav.css";
// import '../../styles/Sets.css';

function Simulation3() {
  return (
    <>
    <LeftNav3 />
    <div style={{ position: "absolute", top: 130, left: 150 }}><h1>Simulation</h1>
    <h3>Please enter the following values</h3>
    <div>
        <h3>n(A⋃B) = </h3>
        <input type="text" id="nAB" name="nAB" />
    </div>
    </div>
    </>
  )
}

export default Simulation3