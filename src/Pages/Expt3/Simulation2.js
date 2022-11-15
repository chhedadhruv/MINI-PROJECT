import React, {useState} from 'react'
import LeftNav2 from "./LeftNav2";
import "../../styles/LeftNav.css";
import "../../styles/Sets.css";
// import '../../styles/Sets.css';

function Simulation2() {
    // const [nAB, setnAB] = React.useState("");
    const [nA, setnA] = useState("");
    const [nB, setnB] = useState("");
    const [nC, setnC] = useState("");
    const [nAUB, setnAUB] = useState("");
    const [nAUBC, setnAUBC] = useState("");
    const [nAintB, setnAintB] = useState("");
    const [nAintC, setnAintC] = useState("");
    const [nBintC, setnBintC] = useState("");
    const [nAintBintC, setnAintBintC] = useState("");
    const handlenA = (event) => {
        setnA(event.target.value);
    };
    const handlenB = (event) => {
        setnB(event.target.value);
    };
    const handlenC = (event) => {
        setnC(event.target.value);
    };
    const handlenAUB = (event) => {
        setnAUB(parseInt(nA) + parseInt(nB) - parseInt(nAintB));
    };
    const handlenAUBC = (event) => {
        setnAUBC(parseInt(nAUB) + parseInt(nC) - parseInt(nAintBintC));
    };
    const handlenAintB = (event) => {
        setnAintB(event.target.value);
    };
    const handlenAintC = (event) => {
        setnAintC(event.target.value);
        // alert(event.target.value);
    };
    const handlenBintC = (event) => {
        setnBintC(event.target.value);
        // alert(event.target.value);
    };
    const handlenAintBintC = (event) => {
        setnAintBintC(event.target.value);
        // alert(event.target.value);
    };
    const AunionB= parseInt(nA)+parseInt(nB)-parseInt(nAintB);
    const AunionBunionC= parseInt(nA) + parseInt(nB) + parseInt(nC) - parseInt(nAintB) - parseInt(nBintC) - parseInt(nAintC) + parseInt(nAintBintC);
    if(parseInt(nA)+parseInt(nB)-parseInt(nAintB)<0){
        alert("Invalid Input");
    }
    if(parseInt(nA) + parseInt(nB) + parseInt(nC) - parseInt(nAintB) - parseInt(nBintC) - parseInt(nAintC) + parseInt(nAintBintC)<0){
        alert("Invalid Input");
    }
  return (
    <>
    <LeftNav2 />
    <div style={{ position: "absolute", top: 130, left: 150 }}><h1>Simulation</h1>
    <p style={{margin:20}}>Please enter the following values</p>
    <div className='row'>
        <p>n(A) = 
        <input type="text" id="nA" name="nA" className='set-input' onChange={handlenA} value={nA}/>
        </p>
        <p>n(B) = 
        <input type="text" id="nB" name="nB" className='set-input' onChange={handlenB} value={nB}/>
        </p>
        <p>n(A⋂B) = 
        <input type="text" id="nAintB" name="nAintB" className='set-input' onChange={handlenAintB} value={nAintB}/>
        </p>
        <p>n(A⋃B) =
        ?
        </p>
    </div>
    <div style={{margin:20}}>
    We know that n(A⋃B) = n(A) + n(B) – n(A⋂B), therefore n(A⋃B) = {AunionB}
    </div>
    <div className='row'>
        <p>n(A) = 
        <input type="text" id="nA" name="nA" className='set-input' onChange={handlenA} value={nA}/>
        </p>
        <p>n(B) = 
        <input type="text" id="nB" name="nB" className='set-input' onChange={handlenB} value={nB}/>
        </p>
        <p>n(C) = 
        <input type="text" id="nC" name="nC" className='set-input' onChange={handlenC} value={nC}/>
        </p>
        <p>n(A⋂B) = 
        <input type="text" id="nAintB" name="nAintB" className='set-input' onChange={handlenAintB} value={nAintB}/>
        </p>
        <p>n(A⋂C) = 
        <input type="text" id="nAintC" name="nAintC" className='set-input' onChange={handlenAintC} value={nAintC}/>
        </p>
        <p>n(B⋂C) =
        <input type="text" id="nBintC" name="nBintC" className='set-input' onChange={handlenBintC} value={nBintC} style={{margin:20}}/>
        </p>
        <p>n(A⋂B⋂C) =
        <input type="text" id="nAintBintC" name="nAintBintC" className='set-input' onChange={handlenAintBintC} value={nAintBintC} style={{margin:5}}/>
        </p>
        <p>n(A⋃B⋃C) =
        ?
        </p>
    </div>
    <div style={{margin:20}}>
    We know that n(A⋃B⋃C) = n(A) + n(B) + n(C) – n(A⋂B) – n(A⋂C) – n(B⋂C) + n(A⋂B⋂C), therefore n(A⋃B⋃C) = {AunionBunionC}
    </div>
    </div>
    </>
  )
}

export default Simulation2