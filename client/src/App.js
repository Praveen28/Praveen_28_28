import React, { Component } from "react";

import AppBar from "./components/AppBar/AppBar.js";
import Container from "./components/Main_Container/MainContainer";
class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Container />
      </div>
    );
  }
}

export default App;
