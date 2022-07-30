import { useState, useReducer } from "react";
import "./styles.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
};

const initialState = {
  userInput: "",
  count: 0,
  color: false
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
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
        <button onClick={() => dispatch({ type: "increment" })}>Count</button>
      </div>
      <div>{state.count}</div>
      <div>
        Color: <button onClick={() => setColor(!color)}>Color</button>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "8px",
          background: color ? "red" : "yellow"
        }}
      ></div>
    </div>
  );
}
