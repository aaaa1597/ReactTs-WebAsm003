import React, { useState } from 'react';
import './App.css';
import { helloif } from './asm-cpp/helloif';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      hello world!!
      <button onClick={() => helloif(11, 22, setCount)}> Click {count} times</button>
      <div>count= {count}</div>
  </div>
  );
}

export default App;
