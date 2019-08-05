import React from "react";
import { COMPLETE, UNCOMPLETE, DEL } from "./actions";
import { useDispatch } from "./context";

export default ({ text, id, isCompleted }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span>{text}</span>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : DEL, payload: id })
        }
      >
        삭제
      </button>
      <button
        onClick={() =>
          dispatch({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? "완료확인" : "확인"}
      </button>
    </li>
  );
};
