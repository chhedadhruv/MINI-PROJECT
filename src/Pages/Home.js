import React from "react";
import "../styles/Animation.css";
// import ExperimentList from '../Pages/ExperimentList'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AnimatedBox() {
  return (
    <>
      <Navbar />
      <div className="col">
        <div className="box">
          <div className="title">
            <h1 className="line-1 anim-typewriter">DISCRETE STRUCTURES</h1>
            <h1 className="line-1 anim-typewriter">AND</h1>
            <h1 className="line-1 anim-typewriter">GRAPH THEORY</h1>
            <h1 className="line-1 anim-typewriter">VIRTUAL LAB</h1>
          </div>
        </div>
        <button>
          <Link to="/experiments" className="link">
            Get Started
          </Link>
        </button>
      </div>
    </>
  );
}

export default AnimatedBox;
