// src/RemoteCounter.jsx
import React, { useState, useEffect } from "react";

const RemoteCounter = () => {
  const [useCounter, setUseCounter] = useState(null);

  useEffect(() => {
    // Dynamically import the hook from Host App
    const loadUseCounter = async () => {
      const { default: useCounter } = await import("host_app/useCounter"); // Dynamically import the hook
      setUseCounter(() => useCounter); // Set the hook once loaded
    };

    loadUseCounter();
  }, []);

  if (!useCounter) {
    return <div>Loading remote counter...</div>; // Show loading state while hook is being loaded
  }

  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <p>Remote Counter: {count}</p>
      <button onClick={increment}>Increment Remote Counter</button>
      <button onClick={decrement}>Decrement Remote Counter</button>
    </div>
  );
};

export default RemoteCounter;
