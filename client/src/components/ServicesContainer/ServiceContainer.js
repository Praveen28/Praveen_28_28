import React, { Component } from "react";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import Service1_PNG from "../../images/components/ServicesContainer/service1.png";
import Service2_PNG from "../../images/components/ServicesContainer/service2.jpeg";
import Service3_PNG from "../../images/components/ServicesContainer/service3.png";
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
              <img alt="service" src={Service1_PNG} className="service_image" />
              <br />
              <Typography className="service_text_1">
                PUBLICATION OF JOURNAL
              </Typography>
              <Typography className="service_text_2">
                Your research paper will be made to publish from the top journal
                websites and before your paper will be made to undergo
                verification process.
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
              <img alt="service" src={Service2_PNG} className="service_image" />
              <br />
              <Typography className="service_text_1">
                FABRICATION & TESTING
              </Typography>
              <Typography className="service_text_2">
                The fabrication & testing team ensures that the antenna meets
                the specification or simply to characterise it and anlyse the
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
              <img alt="service" src={Service3_PNG} className="service_image" />
              <br />
              <Typography className="service_text_1">
                ACADEMIC SUPPORT
              </Typography>
              <Typography className="service_text_2">
                Knowledege is more power. So we offer video lectures and implant
                training about the recent trends in the development of antenna.
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
