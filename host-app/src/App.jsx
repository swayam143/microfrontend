import React, { lazy, Suspense } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
const RemoteApp = lazy(() => import("remote_app/App"));

function App() {
  const [count, setCount] = useState(0);
  return (
    <Provider store={store}>
      <div>
        <h1>Host App</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteApp title={"hello"} setCount={setCount} count={count} />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
