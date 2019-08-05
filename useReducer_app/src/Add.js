import React, { useState } from "react";
import { ADD } from "./actions";
import { useDispatch } from "./context";

export default () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: ADD, payload: newTodo });
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setNewTodo(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={newTodo}
        type="text"
        placeholder="할일 추가"
        onChange={onChange}
      />
    </form>
  );
};
