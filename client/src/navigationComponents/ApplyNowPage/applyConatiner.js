import React, { Component } from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";

import { withRouter } from "react-router-dom";

import { Close } from "@material-ui/icons";
import AppBar from "../../components/AppBar/AppBar";
import "./applyContainer.css";

class ApplyNow extends Component {
  handleClose = () => {
    this.props.history.push("/career");
  };

  render() {
    return (
      <React.Fragment>
        <AppBar />
        <br />
        <img
          alt="apply"
          src="https://www.pngitem.com/pimgs/m/49-498352_join-us-illustration-hd-png-download.png"
          className="apply_image"
        />
        <Close
          className="close_button"
          onClick={() => {
            this.handleClose();
          }}
        />
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Name" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Your Email-Id" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Mobile Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                rows="6"
                multiline
              />
            </Grid>
            <Grid item xs={4}>
              <Button fullWidth className="apply_button">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ApplyNow);
