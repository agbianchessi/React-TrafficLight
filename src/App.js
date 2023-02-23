import React from 'react'
import TrafficSignal from './lib'

function App() {
  return (
    <div className="App">

      <div style={{ width: "35px" }}>
        <TrafficSignal status="RaG"></TrafficSignal>
      </div>
      <div>
        <TrafficSignal status="BBg" options={{ horizontal: true, clockwise: false, width: '75px' }} />
      </div>
      <div>
        <TrafficSignal status="rAB" options={{ horizontal: true, clockwise: true, width: '75px' }} />
      </div>
      <div>
        <TrafficSignal status="BBG" options={{ width: '35px', margin: '1em' }} />
        <TrafficSignal status="BAB" options={{ width: '70px', margin: '1em' }} />
        <TrafficSignal status="RBB" options={{ width: '105px', margin: '1em' }} />
      </div>
      <div>
        <TrafficSignal status="BBG" options={{ horizontal: true, width: '35px', margin: '1em' }} />
        <TrafficSignal status="BAB" options={{ horizontal: true, width: '70px', margin: '1em' }} />
        <TrafficSignal status="RBB" options={{ horizontal: true, clockwise: true, width: '105px', margin: '1em' }} />
      </div>
      <div>
        <TrafficSignal status="BBg" options={{ width: '35px', margin: '1em', hideRed: true, hideAmber: true }} />
        <TrafficSignal status="RAG" options={{ width: '35px', margin: '1em', hideAmber: true }} />
        <TrafficSignal status="BaB" options={{ width: '35px', margin: '1em', hideRed: true }} />
        <TrafficSignal status="BaG" options={{ width: '35px', margin: '1em', hideRed: true, hideGreen: true }} />
      </div>
    </div>
  );
}

export default App;