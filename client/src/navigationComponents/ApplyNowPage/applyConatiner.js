import React, { Component } from "react";
import { TextField, Button, Grid, Container } from "@material-ui/core";

import ApplyImageBackground from "../../images/navigationComponents/ApplyPage/applyImage.png";

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
    file: "",
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

  handleFile = (e) => {
    this.setState({
      file: e.target.files[0],
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
      const formdata = new FormData();
      formdata.append("name", this.state.name);
      formdata.append("emailid", this.state.emailid);
      formdata.append("mobilenumber", this.state.mobilenumber);
      formdata.append("message", this.state.message);
      formdata.append("file", this.state.file);
      axios
        .post("/apply", formdata)
        .then((res) => {
          alert(res.data);
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
        <img alt="apply" src={ApplyImageBackground} className="apply_image" />
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
            <Grid item xs={12}>
              <div>
                <input
                  className="apply_input"
                  type="file"
                  onChange={(e) => this.handleFile(e)}
                />
              </div>
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
