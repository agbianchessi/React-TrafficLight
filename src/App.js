import './App.css';
import React from 'react'
import TrafficSignal from './lib'

function App() {
  return (
    <div className="App">

      <div style={{ width: "33px" }}>
        <TrafficSignal colors="RaG"></TrafficSignal>
      </div>


    </div>
  );
}

export default App;