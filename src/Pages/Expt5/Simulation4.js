import React, { useState } from 'react';
import LeftNav4 from './LeftNav4'

function Simulation4() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (n <= 0 || m <= 0) {
      setResult('Please enter a valid number for both n and m');
      return;
    }
    if (n > m) {
      const minItemsPerContainer = Math.floor(n / m);
      const remainingItems = n % m;
      setResult(`At least ${minItemsPerContainer} containers must have ${minItemsPerContainer + 1} items, and ${remainingItems} containers must have ${minItemsPerContainer + 1} items or more.`);
    } else {
      setResult('There are more containers than items, so at least one container must be empty');
    }
  }
  return (
    <>
    <LeftNav4 />
    <div style={{position: "absolute", top: 130, left: 150}}>
      <h1>Simulation</h1>
      <form onSubmit={handleSubmit}>
        <label style={{marginTop: '0.5rem'}}>
          Number of Items (n):
          <input type="number" value={n} onChange={(e) => setN(e.target.value)} style={{marginTop: '0.5rem'}}/>
        </label>
        <br />
        <label style={{marginTop: '5rem'}}>
          Number of Containers (m):
          <input type="number" value={m} onChange={(e) => setM(e.target.value)} style={{marginTop: '0.5rem'}}/>
        </label>
        <br />
        <button type="submit" style={{width:100, height:30}}>Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
    </>
  )
}

export default Simulation4