import React from "react";
import Add from "./Add";
import { useMyState } from "./context";
import List from "./List";
import ToDo from "./ToDo";

const App = () => {
  const { toDos, completed } = useMyState();

  return (
    <>
      <Add />
      <List name={"오늘 할일"}>
        <h2>할일 목록</h2>
        {toDos.map(toDo => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "완료목록" : ""}>
        {completed.map(toDo => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
};

export default App;
