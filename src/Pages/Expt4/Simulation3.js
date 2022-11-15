import React from 'react'
import LeftNav3 from "./LeftNav3";
import "../../styles/LeftNav.css";
import '../../styles/Sets.css';
import Image1 from '../../Images/1.jpeg';
import Image2 from '../../Images/2.jpeg';
import Image3 from '../../Images/3.jpeg';
import Image4 from '../../Images/4.jpeg';
import Image5 from '../../Images/5.jpeg';
import Image6 from '../../Images/6.jpeg';
import Image7 from '../../Images/7.jpeg';
import Image8 from '../../Images/8.jpeg';
import Image9 from '../../Images/9.jpeg';
import Image10 from '../../Images/10.jpeg';
import Image11 from '../../Images/11.jpeg';

function Simulation3() {
  return (
    <>
    <LeftNav3 />
    <div style={{ position: "absolute", top: 130, left: 170, maxHeight:'95vh', overflow:'auto', width:'88.5%' }}>
        <h1>Types of Graph</h1>
            <p>
              {/* Directed graph: */}
              <img src ={Image2} height ="200" alt=''></img>
            
              {/* Undirected Graph: */}
              <img src ={Image1} height ="200" alt=''></img>
            </p>
          <p>
            Other types of graph
            There are also some other types of graphs, which
            are described as follows:
            </p>
            <p>
            Null Graph:<br></br>
            <img src ={Image3} height ="200" alt=''></img>
            <br></br>
</p>
           <p>
             Simple Graph:<br></br>
            <img src ={Image4} height ="200" alt=''></img>
            </p>
            <p>
            Multi-Graph:<br></br>
            <img src ={Image5} height ="200" alt=''></img>

            <p>
            Connected Graph: <br></br>      
            <img src ={Image6} height ="200" alt=''></img>
            </p>
            
            <p>
            Disconnected Graph:<br></br> 
            <img src ={Image7} height ="200" alt=''></img>
            </p>
            <p>
            Cycle Graph:<br></br>
            <img src ={Image8} height ="200" alt=''></img>
            </p>
            <p>
            Complete Graph: <br></br>
            <img src ={Image9} height ="200" alt=''></img>
            </p>
            <p>
            Planer Graph:<br></br>
            <img src ={Image10} height ="200" alt=''></img>
            </p>
            <p>
            Non-planer graph:<br></br>
            <img src ={Image11} height ="200" alt=''></img>
            </p>
          </p>
    </div>
    </>
  )
}

export default Simulation3