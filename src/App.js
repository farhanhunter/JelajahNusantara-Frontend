import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import home from "./components/pages/home";
import services from "./components/pages/services";
import products from "./components/pages/products";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={home} />
          <Route path="/services" Component={services} />
          <Route path="/products" Component={products} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
