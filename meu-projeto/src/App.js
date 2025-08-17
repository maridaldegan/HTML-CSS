import { useState } from 'react';
import './App.css';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setContador(contador+1)}>+</button>
        <p>{contador}</p>
        <button onClick={() => setContador(contador-1)}>-</button>
      </header>

    </div>
  );
}
