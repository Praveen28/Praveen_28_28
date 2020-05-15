import React, { Component } from "react";
import { Typography, Paper, Grid, Container } from "@material-ui/core";

import "./ServiceContainer.css";

class ServiceContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Typography className="service_title" style={{ fontSize: "2rem" }}>
            SERVICES PROVIDED
          </Typography>
          <br />
          <br />
          <Paper elevation={10}>
            <Grid container spacing={1}>
              <Grid item md={6}>
                <img
                  className="service_image"
                  alt="design"
                  src="https://5.imimg.com/data5/QY/YZ/VO/SELLER-931948/pcb-and-antenna-prototyping-machine-250x250.jpg"
                />
              </Grid>
              <Grid item md={6}>
                <Typography className="service_text">Hello</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default ServiceContainer;
