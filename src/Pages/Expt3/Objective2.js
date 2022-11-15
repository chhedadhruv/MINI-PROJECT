import React from 'react'
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";
import Image12 from "../../Images/12.jpeg";
import Image13 from "../../Images/13.jpeg";

function Objective2() {
  return (
    <>
    <LeftNav2 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
      <h1>Objective</h1>
  
      <p>Principle of Inclusion and Exclusion is an approach which derives the method of 
            finding the number of elements in the union of two finite sets. This is used for 
            solving combinations and probability problems when it is necessary to 
            find a counting method, which makes sure that an object is not counted twice.</p>
      <p>Consider two finite sets A and B. We can denote the Principle of Inclusion and Exclusion formula as follows:-</p>
            <p>n(A⋃B) = n(A) + n(B) – n(A⋂B)</p>
            <img src ={Image12} height ="250"></img>
            <p>If we have 3 sets A, B, and C, then according to the Principle of Inclusion and Exclusion,</p> 
              <p>n(A⋃B⋃C) = n(A) + n(B) + n(C) – n(A⋂B) – n(A⋂C) – n(B⋂C) + n(A⋂B⋂C)</p>
            <img src ={Image13} height ="250"></img>          
    </div>
    </>
  );
}

export default Objective2