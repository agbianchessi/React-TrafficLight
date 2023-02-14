import './App.css';
import React from 'react'
import TrafficLight from './lib'

function App() {
  return (
    <div className="App">

      <div style={{ width: "33px" }}>
        <TrafficLight colors="RaG"></TrafficLight>
      </div>


    </div>
  );
}

export default App;