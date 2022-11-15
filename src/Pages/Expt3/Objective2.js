import React from 'react'
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";

function Objective2() {
  return (
    <>
    <LeftNav2 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
      <h1>Objective</h1>
      <p>
        The student will be able to:
        <ol>
          <li>To find the shortest path is a directed graph</li>
          <li>Find the transitive closure of directed graphs</li>
          <li>To find the Inversion of real matrices</li>
          <li>For testing whether an undirected graph is bipartite</li>
        </ol>
      </p>
    </div>
    </>
  );
}

export default Objective2