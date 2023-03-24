import React from "react";
import Sets from "./LeftNav4";
import "../../styles/LeftNav.css";

function Aim() {
  return (
    <>
      <Sets />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Aim</h1>
        <p>
          The aim of this experiment is to demonstrate the practical application
          of the pigeonhole principle in solving mathematical problems related
          to counting and combinatorics. The experiment will involve the use of
          concrete examples to illustrate the concept of the pigeonhole
          principle and its relevance in real-world situations.
        </p>
      </div>
    </>
  );
}

export default Aim;
