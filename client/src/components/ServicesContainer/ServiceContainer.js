import React, { Component } from "react";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import {withRouter} from "react-router-dom";
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
                PUBLICATION OF JOURNAL
              </Typography>
              <Typography className="service_text_2">
                Our antenna service development team takes maximum advantage to
                repair the old antenna and make it work with better power in the
                future.
              </Typography>
              <br />
              <Button
                className="service_button"
                onClick={() => {
                  this.props.history.push("/services");
                }}
              >
                Know more
              </Button>
            </Grid>
            <Grid item md={1}>
              <hr className="service_divider" />
            </Grid>
            <Grid item md={3} xs={12}>
              <img
                alt="service"
                src="data:image/jpeg;base64,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"
                className="service_image"
              />
              <br />
              <Typography className="service_text_1">
                FABRICATION & TESTING
              </Typography>
              <Typography className="service_text_2">
                The testing team ensures that the antenna meets the
                specification or simply to characterise it and anlyse the
                results.
              </Typography>
              <br />
              <Button
                className="service_button"
                onClick={() => {
                  this.props.history.push("/services");
                }}
              >
                Know more
              </Button>
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
              <Typography className="service_text_1">
                ACADEMIC SUPPORT
              </Typography>
              <Typography className="service_text_2">
                The design team helps our clients to design the antenna
                according to their requirments and allowing the developers to
                produce high quality.
              </Typography>
              <br />
              <Button
                className="service_button"
                onClick={() => {
                  this.props.history.push("/services");
                }}
              >
                Know more
              </Button>
            </Grid>
          </Grid>
        </Container>
        <br />
      </React.Fragment>
    );
  }
}

export default withRouter(ServiceContainer);
