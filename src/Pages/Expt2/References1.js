import React from 'react'
import LeftNav1 from "./LeftNav1";
import "../../styles/LeftNav.css";

function Reference1() {
  return (
    <>
    <LeftNav1 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
      <h1>References</h1>
      <a href="https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16">
        geeksforgeeks
      </a>
    </div>
    </>
  );
}

export default Reference1