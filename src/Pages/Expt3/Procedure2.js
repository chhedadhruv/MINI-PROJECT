import React from "react";
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";
import Image14 from "../../Images/14.jpeg";

function Procedure2() {
  return (
    <>
      <LeftNav2 />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Procedure</h1>
        <h3>Theorem 1. The Principle of Inclusion-Exclusion:</h3>
        <p>Let A1, A2, …, An be finite sets. Then:</p>
        <img src={Image14} height="100" alt="" />
        <p>
          Proof: An element in the union is counted exactly once in the
          right-hand side of the equation.
        </p>
        Consider
        <p>
          an element a that is a member of r of the sets A1 ,…., An where 1≤ r ≤
          n.
        </p>
        <p>It is counted C(r,1) times by Σ|Ai|</p>
        <p>It is counted C(r,2) times by Σ|Ai ⋂Aj|</p>
        <p>
          In general, it is counted C(r,m) times by the summation of m of the
          sets Ai.
        </p>
        <p>
          Thus the element is counted exactly C(r,1) − C(r,2) + C(r,3) − ⋯ +
          (−1)r+1 C(r,r) times by the right hand side of the equation.{" "}
        </p>
        <p>By Corollary 2 of Section 6.4, we have</p>
        <p>C(r,0) − C(r,1) + C(r,2) − ⋯ + (−1)r C(r,r) = 0.</p>
        <p>Hence, 1 = C(r,0) = C(r,1) − C(r,2) + ⋯ + (−1)r+1 C(r,r)</p>
      </div>
    </>
  );
}

export default Procedure2;
