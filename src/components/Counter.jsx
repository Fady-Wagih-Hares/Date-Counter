import { useState } from "react";
import DateDisplay from "./DateDisplay";

const Counter = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  // console.log(count);
  const handleInc = () => {
    setStep((step) => step + 1);
    // console.log(step);
  };
  const handleDec = () => {
    setStep((step) => step - 1);
    // console.log(step);
  };
  const handleCountInc = () => {
    setCount((count) => count + step);
  };
  const handleCountDec = () => {
    setCount((count) => count - step);
  };
  return (
    <div className="main">
      <button onClick={() => handleDec()}>-</button>
      <span>Steps:{`${step}`} </span>
      <button onClick={() => handleInc()}>+</button>
      <div className="count">
        <button onClick={() => handleCountDec()}>-</button>
        <span>Count:{`${count}`} </span>
        <button onClick={() => handleCountInc()}>+</button>
      </div>

      <div>
        <DateDisplay count={count} />
      </div>
    </div>
  );
};
export default Counter;
