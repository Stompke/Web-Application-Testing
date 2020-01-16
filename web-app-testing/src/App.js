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
      if (count.strike === 2) {
        setCount({
          strike: 0,
          ball: 0
        })
      } else {
        setCount({
          ...count,
          [typeOfHit]: count.strike + 1
        })
      }

    } else if(typeOfHit === 'ball') {
      if(count.ball === 3) {
        setCount({
          strike: 0,
          ball: 0
        })
      } else {
        setCount({
          ...count,
          [typeOfHit]: count.ball + 1
        })
      }
    } else if(typeOfHit === 'hit') {
      setCount({
        strike: 0,
        ball: 0
      })
    } else if(typeOfHit === 'foul'){
      if(count.strike === 2) {
        console.log('still good bro!')
      } else {
        setCount({
          ...count,
          strike: count.strike + 1,
        })
      }
    }
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Display  count={count} />
        <Dashboard swing={swing} />
        
        
      </header>
    </div>
  );
}

export default App;
