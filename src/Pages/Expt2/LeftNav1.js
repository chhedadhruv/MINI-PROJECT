import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/LeftNav.css";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function LeftNav1() {
  return (
    <>
      <div className="column">
        <Navbar />
        <div className="left-nav">
          <div className="link-nav">
            <ul>
              <li>
                <Link to="/warshals/aim" className="link">
                  Aim
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/theory">
                  Theory
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/objective">
                  Objective
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/procedure">
                  Procedure
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/simulation">
                  Simulation
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/references">
                  References
                </Link>
              </li>
              <li>
                <Link className="link" to="/warshals/feedback">
                  Feedback
                </Link>
              </li>
              <li>
                <Link className="link" to="/experiments">
                  <BsFillArrowLeftCircleFill /> Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftNav1;
