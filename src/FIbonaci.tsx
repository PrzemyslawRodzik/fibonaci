import React, { useState } from 'react';

function Fibonaci() {

  const [wynik, setWynik] = useState(0);
  const [k, setK] = useState(0);


function getKFibonacci(num: number):number {
  let fibonacci: number[] = [0, 1];
  for (let i: number = 2; i <= num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci[fibonacci.length-1];
}
const getResult = (value:any) => {
    setK(value);
    setWynik(getKFibonacci(value));
  
}
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Podaj wspolczynnik k: <input type="number" min="0" onChange={e=>{getResult(e.target.value)}} />
        </p>
        <p>Wynik: {wynik}</p>
      </header>
    </div>
  );
}

export default Fibonaci;
