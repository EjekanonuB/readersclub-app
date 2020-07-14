import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

// My Components...

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Readersclub from "./components/Readersclub";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/readersclub" component={Readersclub} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
