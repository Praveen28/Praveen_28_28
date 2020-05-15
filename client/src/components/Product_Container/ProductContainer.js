import React, { Component } from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";

import "./ProductContainer.css";

class ProductContainer extends Component {
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
              <Paper elevation={10} className="paper">
                <img
                  className="product_image"
                  alt="product1"
                  src="https://www.researchgate.net/profile/Mahfuz_Rahman8/publication/325284168/figure/fig1/AS:628969061769217@1526969318949/Microstrip-line-feeding-for-the-Patch.png"
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
              <Paper elevation={10} className="paper">
                <img
                  className="product_image"
                  alt="product1"
                  src="https://www.researchgate.net/profile/HR_Hassani/publication/255570558/figure/fig1/AS:297915227623424@1448039933298/Configuration-of-the-proposed-horn-antenna.png"
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
              <Paper className="paper" elevation={10}>
                <img
                  className="product_image"
                  alt="product1"
                  src="https://www.lectrosonics.com/media/com_hikashop/upload/thumbnails/500x570f/arg2.jpg"
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

export default ProductContainer;
