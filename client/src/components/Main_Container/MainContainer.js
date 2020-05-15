import React, { Component } from "react";
import "./MainContainer.css";

import AppBar from "../AppBar/AppBar";
import OwnerContainer from "../OwnerContainer/OwnerContainer.js";
import CompanyDescription from "../Description_Container/Description.js";
import ProductContainer from "../Product_Container/ProductContainer.js";
// import ServiceContainer from "../ServicesContainer/ServiceContainer.js";
import MessageContainer from "../MessageContainer/MessageContainer.js";
import EndContainer from "../EndDescrip_Container/EndContainer.js";

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div style={{ marginTop: "15%" }}></div>
        <OwnerContainer />
        <br />
        <br />
        <CompanyDescription />
        <br />
        <br />
        <ProductContainer />
        <br />
        <br />
        <MessageContainer />
        <br />
        <br />
        <EndContainer />
      </React.Fragment>
    );
  }
}

export default Body;
