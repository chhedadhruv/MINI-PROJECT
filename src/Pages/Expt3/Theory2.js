import React from "react";
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";

function Theory2() {
  return (
    <>
      <LeftNav2 />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Theory</h1>
        <h4>Principle of Inclusion Exclusion:</h4>
        <p>
          Principle of Inclusion and Exclusion is an approach which derives the
          method of finding the number of elements in the union of two finite
          sets. This is used for solving combinations and probability problems
          when it is necessary to find a counting method, which makes sure that
          an object is not counted twice. Consider two finite sets A and B. We
          can denote the Principle of Inclusion and Exclusion formula as
          follows. n(A⋃B) = n(A) + n(B) – n(A⋂B) Here n(A) denotes the
          cardinality of set A, n(B) denotes the cardinality of set B and n(A⋂B)
          denotes the cardinality of (A⋂B). We have included A and B and
          excluded their common elements.
        </p>
      </div>
    </>
  );
}

export default Theory2;
