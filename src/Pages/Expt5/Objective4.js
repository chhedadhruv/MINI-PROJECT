import React from "react";
import Sets from "./LeftNav4";

function Objective() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 170 }}>
        <h1>Objective</h1>
        <p>
          <ol>
            <li>
              To provide concrete examples of the pigeonhole principle in action
              and help students develop an intuitive understanding of the
              concept.
            </li>
            <li>
              To introduce students to the concept of the pigeonhole principle
              and its applications in combinatorial mathematics.
            </li>
            <li>
              To evaluate students' understanding of the pigeonhole principle
              and their ability to apply it to solve mathematical problems.
            </li>
          </ol>
        </p>
      </div>
    </>
  );
}

export default Objective;
