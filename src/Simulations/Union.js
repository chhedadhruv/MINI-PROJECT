import React, { useState } from 'react';
import '../styles/Sets.css';

const SetUnion = () => {
  const [setA, setSetA] = useState('');
  const [setB, setSetB] = useState('');
  const [result, setResult] = useState('');

  const handleSetAChange = (e) => {
    setSetA(e.target.value);
  };

  const handleSetBChange = (e) => {
    setSetB(e.target.value);
  };

  const handleUnion = () => {
    const setAArray = setA.split(',').map(item => item.trim()); // convert string input to array
    const setBArray = setB.split(',').map(item => item.trim());
    const unionSet = [...new Set([...setAArray, ...setBArray])]; // use Set and spread operator to get the unique values from both sets
    setResult(unionSet.join(', ')); // convert array back to string and set as result
  };

  return (
    <div className='row'>
      {/* <h1>Set Union</h1> */}
      <div className='set-a'>
      <label>
        {/* Set A: */}
        <input type="text" value={setA} onChange={handleSetAChange} />
      </label>
      </div>
      <br />
      <h1>∪</h1>
      <div className='set-b'>
      <label>
        {/* Set B: */}
        <input type="text" value={setB} onChange={handleSetBChange} />
      </label>
        </div>
      <br />
      <button onClick={handleUnion} className='btn'><h1>=</h1></button>
      <br />
      {/* <div className='set-c'>{result}</div> */}
        <div className='set-c'>
        <label>
            <input type="text" value={result} />
        </label>
        </div>
    </div>
  );
};

export default SetUnion;
