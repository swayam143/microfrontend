import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

const CustomHook = () => {
  const [HookComponent, setHookComponent] = useState(null);

  useEffect(() => {
    import("host_app/useCounter").then((mod) => {
      const useCounter = mod.default;

      // Inline component that uses the federated hook
      const Inner = () => {
        const { count1, increment1, decrement1 } = useCounter();

        return (
          <div style={{ marginTop: 20 }}>
            <h2>Custom Hook: {count1}</h2>

            <button onClick={increment1}>+</button>
            <button onClick={decrement1}>-</button>
          </div>
        );
      };

      setHookComponent(() => Inner);
    });
  }, []);

  // console.log(count1);

  if (!HookComponent) return <CircularProgress />;
  return <HookComponent />;
};

export default CustomHook;
