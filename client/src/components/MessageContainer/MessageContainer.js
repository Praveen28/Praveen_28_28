import React, { Component } from "react";
import {
  TextField,
  Typography,
  Grid,
  Paper,
  Container,
  Button,
} from "@material-ui/core";
import axios from "axios";

import "./MessageContainer.css";

class MessageContainer extends Component {
  state = {
    fullname: "",
    emailid: "",
    mobilenumber: "",
    message: "",
  };

  handleMobile = (e) => {
    this.setState({
      mobilenumber: e.currentTarget.value,
    });
  };
  handleFullname = (e) => {
    this.setState({
      fullname: e.currentTarget.value,
    });
  };
  handleEmailId = (e) => {
    this.setState({
      emailid: e.currentTarget.value,
    });
  };
  handleMessage = (e) => {
    this.setState({
      message: e.currentTarget.value,
    });
  };

  handleSubmit = () => {
    if (
      !this.state.fullname ||
      !this.state.emailid ||
      !this.state.mobilenumber ||
      !this.state.message
    ) {
      alert("Fill in all the details");
      window.location.reload(false);
    } else {
      const submit = {
        name: this.state.fullname,
        emailid: this.state.emailid,
        mobilenumber: this.state.mobilenumber,
        message: this.state.message,
      };
      axios
        .post("/message", submit)
        .then((res) => {
          alert(
            "Your response has been received by our team. We will contact you soon.."
          );
          window.location.reload(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Typography className="message_text">GET IN TOUCH</Typography>
        <br />
        <br />
        <Container maxWidth="md">
          <Paper elevation={10}>
            <Container>
              <br />
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={this.state.fullname}
                    onChange={(e) => this.handleFullname(e)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Email Id"
                    value={this.state.emailid}
                    onChange={(e) => this.handleEmailId(e)}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={4} xs={12}>
                  <TextField
                    fullWidth
                    value={this.state.mobilenumber}
                    onChange={(e) => this.handleMobile(e)}
                    label="Mobile Number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={this.state.message}
                    onChange={(e) => this.handleMessage(e)}
                    variant="outlined"
                    label="Message"
                    multiline
                    rows="6"
                  />
                </Grid>
                <Grid item md={8} xs={8}></Grid>
                <Grid item md={4} xs={4}>
                  <Button
                    fullWidth
                    className="submit_button"
                    variant="outlined"
                    onClick={() => this.handleSubmit()}
                  >
                    <Typography className="submit_text">SUBMIT</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default MessageContainer;
