import React, { Component } from "react";
const logo = require("./logo.svg") as string;
import "./App.css";

import { eel } from "./eel.js";

class App extends Component {
  constructor(props: never) {
    super(props);
    eel.set_host("ws://localhost:8888");
    eel.hello();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React! Hi.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
