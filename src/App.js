import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import "./App.css";
import Handle from "./components/Handle.js";
import Social from "./components/Social.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Handle />
        <Social />
      </div>
    );
  }
}

export default hot(App);
