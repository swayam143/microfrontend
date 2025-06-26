import React from "react";
import Button from "./Button";
const useCounter = React.lazy(() => import("host_app/useCounter"));
import { useSelector, useDispatch } from "react-redux";

const App = ({ title, setCount, count }) => {
  // const { count1, increment1, decrement1 } = useCounter();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(user);

  const handleClick = (operator) => {
    if (operator === "+") {
      setCount(count + 1); // Increment count
    } else if (operator === "-") {
      if (count === 0) return;
      setCount(count - 1); // Decrement count
    }
  };

  function generateRandomNumberString() {
    return Math.floor(Math.random() * 10).toString();
  }

  console.log(useCounter);
  return (
    <div>
      Redux State == {user?.user}
      <br />
      CHange redux state
      <button
        onClick={() =>
          dispatch({
            type: "ShubhamUser/addUserName",
            payload: generateRandomNumberString(),
          })
        }
      >
        change
      </button>
      <br />
      {title} {count}
      <br />
      <button onClick={() => handleClick("+")}>increment</button>
      <button onClick={() => handleClick("-")}>decrement</button>
      <Button />
    </div>
  );
};

export default App;
