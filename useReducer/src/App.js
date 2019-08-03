import React, { useReducer } from "react";

const INCREMENT = "increment";
const DECREMENT = "";
// 자동완성 기능을 통해 정확하게 하게 하기 위해서 변수선언해준다

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
/* 2개의 인자를 받는데 하나는 현재의 state, 두번째는 action(이름은 아무것이나 해도 된다)이다
   action은 type(이 이름도 아무거나 해도 된다)이라는 것을 가져온다. 
   action.type이 increment라면... return(~~)하는 것이다

*/
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  /* 우리가 return할 object는 state를 대체하게 될 object이다. 이건 state를 변경, override 하는게 아니라 완전히 대체한다
     완전히 대체하다는 것이 redux, useReducer의 기본원리이다

     내가 이 state를 보게 되면 이 state는 count를 가지게 될 것이다
     두번재 argument는 초기 state이다. 즉 reduder에 첫 action을 보낼때 여기 있는 count부터 시작한다는 것이다
     
     const reducer = (state = {count: 0}, action) 하고 같다. 하지만 이는 Redux에 쓰이는 보편화된 관습으로 
     이는 권장하지 않는다

     dispatch: 현재 state와 action을 가지고 reducer function을 다시 실행하는 일을 한다. 
     그리고 여기 action이 들어왔을때 검사하는 로직이 있다. 일치하는 case가 있으면 해당 state를 return 한다
     그리고 return된 state는 현재 state를 '대체'한다
   */
  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Add</button>
      <button />
    </>
  );
}

export default App;
