import React, { useState } from "react"

function Test() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(false)

  return (
    <div>
      <h1>Demo Count Click</h1>
      <p>Count: {count}</p>

      <button
        name="test"
        className="btn btn-success"
        onClick={() => setCount(count + 1)}
      >
        Click
      </button>
    </div>
  )
}

export default Test
