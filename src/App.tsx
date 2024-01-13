import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const getFromAsm = () => {
    WebAssembly.instantiateStreaming(fetch("wasm/hello.wasm")).then(
      (obj) => {
        console.log('----------001')
        const ret1 = (obj.instance.exports._Z3addii as CallableFunction)(11, 22);
        console.log('retretret=', ret1);
        setCount(ret1)
        const ret2 = (obj.instance.exports._Z3subii as CallableFunction)(11, 22);
        console.log('retretret=', ret2);
        console.log('----------002')
        return ret1
      }
    );
  }
  
  return (
    <div className="App">
      hello world!!
      <button onClick={() => getFromAsm()}> Click {count} times</button>
  </div>
  );
}

export default App;
