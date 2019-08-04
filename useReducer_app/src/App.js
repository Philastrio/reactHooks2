import React, { useReducer, useState } from "react";
import reducer, { initialState, ADD, DEL } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    // 새로고침 하지말라는 것으로, 쉽게 말해 아무것도 안하겠다는 의미이다.
    dispatch({ type: ADD, payload: newTodo });
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewTodo(value);
  };

  return (
    <>
      <h1>오늘의 할일 목록</h1>
      <form onSubmit={onSubmit}>
        <input
          value={newTodo}
          type="text"
          placeholder="할일 추가"
          onChange={onChange}
        />
      </form>
      <ul>
        <h2>할일 목록</h2>
        {state.toDos.map((toDo, index) => (
          <li key={toDo.id}>
            <span>{toDo.text}</span>
            <button onClick={() => dispatch({ type: DEL, payload: toDo.id })}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
