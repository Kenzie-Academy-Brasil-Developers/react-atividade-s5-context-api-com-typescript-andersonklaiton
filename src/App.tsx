import React from "react";
import "./App.css";
import Cart from "./Components/CartList";
import ProductsList from "./Components/ProductsList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductsList />
        <Cart/>
      </header>
    </div>
  );
}

export default App;
