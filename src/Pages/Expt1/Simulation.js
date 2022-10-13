import React, {useState} from 'react'
import Sets from './Sets'
import '../../styles/Sets.css'


function Simulation() {
  const [setA1Value, setSetA1Value] = useState('');
  const [setA2Value, setSetA2Value] = useState('');
  const [setA3Value, setSetA3Value] = useState('');
  const [setA4Value, setSetA4Value] = useState('');
  const [setA5Value, setSetA5Value] = useState('');
  const [setB1Value, setSetB1Value] = useState('');
  const [setB2Value, setSetB2Value] = useState('');
  const [setB3Value, setSetB3Value] = useState('');
  const [setB4Value, setSetB4Value] = useState('');
  const [setB5Value, setSetB5Value] = useState('');
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
  const handleUnion = () => {
    if(setA1Value === setB1Value) {
      alert(setA1Value);
    }
  }
  return (
    <>
    <Sets />
    <div style={{position: 'absolute', top: 130, left:150}}>
      <h1>Simulation</h1>
      <div className='row'>
      <div className='set-a'>
        <input type="text" id='set-a1' className='set-input' onChange={handleSetA1Value} value={setA1Value}></input>
        <input type="text" id='set-a2' className='set-input' onChange={handleSetA2Value} value={setA2Value}></input>
        <input type="text" id='set-a3' className='set-input' onChange={handleSetA3Value} value={setA3Value}></input>
        <input type="text" id='set-a4' className='set-input' onChange={handleSetA4Value} value={setA4Value}></input>
        <input type="text" id='set-a5' className='set-input' onChange={handleSetA5Value} value={setA5Value}></input>
      </div>
      <h1>⨆</h1>
      <div className='set-b'>
        <input type="text" id='set-b1' className='set-input' onChange={handleSetB1Value} value={setB1Value}></input>
        <input type="text" id='set-b2' className='set-input' onChange={handleSetB2Value} value={setB2Value}></input>
        <input type="text" id='set-b3' className='set-input' onChange={handleSetB3Value} value={setB3Value}></input>
        <input type="text" id='set-b4' className='set-input' onChange={handleSetB4Value} value={setB4Value}></input>
        <input type="text" id='set-b5' className='set-input' onChange={handleSetB5Value} value={setB5Value}></input>
      </div>
      <button className='btn' onClick={handleUnion}><h1>=</h1></button>
      </div>
    </div>
    </>
  )
}

export default Simulation