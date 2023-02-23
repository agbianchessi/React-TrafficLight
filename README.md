# React-TrafficSignal
Traffic Signal component for React.

![Screenshot 2023-02-22 at 17 49 46](https://user-images.githubusercontent.com/5993480/220698672-fe251739-e071-4e7a-8b39-2835a90789ac.png)

![Screenshot 2023-02-23 at 17 40 20](https://user-images.githubusercontent.com/5993480/220984644-d09e7a98-414f-474c-a5cb-3dd273afcf98.png)

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
  -  ```B```: Black/OFF  
  -  ```R```: Red light ON
  -  ```r```: Red light flashing
  -  ```A```: Amber light ON 
  -  ```a```: Amber light flashing
  -  ```G```: Green light ON 
  -  ```g```: Green light flashing
- `options` - _Optional_ :
  -  ```horizontal```: traffic signal is rotated 90° counterclockwise (default:```false``` )  
  -  ```clockwise```: if ```horizontal``` is ```true``` then traffic signal is rotated clockwise (default:```false``` ) 
  -  ```width```: sets the [```width``` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/width) of the traffic signal element (default: ```100%```).
  -  ```margin```: sets the [```margin``` CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) of the traffic signal element (default: ```0```).
  -  ```hideRed```: hides the red light (default:```false``` ) 
  -  ```hideAmber```: hides the amber light (default:```false``` ) 
  -  ```hideGreen```: hides the green light (default:```false``` ) 
- `signalID` - _Optional_ A unique signal ID (Number)

### Example
```js
import './App.css';
import React from 'react'
import TrafficSignal from 'react-trafficsignal'

function App() {
  return (
    <div className="App">
      <div style={{ width: "35px" }}>
        <TrafficSignal status="RaG" />
      </div>
      <div style={{ width: "70px" }}>
        <TrafficSignal status="BBg" options={{horizontal:true, clockwise:false}} />
      </div>
      <div style={{ width: "70px" }}>
        <TrafficSignal status="rAG" options={{horizontal:true, clockwise:true}} />
      </div>
      <TrafficSignal status="RAG" options={{ width: '35px', margin: '1em', hideAmber: true }} />
    </div>
  );
}

export default App;
```
