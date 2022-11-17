import React from "react";
import LeftNav1 from "./LeftNav1";
import "../../styles/LeftNav.css";

function Objective1() {
  return (
    <>
      <LeftNav1 />
      <div style={{ position: "absolute", top: 130, left: 170 }}>
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

export default Objective1;
