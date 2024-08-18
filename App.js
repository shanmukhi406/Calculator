import './App.css';
import { useState } from "react";
import Keypad from "./Keypad";

function App() {
  let [input, setInput] = useState("");

  let [principal, setPrincipal] = useState("");
  let [Rate, setRate] = useState("");
  let [time, setTime] = useState("");
  let [interest, setInterest] = useState(null);

  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    let outputVal = eval(input);
    setInput(outputVal);
  }
  function handleClear() {
    setInput("");
  }
  function  calculateInterest(value){
    let calculateInterest=(principal*Rate*time)/100;
    setInterest(calculateInterest);
  }

  return (
    <div className="container">
      <h1>Calculator App using react</h1>
      <div>
        <input type="text" value={input} 
            className="output" readOnly />
        <Keypad
          handleClick={handleClick} 
          handleClear={handleClear}
          calculate={calculate}
        />
      </div>
      <h2>Interest Calculator</h2>
      <div>
        <label>principal:</label>
        <input
        type='number' value={principal} onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter Principal"/>
      </div>
      <div>
        <label>Rate (%):</label>
        <input
        type='number' value={Rate} onChange={(e) => setRate(e.target.value)}
        placeholder="Enter Rate"/>
      </div>
      <div>
        <label>Time(years):</label>
        <input
        type='number' value={time} onChange={(e) => setTime(e.target.value)}
        placeholder="Enter Time"/>
      </div>
      <button onClick={calculateInterest} style={{width:'260px',padding:'10px',marginTop:'20px'}}>
        calculateInterest
      </button>
      <div>
        <h3>calculateInterest: {interest}</h3>
      </div>
    </div>
  );
}

export default App;