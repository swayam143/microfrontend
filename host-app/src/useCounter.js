// useCounter.js (Custom Hook)
import { useState } from "react";

const useCounter = () => {
  const [count1, setCount1] = useState(0);

  const increment1 = () => setCount1(count1 + 10);
  const decrement1 = () => (count1 - 10 < 0 ? "" : setCount1(count1 - 10));

  return {
    count1,
    increment1,
    decrement1,
  };
};

export default useCounter;
