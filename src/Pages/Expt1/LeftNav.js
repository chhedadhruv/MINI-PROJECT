import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/LeftNav.css";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function SetsSim() {
  return (
    <>
      <div className="column">
        <Navbar />
        <div className="left-nav">
          <div className="link-nav">
            <ul>
              <li>
                <Link to="/setsexp/aim" className="link">
                  Aim
                </Link>
              </li>
              <li>
                <Link className="link" to="/setsexp/theory">
                  Theory
                </Link>
              </li>
              <li>
                <Link className="link" to="/setsexp/objective">
                  Objective
                </Link>
              </li>
              <li>
                <Link className="link" to="/setsexp/procedure">
                  Procedure
                </Link>
              </li>
              <li>
                <Link className="link" to="/setsexp/simulation">
                  Simulation
                </Link>
              </li>
              <li>
                <Link className="link" to="/setsexp/references">
                  References
                </Link>
              </li>
              <li>
                <Link className="link" to="/feedback">
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

export default SetsSim;
