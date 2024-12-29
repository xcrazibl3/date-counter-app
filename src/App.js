import { useState } from "react";
import "./App.css";
export default function App() {
  const today = new Date();
  //state for the date
  const [date, setDate] = useState(today);
  //state for the count of the days +/-
  const [count, setCount] = useState(0);
  // state for the steps we're going to add to the counter with the + and - buttons
  const [step, setStep] = useState(0);

  // function handleStepIncrease() {
  //   setStep((step) => step + 1);
  // }

  // function handleStepDecrease() {
  //   if (step > 1) setStep((step) => step - 1);
  // }

  function handleCountIncrease() {
    const newCount = count + step;
    setCount(newCount);
    setDate(new Date(today.getTime() + newCount * 24 * 60 * 60 * 1000));
  }

  function handleCountDecrease() {
    const newCount = count - step;
    setCount(newCount);
    setDate(new Date(today.getTime() + newCount * 24 * 60 * 60 * 1000));
  }

  function handleInputChange(e) {
    const value = Number(e.target.value);
    setCount((count) => value);
    setDate(new Date(today.getTime() + value * 24 * 60 * 60 * 1000));
  }

  function handleSlideChange(e) {
    setStep(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(0);
    setDate(today);
  }

  return (
    <div className="container">
      <div>
        <input
          onChange={handleSlideChange}
          type="range"
          min="0"
          max="10"
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input
          className="input-field"
          onChange={handleInputChange}
          type="number"
          value={count}
        />
        <button onClick={handleCountIncrease}>+</button>
      </div>

      {/* <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrease}>+</button>
      </div> */}

      <p>
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count} ${count > 1 ? "days" : "day"} from today is `
          : `${Math.abs(count)} ${count < -1 ? "days" : "day"} ago was `}
        {date.toLocaleDateString()}
      </p>

      {/* {count === 0 && <p>Today is {date.toLocaleDateString()}</p>}

      {count < 0 && (
        <p>
          {Math.abs(count)} {count >= -1 ? "day" : "days"} ago was{" "}
          {date.toLocaleDateString()}
        </p>
      )}

      {count > 0 && (
        <p>
          After {count} {count <= 1 ? "day" : "days"} from today it's{" "}
          {date.toLocaleDateString()}
        </p>
      )} */}

      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
