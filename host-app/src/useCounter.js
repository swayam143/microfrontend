// useCounter.js (Custom Hook)
import { useState } from "react";

const useCounter = () => {
  const [count1, setCount1] = useState(0);

  const increment1 = () => setCount1(count1 + 1);
  const decrement1 = () => setCount1(count1 - 1);

  return {
    count1,
    increment1,
    decrement1,
  };
};

export default useCounter;
