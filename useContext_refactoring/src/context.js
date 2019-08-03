import React, { useState, useContext } from "react";

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "한강",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  const logUserOut = () => setUser({ ...user, loggedIn: false });
  /* ...은 모든 object를 의미한다 */
  return (
    <MyContext.Provider value={{ user, fn: { logUserIn, logUserOut } }}>
      {children}
    </MyContext.Provider>
  );
  /* 나중에 우리가 logUserOut과 같은 function을 가질 수도 있기에 fn이라고 명시해놓음 */
};

export const useUser = () => {
  const { user } = useContext(MyContext);
  return user;
};

export const useFns = () => {
  const { fn } = useContext(MyContext);
  return fn;
};

export default MyContextProvider;
