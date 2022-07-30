import { useReducer } from "react";
import "./styles.css";

interface IState {
  userInput: string;
  count: number;
  color: boolean;
}

interface IAction {
  type: string;
  payload: string | number | boolean;
}

const initialState: IState = {
  userInput: "",
  count: 0,
  color: false
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "input":
      return { ...state, userInput: action.payload };
    case "increment":
      return { ...state, count: state.count + 1 };
    case "color":
      return { ...state, color: !state.color };
    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <div>
        Input:{" "}
        <input
          onChange={(e) => dispatch({ type: "input", payload: e.target.value })}
          type="text"
        />
      </div>
      <div>{state.userInput}</div>
      <div>
        Count:{" "}
        <button onClick={() => dispatch({ type: "increment" })}>Count</button>
      </div>
      <div>{state.count}</div>
      <div>
        Color:{" "}
        <button onClick={() => dispatch({ type: "color" })}>Color</button>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "8px",
          background: state.color ? "red" : "yellow"
        }}
      ></div>
    </div>
  );
}
