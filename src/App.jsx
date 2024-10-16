import React from "react";
import MenuBar from "./components/superAdmin/dashboard/MenuBar";
import Header from "./components/superAdmin/dashboard/Header";

function App() {
  return (
    <div className="flex flex-row">
      <MenuBar />
      <Header />
    </div>
  );
}

export default App;
