import { useReducer } from "react";
const HooksUseReducer = () => {
  let initialState = 0;

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "Increment":
        return state + action.payload;
      case "Decrement":
        return state - action.payload;
      case "Reset":
        return action.payload;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  const [user, userDispatch] = useReducer();
  return (
    <>
      <h2>Use Reducer {count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "Increment", payload: 1 });
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "Increment", payload: 5 });
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decrement", payload: 2 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Reset", payload: 0 });
        }}
      >
        Reset
      </button>
    </>
  );
};

export default HooksUseReducer;
