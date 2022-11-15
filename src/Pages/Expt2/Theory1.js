import React from 'react'
import LeftNav1 from "./LeftNav1";
import "../../styles/LeftNav.css";

function Theory1() {
  return (
    <>
    <LeftNav1 />
    <div style = {{ position: "absolute", top: 130, left: 150 }}>
        <h1>Theory</h1>
        <h4>Warshall Algorithm:</h4>
        <p>
          Warshall's algorithm is used to determine the transitive closure of a directed graph or all paths in a directed graph by using the adjacency matrix. 
          For this, it generates a sequence of n matrices. 
          Where, n is used to describe the number of vertices. R(0), ..., R(k-1), R(k), ... , R(n) A sequence of vertices is used to define a path in a simple graph. 
          In the kth matrix (R(k)), (rij(k)), the element's definition at the ith row and jth column will be one if it contains a path from vi to vj. 
          For all intermediate vertices, wq is among the first k vertices that mean 1 ≤ q ≤ k.
        </p>
    </div>
    </>
  )
}

export default Theory1