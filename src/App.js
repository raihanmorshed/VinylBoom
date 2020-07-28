import React, { Component } from "react";
import Records from "./Components/Records";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // state = {};
  render() {
    return (
      <main className="container">
        <Records />
      </main>
    );
  }
}

export default App;
