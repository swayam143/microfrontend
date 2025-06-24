import React from "react";
import Button from "./Button";
const useCounter = React.lazy(() => import("host_app/useCounter"));

const App = ({ title, setCount, count }) => {
  // const { count1, increment1, decrement1 } = useCounter();

  const handleClick = (operator) => {
    if (operator === "+") {
      setCount(count + 1); // Increment count
    } else if (operator === "-") {
      if (count === 0) return;
      setCount(count - 1); // Decrement count
    }
  };
  return (
    <div>
      {title} {count}
      <br />
      <button onClick={() => handleClick("+")}>increment</button>
      <button onClick={() => handleClick("-")}>decrement</button>
      <Button />
    </div>
  );
};

export default App;
