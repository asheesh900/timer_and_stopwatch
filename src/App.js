import React from 'react';
import './App.css';
import StopWatch from './Components/StopWatch';
import Timer from './Components/Timer'

function App() {
  return (
    <div className="m-auto">
      <StopWatch />
      <br />
      <br />
      <br />
      <hr></hr>
      <Timer />
    </div>
  );
}

export default App;
