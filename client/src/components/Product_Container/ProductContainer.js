import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

import Product1_Image from "../../images/components/Product_Container/product1.png"
import Product2_Image from "../../images/components/Product_Container/product2.png"
import Product3_Image from "../../images/components/Product_Container/product3.jpg"
import "./ProductContainer.css";

class ProductContainer extends Component {
  handleProducts = () => {
    this.props.history.push("/products");
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Typography className="title" style={{ fontSize: "2rem" }}>
            PRODUCTS
          </Typography>
          <br />
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} md={4}>
              <Paper
                elevation={10}
                className="paper"
                onClick={() => this.handleProducts()}
              >
                <img
                  className="product_image"
                  alt="product1"
                  src={Product1_Image}
                />

                <Typography className="text_1">
                  MICROSTRIP PATCH ANTENNA
                  <br />
                  Microstrip or patch antennas are becoming increasingly useful
                  because they can be printed directly onto a circuit board.
                  Microstrip antennas are becoming very widespread within the
                  mobile phone market. Patch antennas are low cost, have a low
                  profile and are easily fabricated.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                elevation={10}
                className="paper"
                onClick={() => this.handleProducts()}
              >
                <img
                  className="product_image"
                  alt="product1"
                  src={Product2_Image}
                />

                <Typography className="text_1">
                  LENS ANTENNAS DESIGN
                  <br />
                  Lens Antenna is an antenna which consists of an
                  electromagnetic lens with a feed. In other words, a lens
                  antenna is a three-dimensional electromagnetic device whose
                  refractive index is different from unity.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4}>
              <Paper
                className="paper"
                elevation={10}
                onClick={() => this.handleProducts()}
              >
                <img
                  className="product_image"
                  alt="product1"
                  src={Product3_Image}
                />

                <Typography className="text_1">
                  WIRE ANTENNAS DESIGN <br />
                  Home Data and infrastructure Smart grid dipole antenna
                  DEFINITION dipole antenna Posted by: Margaret Rouse WhatIs.com
                  A dipole antenna is a straight electrical conductor measuring
                  1/2 wavelength from end to end and connected at the center to
                  a radio-frequency (RF) feed line.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ProductContainer);
