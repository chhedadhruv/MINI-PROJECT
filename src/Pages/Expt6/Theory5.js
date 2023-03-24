import React from "react";
import Sets from "./LeftNav5";

function Theory() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Theory</h1>
        <p>
          Recurrence relations play a crucial role in discrete mathematics and
          are used to describe and analyze a wide range of phenomena, from the
          growth of populations to the complexity of algorithms. A recurrence
          relation is an equation that recursively defines a sequence of
          numbers, where each term of the sequence is expressed in terms of one
          or more of the previous terms. 
        </p>
        <p>
          Recurrence relations can be classified
          into linear and nonlinear types. Linear recurrence relations have the
          form an = c1an-1 + c2an-2 + ... + ck an-k, where c1, c2, ..., ck are
          constants and k is a non-negative integer. Nonlinear recurrence
          relations, on the other hand, involve products or powers of previous
          terms.
        </p>
      </div>
    </>
  );
}

export default Theory;
