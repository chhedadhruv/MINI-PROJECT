import React from "react";
import Sets from "./LeftNav5";

function Objective() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 170 }}>
        <h1>Objective</h1>
        <p>
          <ol>
            <li>
              To introduce students to the concept of recurrence relations and
              their applications in solving problems related to discrete
              structures and graph theory.
            </li>
            <li>
              To provide students with practical experience in identifying and
              defining recurrence relations for various types of problems.
            </li>
            <li>
              To help students develop an understanding of the various
              techniques used to solve recurrence relations, including
              substitution, iteration, and generating functions.
            </li>
            <li>
              To reinforce the theoretical concepts learned in class through practical applications and experimentation.
            </li>
          </ol>
        </p>
      </div>
    </>
  );
}

export default Objective;
