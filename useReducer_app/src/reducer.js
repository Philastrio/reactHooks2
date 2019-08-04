import uuid from "uuid/v4";

export const initialState = {
  toDos: [],
  completed: []
};

export const ADD = "add";
export const DEL = "del";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { id: uuid(), text: action.payload }]
      };
    case DEL:
      return {
        ...state,
        toDos: state.toDos.filter(toDo => {
          console.log("Current: ", toDo.id, "Target: ", action.payload);
          return toDo.id !== action.payload;
        })
      };
    // ...state.toDos: toDos가 가지고 있던 내용물을 의미한다
    // return {toDos: [{text: action.payload}]} : 단 하나의 toDo만을 가진 array를 얻게 된다는 의미이다
    // push를 쓰면 안되나? push는 배열을 변화시키니 버그가 난다. 우린 array를 변화시키지 않는다. 새로운 것으로
    // '대체'할 뿐이다. 이전의 toDos르 가지고, 여기에 새로운 toDo를 더한다. 이를 anti mutation이라 한다
    // 여기서는 변화를 허용하지 않는다. 대체할 뿐이다
    default:
      return;
  }
};

export default reducer;
