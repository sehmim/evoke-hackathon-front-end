import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <h1 className="center">
          MOST USED PROGRAMMING LANGUAGES IN CANADA
        </h1>
        <h5 className="center">
          Only Cities That Matter (:
        </h5>
        <LandingPage></LandingPage>
      </div>
    );
  }
}

export default App;
