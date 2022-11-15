import React from 'react'
import LeftNav3 from "./LeftNav3";
import "../../styles/LeftNav.css";

function Objective3() {
  return (
    <>
    <LeftNav3 />
    <div style={{ position: "absolute", top: 130, left: 170 }}>
      <h1>Objective</h1>
      <p>
        The student will be able to:
        <ol>
          <li>Plot a graph based on the given matrix</li>
          <li>Find the matrix of representation based on the given graph</li>
          <li>Understand the different types of graphs</li>
        </ol>
      </p>
    </div>
    </>
  );
}

export default Objective3