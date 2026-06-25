import { useState } from "react";
import DateDisplay from "./DateDisplay";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [inputState, setInputState] = useState(1);
  // console.log(count);
  // const handleInc = () => {
  //   setStep((step) => step + 1);
  // console.log(step);
  // };
  // const handleDec = () => {
  //   setStep((step) => step - 1);
  // console.log(step);
  // };
  const handleCountInc = () => {
    setCount((count) => count + step);
  };
  const handleCountDec = () => {
    setCount((count) => count - step);
  };
  const handleRest = () => {
    setCount(1);
    setStep(0);
  };
  return (
    <div className="main">
      <span>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />
        {step}
      </span>

      {/* <button onClick={() => handleDec()}>-</button>
      <span>Steps:{`${step}`} </span> */}
      {/* <button onClick={() => handleInc()}>+</button> */}
      <div className="count">
        <button onClick={() => handleCountDec()}>-</button>
        {/* <span>Count:{`${count}`} </span> */}

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />

        <button onClick={() => handleCountInc()}>+</button>
      </div>

      <div>
        <DateDisplay count={count} />
      </div>

      {count !== 1 || step !== 0 ? (
        <div>
          <button onClick={handleRest}>Rest</button>
        </div>
      ) : null}
    </div>
  );
};
export default Counter;
