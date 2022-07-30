import { useState } from "react";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(false);
  return (
    <div className="App">
      <div>
        Input:{" "}
        <input onChange={(e) => setUserInput(e.target.value)} type="text" />
      </div>
      <div>{userInput}</div>
      <div>
        Count:{" "}
        <button onClick={() => setCount((count) => count + 1)}>Count</button>
      </div>
      <div>{count}</div>
      <div>
        Color: <button onClick={() => setColor(!color)}>Color</button>
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: color ? "red" : "yellow"
        }}
      ></div>
    </div>
  );
}
