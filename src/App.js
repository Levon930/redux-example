import React from "react";
import Header from "./components/header";
import { BrowserRouter as Router } from "react-router-dom";
import CategoriesComponent from "./components/categories";
import Routs from "./components/routs";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <CategoriesComponent />
        <Routs />
      </Router>
    </div>
  );
}

export default App;
