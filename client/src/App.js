import React, { Component } from "react";

import Message from "./components/MessageContainer/MessageContainer";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Container from "./components/Main_Container/MainContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Container path="/" component={Container} exact />
          <Message path="/message" component={Message} />
        </Router>
      </div>
    );
  }
}

export default App;
