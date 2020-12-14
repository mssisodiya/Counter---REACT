import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        className="btn btn-primary btn-md"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  );
}

export default Counter;
