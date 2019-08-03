import React, { useContext } from "react";
import Header from "./Header";
import { MyContext } from "./context";

/* 가장큰 App component에서 온 것을 받는다 */
const Screen = () => {
  const { logUserIn } = useContext(MyContext);
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <button onClick={logUserIn}>로그인버튼</button>
    </div>
  );
};
/* Screen에서 온 user를 받고 다시 Header에게 넘겨준다 */
export default Screen;
