import React, { useState } from 'react';
import LeftNav5 from './LeftNav5';

const RecurrenceRelation = () => {
  const [n, setN] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange = (event) => {
    setN(parseInt(event.target.value));
  };

  const solveRecurrenceRelation = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return 2 * solveRecurrenceRelation(n - 1) + 3;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(solveRecurrenceRelation(n));
  };

  return (
    <>
    <LeftNav5 />
    <div style={{ position: "absolute", top: 130, left: 150 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Enter n:
          <input type="number" value={n} onChange={handleInputChange} />
        </label>
        <button type="submit">Solve</button>
      </form>
      {result !== 0 && <p>The result is {result}.</p>}
    </div>
    </>
  );
};

export default RecurrenceRelation;
