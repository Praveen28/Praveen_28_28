import React, { Component } from "react";
import { Typography, Grid, Container } from "@material-ui/core";

import "./ServiceContainer.css";

class ServiceContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <Typography className="service_title">SERVICES</Typography>
        <br />
        <Container>
          <Grid container spacing={2}>
            <Grid item md={3} xs={12}>
              <img
                alt="service"
                src="https://img.icons8.com/plasticine/2x/service.png"
                className="service_image"
              />
              <br />
              <Typography className="service_text_1">
                ANTENNA SERVICES
              </Typography>
              <Typography className="service_text_2">
                Our antenna service development team takes maximum advantage to
                repair the old antenna and make it work with better power in the
                future.
              </Typography>
            </Grid>
            <Grid item md={1}>
              <hr className="service_divider" />
            </Grid>
            <Grid item md={3} xs={12}>
              <img
                alt="service"
                src="https://lh3.googleusercontent.com/proxy/2ihuGRj5gAp1ElC2Mgi8hXmX5Q9daIL3suohtEAPTPud6iJjuWpDU9Aq28g5vWJzx-y63Neri7qvmXwOkuXNIMXOKA-Nwx7USiQ"
                className="service_image"
              />
              <br />
              <Typography className="service_text_1">
                ANTENNA TESTING
              </Typography>
              <Typography className="service_text_2">
                The testing team ensures that the antenna meets the
                specification or simply to characterise it and anlyse the
                results.
              </Typography>
            </Grid>
            <Grid item md={1}>
              <hr className="service_divider" />
            </Grid>

            <Grid item md={3} xs={12}>
              <img
                alt="service"
                src="https://arkarad.com/en/includes/assets/uploads/service/1398-06-28/photos/photo-4e232a2dca9da1ab048f18f1388ca7a8.png"
                className="service_image"
              />
              <br />
              <Typography className="service_text_1">ANTENNA DESIGN</Typography>
              <Typography className="service_text_2">
                The design team helps our clients to design the antenna
                according to their requirments and allowing the developers to
                produce high quality.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
      </React.Fragment>
    );
  }
}

export default ServiceContainer;
