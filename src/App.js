import "./App.css";

import HeaderComponent from "./components/HeaderComponent";
import NavbarComponent from "./components/NavbarComponent";
import { useState } from "react";

function App() {
  return (
    <div className="App container" fluid>
      <HeaderComponent />
      <NavbarComponent />
    </div>
  );
}

export default App;
