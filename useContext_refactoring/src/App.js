import React from "react";
import Screen from "./Screen";
import MyContextProvider from "./context";

function App() {
  return (
    <MyContextProvider>
      <Screen />
    </MyContextProvider>
  ); /* Screen이 children이 되는 것이다 */
}

export default App;
