import React, { Component } from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";

import { withRouter } from "react-router-dom";
import axios from "axios";
import { Close } from "@material-ui/icons";
import AppBar from "../../components/AppBar/AppBar";
import "./applyContainer.css";

class ApplyNow extends Component {
  state = {
    name: "",
    emailid: "",
    mobilenumber: "",
    message: "",
  };

  handleName = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      emailid: e.currentTarget.value,
    });
  };
  handleNumber = (e) => {
    this.setState({
      mobilenumber: e.currentTarget.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.currentTarget.value,
    });
  };
  handleSubmit = () => {
    if (
      !this.state.name ||
      !this.state.emailid ||
      !this.state.mobilenumber ||
      !this.state.message
    ) {
      alert("Fill in all the details");
    } else {
      const submit = {
        name: this.state.name,
        emailid: this.state.emailid,
        mobilenumber: this.state.mobilenumber,
        message: this.state.message,
      };
      axios
        .post("/apply", submit)
        .then((res) => {
          alert("We will contact as soon as possible");
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
  };

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
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                value={this.state.name}
                onChange={(e) => {
                  this.handleName(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Email-Id"
                variant="outlined"
                value={this.state.emailid}
                onChange={(e) => {
                  this.handleEmail(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Mobile Number"
                variant="outlined"
                value={this.state.mobilenumber}
                onChange={(e) => {
                  this.handleNumber(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                rows="6"
                multiline
                value={this.state.message}
                onChange={(e) => {
                  this.handleMessage(e);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                className="apply_button"
                onClick={() => this.handleSubmit()}
              >
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
