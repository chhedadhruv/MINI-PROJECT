import React from 'react'
import LeftNav3 from "./LeftNav3";
import "../../styles/LeftNav.css";

function Procedure3() {
  return (
    <>
    <LeftNav3 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
      <h1>Procedure</h1>
      <h3>Graph Theory:</h3>
      <p>
          The procedure to draw a graph for any given function or to calculate any function is the algorithm of the graph. Basically, there are predefined steps or sets of instructions that have to be followed to solve a problem using graphical methods. There are different types of algorithms which the graph theory follows, such as:
      </p>
      <ul>
        <li> Bellman-Ford algorithm</li>
        <li>Borůvka’s algorithm</li>
        <li>Ford–Fulkerson algorithm</li>
        <li>Edmonds–Karp algorithm and many more.</li>
      </ul>
    </div>
    </>
  )
}

export default Procedure3