import React, { useState } from "react";

export const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "한강",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  /* ...은 모든 object를 의미한다 */
  return (
    <MyContext.Provider value={{ user, logUserIn }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
