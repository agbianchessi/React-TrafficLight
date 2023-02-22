# React-TrafficSignal
Traffic Signal component for React.

![Screenshot 2023-02-21 at 16 52 58](https://user-images.githubusercontent.com/5993480/220395935-1e6e393e-bcf4-4522-a8eb-9d50d1e1403c.png)

---

### Install

```
npm install react-trafficsignal
```

### Demo
Working demo on [CodeSandbox](https://codesandbox.io/s/react-trafficsignal-1n1rx2).


### API

**Props**
- `status` - A three characters string (```/^[rRB][aAB][gGB]$/```):
  -  ```B```: black/OFF  
  -  ```R```: red light ON
  -  ```r```: red light flashing
  -  ```A```: amber light ON 
  -  ```a```: amber light flashing
  -  ```G```: green light ON 
  -  ```g```: green light flashing 
- `signalID` - _Optional_ A unique signal ID (Number)

### Example
```js
import './App.css';
import React from 'react'
import TrafficSignal from 'react-trafficsignal'

function App() {
  return (
    <div className="App">

      <div style={{ width: "33px" }}>
        <TrafficSignal status="RaG"></TrafficSignal>
      </div>

    </div>
  );
}

export default App;
```
