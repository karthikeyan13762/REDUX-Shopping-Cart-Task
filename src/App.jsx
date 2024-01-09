import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Prroductcard from "./components/Productcard";
import Cartpage from "./components/cartPage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Prroductcard />} />
          <Route exact path="/cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
