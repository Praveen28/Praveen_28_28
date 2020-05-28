import React, { Component } from "react";
import "./MainContainer.css";

import { Typography } from "@material-ui/core";
import MainContainerImage from "../../images/components/Main_Container/MainContainer.jpg";

import AppBar from "../AppBar/AppBar";
import ServiceContainer from "../ServicesContainer/ServiceContainer.js";
import ProductContainer from "../Product_Container/ProductContainer.js";
import UniquenessContainer from "../UniquenessContainer/UniqueContainer";
import WorkContainer from "../WorkContainer/WorkContainer.js";
import MessageContainer from "../MessageContainer/MessageContainer.js";
import EndContainer from "../EndDescrip_Container/EndContainer.js";

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div className="main_div">
          <img
            alt="main"
            className="main_image"
            src={MainContainerImage}
          />
          <Typography className="main_text">ANTENNA DESIGN</Typography>
        </div>
        <ServiceContainer />
        <br />
        <br />
        <ProductContainer />
        <br />
        <br />
        <UniquenessContainer />
        <br />
        <br />
        <WorkContainer />
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
