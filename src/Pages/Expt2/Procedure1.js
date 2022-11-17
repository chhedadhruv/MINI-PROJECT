import React from "react";
import LeftNav1 from "./LeftNav1";
import "../../styles/LeftNav.css";

function Procedure1() {
  return (
    <>
      <LeftNav1 />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Procedure</h1>
        <h3>Operations on Sets:</h3>
        <p>
          Warshall algorithm is used to find all pair shortest path problem from
          a given weighted graph. As a result of this algorithm, it will
          generate a matrix, which will represent the minimum distance from any
          node to all other nodes in the graph. At first, the output matrix is
          the same as the given cost matrix of the graph. After that, the output
          matrix will be updated with all vertices k as the intermediate vertex.
        </p>
      </div>
    </>
  );
}

export default Procedure1;
