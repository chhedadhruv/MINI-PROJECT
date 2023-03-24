import React, { useState } from "react";
import "../styles/Sets.css";

function Intersection() {
  const [setA1Value, setSetA1Value] = useState("");
  const [setA2Value, setSetA2Value] = useState("");
  const [setA3Value, setSetA3Value] = useState("");
  const [setA4Value, setSetA4Value] = useState("");
  const [setA5Value, setSetA5Value] = useState("");
  const [setB1Value, setSetB1Value] = useState("");
  const [setB2Value, setSetB2Value] = useState("");
  const [setB3Value, setSetB3Value] = useState("");
  const [setB4Value, setSetB4Value] = useState("");
  const [setB5Value, setSetB5Value] = useState("");
  const [setC1Value, setSetC1Value] = useState("");
  const [setC2Value, setSetC2Value] = useState("");
  const [setC3Value, setSetC3Value] = useState("");
  const [setC4Value, setSetC4Value] = useState("");
  const [setC5Value, setSetC5Value] = useState("");
  const handleSetA1Value = (event) => {
    setSetA1Value(event.target.value);
  };
  const handleSetA2Value = (event) => {
    setSetA2Value(event.target.value);
  };
  const handleSetA3Value = (event) => {
    setSetA3Value(event.target.value);
  };
  const handleSetA4Value = (event) => {
    setSetA4Value(event.target.value);
  };
  const handleSetA5Value = (event) => {
    setSetA5Value(event.target.value);
  };
  const handleSetB1Value = (event) => {
    setSetB1Value(event.target.value);
  };
  const handleSetB2Value = (event) => {
    setSetB2Value(event.target.value);
  };
  const handleSetB3Value = (event) => {
    setSetB3Value(event.target.value);
  };
  const handleSetB4Value = (event) => {
    setSetB4Value(event.target.value);
  };
  const handleSetB5Value = (event) => {
    setSetB5Value(event.target.value);
  };
  const handleIntersection = () => {
    if (
      setA1Value === setB1Value ||
      setA1Value === setB2Value ||
      setA1Value === setB3Value ||
      setA1Value === setB4Value ||
      setA1Value === setB5Value
    ) {
      setSetC1Value(setA1Value);
    }
    if (
      setA2Value === setB1Value ||
      setA2Value === setB2Value ||
      setA2Value === setB3Value ||
      setA2Value === setB4Value ||
      setA2Value === setB5Value
    ) {
      setSetC2Value(setA2Value);
    }
    if (
      setA3Value === setB1Value ||
      setA3Value === setB2Value ||
      setA3Value === setB3Value ||
      setA3Value === setB4Value ||
      setA3Value === setB5Value
    ) {
      setSetC3Value(setA3Value);
    }
    if (
      setA4Value === setB1Value ||
      setA4Value === setB2Value ||
      setA4Value === setB3Value ||
      setA4Value === setB4Value ||
      setA4Value === setB5Value
    ) {
      setSetC4Value(setA4Value);
    }
    if (
      setA5Value === setB1Value ||
      setA5Value === setB2Value ||
      setA5Value === setB3Value ||
      setA5Value === setB4Value ||
      setA5Value === setB5Value
    ) {
      setSetC5Value(setA5Value);
    }
    if (
      setA1Value === "" &&
      setA2Value === "" &&
      setA3Value === "" &&
      setA4Value === "" &&
      setA5Value === "" &&
      setB1Value !== "" &&
      setB2Value !== "" &&
      setB3Value !== "" &&
      setB4Value !== "" &&
      setB5Value !== ""
    ) {
      alert("Set A is empty");
    }
    if (
      setB1Value === "" &&
      setB2Value === "" &&
      setB3Value === "" &&
      setB4Value === "" &&
      setB5Value === "" &&
      setA1Value !== "" &&
      setA2Value !== "" &&
      setA3Value !== "" &&
      setA4Value !== "" &&
      setA5Value !== ""
    ) {
      alert("Set B is empty");
    }
    if (
      setA1Value === "" &&
      setA2Value === "" &&
      setA3Value === "" &&
      setA4Value === "" &&
      setA5Value === "" &&
      setB1Value === "" &&
      setB2Value === "" &&
      setB3Value === "" &&
      setB4Value === "" &&
      setB5Value === ""
    ) {
      alert("Both sets are empty");
    }
    // if (
    //   setA1Value === setA2Value ||
    //   setA1Value === setA3Value ||
    //   setA1Value === setA4Value ||
    //   setA1Value === setA5Value ||
    //   setA2Value === setA3Value ||
    //   setA2Value === setA4Value ||
    //   setA2Value === setA5Value ||
    //   setA3Value === setA4Value ||
    //   setA3Value === setA5Value ||
    //   setA4Value === setA5Value
    // ) {
    //   alert("Set A has duplicate elements.Enter a valid set");
    // }
    // if (
    //   setB1Value === setB2Value ||
    //   setB1Value === setB3Value ||
    //   setB1Value === setB4Value ||
    //   setB1Value === setB5Value ||
    //   setB2Value === setB3Value ||
    //   setB2Value === setB4Value ||
    //   setB2Value === setB5Value ||
    //   setB3Value === setB4Value ||
    //   setB3Value === setB5Value ||
    //   setB4Value === setB5Value
    // ) {
    //   alert("Set B has duplicate elements.Enter a valid set");
    // }
  };
  return (
    <div className="row">
      <div className="set-a">
        <input
          type="text"
          id="set-a1"
          className="set-input"
          onChange={handleSetA1Value}
          value={setA1Value}
        ></input>
        <input
          type="text"
          id="set-a2"
          className="set-input"
          onChange={handleSetA2Value}
          value={setA2Value}
        ></input>
        <input
          type="text"
          id="set-a3"
          className="set-input"
          onChange={handleSetA3Value}
          value={setA3Value}
        ></input>
        <input
          type="text"
          id="set-a4"
          className="set-input"
          onChange={handleSetA4Value}
          value={setA4Value}
        ></input>
        <input
          type="text"
          id="set-a5"
          className="set-input"
          onChange={handleSetA5Value}
          value={setA5Value}
        ></input>
      </div>
      <h1>⨅</h1>
      <div className="set-b">
        <input
          type="text"
          id="set-b1"
          className="set-input"
          onChange={handleSetB1Value}
          value={setB1Value}
        ></input>
        <input
          type="text"
          id="set-b2"
          className="set-input"
          onChange={handleSetB2Value}
          value={setB2Value}
        ></input>
        <input
          type="text"
          id="set-b3"
          className="set-input"
          onChange={handleSetB3Value}
          value={setB3Value}
        ></input>
        <input
          type="text"
          id="set-b4"
          className="set-input"
          onChange={handleSetB4Value}
          value={setB4Value}
        ></input>
        <input
          type="text"
          id="set-b5"
          className="set-input"
          onChange={handleSetB5Value}
          value={setB5Value}
        ></input>
      </div>
      <button className="btn" onClick={handleIntersection}>
        <h1>=</h1>
      </button>
      <div className="set-c">
        <input
          type="text"
          id="set-c1"
          className="intersection-input"
          value={setC1Value}
        ></input>
        <input
          type="text"
          id="set-c2"
          className="intersection-input"
          value={setC2Value}
        ></input>
        <input
          type="text"
          id="set-c3"
          className="intersection-input"
          value={setC3Value}
        ></input>
        <input
          type="text"
          id="set-c4"
          className="intersection-input"
          value={setC4Value}
        ></input>
        <input
          type="text"
          id="set-c5"
          className="intersection-input"
          value={setC5Value}
        ></input>
      </div>
    </div>
  );
}

export default Intersection;
