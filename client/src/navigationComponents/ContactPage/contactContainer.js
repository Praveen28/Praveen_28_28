import React, { Component } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Email, LocationOn, PhoneIphone } from "@material-ui/icons";

import AppBar from "../../components/AppBar/AppBar";
import MessagePage from "../../components/MessageContainer/MessageContainer";
import EndPage from "../../components/EndDescrip_Container/EndContainer";
import "./contactContainer.css";

import Map from "../../images/navigationComponents/ContactPage/Map.png";
class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <AppBar />
        <img alt="map" src={Map} className="map" />
        <br />
        <br />
        <MessagePage />
        <br />
        <br />
        <br />
        <br />
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} className="grid_items">
              <Email className="logos" />
              <br />
              <Typography>antenna@gmail.com</Typography>
            </Grid>
            <Grid item xs={12} md={4} className="grid_items">
              <LocationOn className="logos" />
              <br />
              <Typography style={{ textAlign: "center" }}>
                Antenna Design Office <br /> No:1 Tolgate ,2nd cross, <br />
                Maruthi Nagar <br />
                Trichirapalli - 620 005
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="grid_items">
              <PhoneIphone className="logos" />
              <br />
              <Typography>+91 1234567890</Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <EndPage />
      </React.Fragment>
    );
  }
}

export default Contact;
