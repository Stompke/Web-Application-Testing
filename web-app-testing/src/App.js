import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Display from './components/Display';
import Dashboard from './components/Dashboard';


function App() {

  const [count, setCount] = useState({
    strike: 0,
    ball: 0
  })


  const swing = (typeOfHit) => {
    if(typeOfHit === 'strike') {
      setCount({
        ...count,
        strike: count.strike + 1
      })
    } else if(typeOfHit === 'ball') {
      setCount({
        ...count,
        ball: count.ball + 1
      })
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Display  count={count} />
        <Dashboard swing={swing} />

        <button onClick={swing}></button>
        
        
      </header>
    </div>
  );
}

export default App;
