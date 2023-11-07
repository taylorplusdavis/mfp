import React from "react";
import { mount } from "marketing/MarketingApp";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const App = () => {
  console.log(mount);
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
