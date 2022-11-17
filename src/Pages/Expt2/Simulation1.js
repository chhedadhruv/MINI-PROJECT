import React, { useState } from "react";
import LeftNav1 from "./LeftNav1";
import "../../styles/LeftNav.css";
import "../../styles/Warshal.css";

function Simulation1() {
  const [w11, setW11] = useState("");
  const [w12, setW12] = useState("");
  const [w13, setW13] = useState("");
  const [w14, setW14] = useState("");
  const [w21, setW21] = useState("");
  const [w22, setW22] = useState("");
  const [w23, setW23] = useState("");
  const [w24, setW24] = useState("");
  const [w31, setW31] = useState("");
  const [w32, setW32] = useState("");
  const [w33, setW33] = useState("");
  const [w34, setW34] = useState("");
  const [w41, setW41] = useState("");
  const [w42, setW42] = useState("");
  const [w43, setW43] = useState("");
  const [w44, setW44] = useState("");
  const handlew11 = (event) => {
    setW11(event.target.value);
  };
  const handlew12 = (event) => {
    setW12(event.target.value);
  };
  const handlew13 = (event) => {
    setW13(event.target.value);
  };
  const handlew14 = (event) => {
    setW14(event.target.value);
  };
  const handlew21 = (event) => {
    setW21(event.target.value);
  };
  const handlew22 = (event) => {
    setW22(event.target.value);
  };
  const handlew23 = (event) => {
    setW23(event.target.value);
  };
  const handlew24 = (event) => {
    setW24(event.target.value);
  };
  const handlew31 = (event) => {
    setW31(event.target.value);
  };
  const handlew32 = (event) => {
    setW32(event.target.value);
  };
  const handlew33 = (event) => {
    setW33(event.target.value);
  };
  const handlew34 = (event) => {
    setW34(event.target.value);
  };
  const handlew41 = (event) => {
    setW41(event.target.value);
  };
  const handlew42 = (event) => {
    setW42(event.target.value);
  };
  const handlew43 = (event) => {
    setW43(event.target.value);
  };
  const handlew44 = (event) => {
    setW44(event.target.value);
  };
  function floydWarshall(matrice) {
    var temp = [];
    var temp2 = [];
    var temp3 = [];

    for (var k = 0; k < matrice.length; k++) {
      for (var i = 0; i < matrice.length; i++) {
        for (var j = 0; j < matrice.length; j++) {
          temp.push(matrice[j][i] * matrice[k][j]);
        }
        if (sum(temp) > 0) {
          temp2.push(1);
        } else {
          temp2.push(0);
        }
        temp = [];
      }
      temp3.push(temp2);
      temp2 = [];
    }
    return temp3;
  }

  function sum(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0);
  }

  // Matrices examples
  // var matrice8 = [
  //   [1, 0, 1, 0, 0, 0, 0, 0],
  //   [1, 1, 0, 1, 0, 0, 0, 0],
  //   [1, 0, 1, 0, 0, 0, 0, 0],
  //   [1, 0, 0, 1, 0, 0, 1, 0],
  //   [0, 1, 0, 0, 1, 0, 1, 0],
  //   [0, 0, 1, 0, 0, 1, 0, 0],
  //   [0, 0, 1, 0, 0, 1, 1, 1],
  //   [0, 0, 0, 0, 1, 0, 0, 1]
  // ];

  var matrice4 = [
    [w11, w12, w13, w14],
    [w21, w22, w23, w24],
    [w31, w32, w33, w34],
    [w41, w42, w43, w44],
  ];

  // console.log(floydWarshall(matrice4));
  // function onClick() {
  //   console.log(floydWarshall(matrice4));
  //   const warshalalgorithm = floydWarshall(matrice4);
  // }
  const warshalalgorithm = floydWarshall(matrice4);

  return (
    <>
      <LeftNav1 />
      <div style={{ position: "absolute", top: 130, left: 150 }}>
        <h1>Simulation</h1>
        <div className="col">
          <div className="row">
            <input
              type="number"
              className="set-input"
              style={{ margin: 5 }}
              value={w11}
              onChange={handlew11}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w12}
              onChange={handlew12}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w13}
              onChange={handlew13}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w14}
              onChange={handlew14}
            ></input>
          </div>
          <div className="row">
            <input
              type="number"
              className="set-input"
              style={{ margin: 5 }}
              value={w21}
              onChange={handlew21}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w22}
              onChange={handlew22}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w23}
              onChange={handlew23}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w24}
              onChange={handlew24}
            ></input>
          </div>
          <div className="row">
            <input
              type="number"
              className="set-input"
              style={{ margin: 5 }}
              value={w31}
              onChange={handlew31}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w32}
              onChange={handlew32}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w33}
              onChange={handlew33}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w34}
              onChange={handlew34}
            ></input>
          </div>
          <div className="row">
            <input
              type="number"
              className="set-input"
              style={{ margin: 5 }}
              value={w41}
              onChange={handlew41}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w42}
              onChange={handlew42}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w43}
              onChange={handlew43}
            ></input>
            <input
              type="number"
              className="set-input"
              value={w44}
              onChange={handlew44}
            ></input>
          </div>
        </div>
        <hr style={{ marginTop: 10 }} />
        <h2 style={{ marginBottom: 5, textAlign: "center" }}>Output</h2>
        {/* <button onClick={onClick}>Submit</button> */}
        {warshalalgorithm.map((row) => (
          <div className="warshal" style={{ textAlign: "center" }}>
            {row.map((col) => (
              <span
                style={{ fontSize: "1.5rem", margin: 3 }}
                className="warshal-algo"
              >
                {col}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Simulation1;
