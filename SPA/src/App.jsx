import { useState } from "react"
import "./App.css"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1 className="title">Counter</h1>

      <div className="container">
        <div className="box minus" onClick={() => setCount(count - 1)}>-</div>
        <div className="box counter">{count}</div>
        <div className="box plus" onClick={() => setCount(count + 1)}>+</div>
      </div>
    </div>
  )
}
