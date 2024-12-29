import { useState } from "react";
import "./App.css";
export default function App() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  // function handleStepIncrease() {
  //   setStep((step) => step + 1);
  // }

  // function handleStepDecrease() {
  //   if (step > 1) setStep((step) => step - 1);
  // }

  function handleCountIncrease() {
    setCount(count + step);
    setDate(new Date(date.getTime() + step * 24 * 60 * 60 * 1000));
  }

  function handleCountDecrease() {
    setCount(count - step);
    setDate(new Date(date.getTime() - step * 24 * 60 * 60 * 1000));
  }

  function handleInputChange(e) {
    const value = Number(e.target.value);
    setCount(value);
    setDate(new Date(today.getTime() + value * 24 * 60 * 60 * 1000));
  }

  function handleSlideChange(e) {
    setStep(Number(e.target.value));
  }

  return (
    <div>
      <div>
        <input
          onChange={handleSlideChange}
          className="input-number"
          type="range"
          min="0"
          max="10"
          value={step}
        />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <input onChange={handleInputChange} type="number" value={count} />
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
    </div>
  );
}
