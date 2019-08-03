import React from "react";
import Lang from "./context";
import translations from "./translations";
import Screen from "./Screen";

const App = () => {
  return (
    <Lang defaultLang="en" translations={translations}>
      <Screen />
    </Lang>
  );
};

export default App;
