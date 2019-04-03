import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
