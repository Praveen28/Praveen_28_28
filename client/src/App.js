import React, { Component } from "react";

import { withRouter, Switch, Route } from "react-router-dom";

import Container from "./components/Main_Container/MainContainer";
import Services from "./navigationComponents/ServicesPage/ServiceContainer";
import Contact from "./navigationComponents/ContactPage/contactContainer";
import Product from "./navigationComponents/ProductsPage/productContainer.js";
import AboutUs from "./navigationComponents/AboutUsPage/aboutUsContainer";
import Career from "./navigationComponents/CareerPage/careerContainer.js";
import ApplyNow from "./navigationComponents/ApplyNowPage/applyConatiner.js";
import Order from "./navigationComponents/OrderPage/OrderContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Container} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/products" component={Product} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/about" component={AboutUs} exact />
          <Route path="/career" component={Career} exact />
          <Route path="/apply" component={ApplyNow} exact />
          <Route path="/order" component={Order} exact />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
