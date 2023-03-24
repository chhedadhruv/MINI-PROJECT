import React from "react";
import Sets from "./LeftNav5";

function Procedure() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Procedure</h1>
        <h3>Operations on Sets:</h3>
        <p>
          In set theory, the operations of the sets are carried when two or more
          sets combine to form a single set under some of the given conditions.
          The basic operations on sets are: 1. Union of sets 2.
          Intersection of sets
        </p>

        <h4>Union of Sets</h4>
        <p>
          If set A and set B are two sets, then A union B is the set that
          contains all the elements of set A and set B. It is denoted as A ∪ B.
          Example: Set A = (1, 2, 3) and B = (4, 5, 6), then A union B is: A ∪
          B = (1, 2, 3, 4, 5, 6)
        </p>

        <h4>Intersection of Sets</h4>
        <p>
          If set A and set B are two sets, then A intersection B is the set that
          contains only the common elements between set A and set B. It is
          denoted as A ∩ B. Example: Set A = {(1, 2, 3)} and B = {(4, 5, 6)},
          then A intersection B is: A ∩ B = {} or Ø Since A and B do not have
          any elements in common, so their intersection will give null set.
        </p>
      </div>
    </>
  );
}

export default Procedure;
