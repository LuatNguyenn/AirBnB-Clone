import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className='app'>   
      <Router>
        <Header />



        <Home />



        <Footer />




      </Router>
    </div>
  );
}

export default App;
