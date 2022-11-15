import React from 'react'
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";

function Aim2() {
  return (
    <>
    <LeftNav2 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Aim</h1>
          <p>To find the shortest path between all the pairs of vertices in a weighted graph using Warshall's Algorithm.</p>
    </div>
    </>
  )
}

export default Aim2