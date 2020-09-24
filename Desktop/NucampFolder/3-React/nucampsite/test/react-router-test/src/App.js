import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Home from '../components/pages/home';
import About from '../components/pages/About'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div></div>
    </div>
    <route exact path="/" component={Home}></route>
    <route exact path="/about" component={About}></route>
    </BrowserRouter>
  );
}

export default App;
