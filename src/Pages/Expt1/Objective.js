import React from "react";
import Sets from "./LeftNav";

function Objective() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Objective</h1>
        <p>
          The student will be able to:
          <ol>
            <li>
              Define set, inclusive, element, object, and roster notation.
            </li>
            <li>Identify the elements of a given set.</li>
            <li>Define Venn diagram, intersection, and union.</li>
          </ol>
        </p>
      </div>
    </>
  );
}

export default Objective;
