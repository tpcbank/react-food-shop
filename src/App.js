import React from "react";
import Navbar from "./Components/Navbar/Navbar.js";
import ShopList from './Components/ShopList'
import "./App.css"
function App() {
  return (
    <div className="container">
      <Navbar />
      <ShopList />
    </div>
  );
}

export default App;
