import React, { Component } from "react";

import Message from "./components/MessageContainer/MessageContainer";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Container from "./components/Main_Container/MainContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Link path="/" component={Container} exact />
            <Link path="/message" component={Message} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
