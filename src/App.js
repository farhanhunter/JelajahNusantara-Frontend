import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import home from "./components/pages/home";
import services from "./components/pages/services";
import products from "./components/pages/products";
import signUp from "./components/pages/signup";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact Component={home} />
          <Route path="/services" Component={services} />
          <Route path="/products" Component={products} />
          <Route path="/sign-up" Component={signUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
