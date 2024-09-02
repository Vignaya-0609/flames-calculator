import React, { useState } from 'react';

function FlamesCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFlames = (n1, n2) => {
    const flames = ['Friends', 'Lovers', 'Affectionate', 'Marriage', 'Enemies', 'Siblings'];
    
    // Remove spaces and convert names to uppercase
    n1 = n1.replace(/\s+/g, '').toUpperCase();
    n2 = n2.replace(/\s+/g, '').toUpperCase();
    
    let arr1 = n1.split('');
    let arr2 = n2.split('');
  

    for (let i = 0; i < arr1.length; i++) {
      const char = arr1[i];
      const indexInArr2 = arr2.indexOf(char);
      
      if (indexInArr2 !== -1) {
        arr2.splice(indexInArr2, 1);
        arr1.splice(i, 1);
        i--;
      }
    }
  
    // Remaining characters count
    const count = arr1.length + arr2.length;
    console.log(arr1,arr2)
    let index = 0;
    while (flames.length > 1) {
      index = (index + count - 1) % flames.length;
      flames.splice(index, 1);
    }
  
    return flames[0];
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const flamesResult = calculateFlames(name1, name2);
    setResult(flamesResult);
  };

  return (
    <div className="flames-calculator">
      <h2>FLAMES Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name 1:
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Name 2:
            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default FlamesCalculator;
