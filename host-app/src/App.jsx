import React, { lazy, Suspense } from "react";
import { useState } from "react";

const RemoteApp = lazy(() => import("remote_app/App"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Host App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <RemoteApp title={"hello"} setCount={setCount} count={count} />
      </Suspense>
    </div>
  );
}

export default App;
