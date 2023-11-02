import React from "react";
import { mount } from "marketing/MarketingApp";
import MarketingApp from "./components/MarketingApp";

const App = () => {
  console.log(mount);
  return (
    <div>
      <MarketingApp />
    </div>
  );
};

export default App;
