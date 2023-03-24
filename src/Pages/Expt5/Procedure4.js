import React from "react";
import Sets from "./LeftNav4";

function Procedure() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Procedure</h1>
        <p>
          Each student or group of students is given a set of small objects,
          such as coins or marbles. The teacher provides a problem statement,
          such as "If you have a bag of 10 marbles, and each marble is either
          red or blue, how many marbles must you select to guarantee that you
          have two marbles of the same color?" Students work individually or in
          groups to solve the problem using the pigeonhole
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
