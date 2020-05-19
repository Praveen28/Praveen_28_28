import React, { Component } from "react";

import { withRouter, Switch, Route } from "react-router-dom";

import Container from "./components/Main_Container/MainContainer";
import Contact from "./navigationComponents/ContactPage/contactContainer";
import Product from "./navigationComponents/ProductsPage/productContainer.js";
import AboutUs from "./navigationComponents/AboutUsPage/aboutUsContainer";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Container} exact />
          <Route path="/products" component={Product} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={AboutUs} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
