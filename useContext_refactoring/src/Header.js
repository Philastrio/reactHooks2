import React from "react";
import { useUser } from "./context";

const Header = () => {
  /*  
  const context = useContext(MyContext);
  console.log(context)
  이렇게 해서 먼저 개발자도구 콘솔창에서 확인 후 
  */
  const { name, loggedIn } = useUser();

  return (
    <header>
      <a href="#">Home</a> Hello {name}, you are{" "}
      {loggedIn ? "로그인 됨" : "누구???"}
    </header>
  );
};
/* 이제 더이상 props로 값을 얻을 수 없다. 왜냐하면 Screen에서 해당 prop을 제공하지 않기 때문이다 */

export default Header;
