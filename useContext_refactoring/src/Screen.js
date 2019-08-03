import React from "react";
import Header from "./Header";
import Button from "./component/Button";

/* 가장큰 App component에서 온 것을 받는다 */
const Screen = () => {
  return (
    <div>
      <Header />
      <h1>First screen</h1>
      <Button />
    </div>
  );
};
/* Screen에서 온 user를 받고 다시 Header에게 넘겨준다 */
export default Screen;
