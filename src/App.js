import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [desactive, setDesactive] = useState(false);

  useEffect(() => {
    if (counter === 5) {
      alert('no se puede contar mas')
    setDesactive(true);
    }
  }, [counter]);

  const plus = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <button disabled={desactive} onClick={plus}>+1</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;