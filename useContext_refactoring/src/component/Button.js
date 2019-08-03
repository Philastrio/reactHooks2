import React from "react";
import { useFns, useUser } from "../context";

const Button = () => {
  const { loggedIn } = useUser();
  const { logUserIn, logUserOut } = useFns();

  const logInButton = () => {
    return <button onClick={logUserIn}>로그인버튼</button>;
  };
  const logOutButton = () => {
    return <button onClick={logUserOut}>로그아웃버튼</button>;
  };
  console.log(loggedIn);

  if (loggedIn === false) {
    return logInButton();
  } else {
    return logOutButton();
  }
};

export default Button;
