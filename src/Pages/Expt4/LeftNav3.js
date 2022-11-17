import React from "react";
import Navbar from "../../components/Navbar";
import "../../styles/LeftNav.css";
import { Link } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function LeftNav3() {
  return (
    <>
      <div className="column">
        <Navbar />
        <div className="left-nav">
          <div className="link-nav">
            <ul>
              <li>
                <Link to="/graphtheory/aim" className="link">
                  Aim
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/theory">
                  Theory
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/objective">
                  Objective
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/procedure">
                  Procedure
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/simulation">
                  Types of Graphs
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/references">
                  References
                </Link>
              </li>
              <li>
                <Link className="link" to="/graphtheory/feedback">
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

export default LeftNav3;
