import React, { Component } from "react";
import "./MainContainer.css";

import { Typography } from "@material-ui/core";

import AppBar from "../AppBar/AppBar";
import OwnerContainer from "../OwnerContainer/OwnerContainer.js";
import CompanyDescription from "../Description_Container/Description.js";
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
            src="https://webpuppies.com.sg/wp-content/uploads/2018/03/Webpuppies_NightView-1024x603.jpg"
          />
          <Typography className="main_text">ANTENNA DESIGN</Typography>
        </div>
        {/* <OwnerContainer />
        <br />
        <br />
        <CompanyDescription />
        <br />
        <br /> */}
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
