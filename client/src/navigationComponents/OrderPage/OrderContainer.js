import React, { Component } from "react";
import {
  Typography,
  Grid,
  TextField,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import AppBar from "../../components/AppBar/AppBar";
import EndDescription from "../../components/EndDescrip_Container/EndContainer";
import OrderImage from "../../images/navigationComponents/OrderPage/orderImage.png";
import "./OrderContainer.css";

class Order extends Component {
  state = {
    name: "",
    emailid: "",
    mobilenumber: "",
    shape: "",
    application: "",
    type: "",
    description: "",
  };

  handleName = (e) => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleEmailId = (e) => {
    this.setState({
      emailid: e.currentTarget.value,
    });
  };

  handleMobile = (e) => {
    this.setState({
      mobilenumber: e.currentTarget.value,
    });
  };

  handleShape = (e) => {
    this.setState({
      shape: e.target.value,
    });
  };

  handleApplication = (e) => {
    this.setState({
      application: e.currentTarget.value,
    });
  };

  handleType = (e) => {
    this.setState({
      type: e.target.value,
    });
  };

  handleDescription = (e) => {
    this.setState({
      description: e.currentTarget.value,
    });
  };

  handleOrder = () => {
    const data = {
      name: this.state.name,
      emailid: this.state.emailid,
      mobilenumber: this.state.mobilenumber,
      type: this.state.type,
      application: this.state.application,
      shape: this.state.shape,
      description: this.state.description,
    };
    if (
      !this.state.name ||
      !this.state.emailid ||
      !this.state.mobilenumber ||
      !this.state.type ||
      !this.state.application ||
      !this.state.shape ||
      !this.state.description
    ) {
      alert("Enter all the values..");
    } else {
      axios
        .post("/order", data)
        .then((res) => {
          alert("Entered");
          window.location.reload(false);
        })
        .catch((err) => console.log(err));
    }
  };
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div className="order_div">
          <img alt="order" src={OrderImage} className="order_image" />
          <Typography className="order_title">ORDER</Typography>
        </div>
        <br />
        <br />
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Name"
                value={this.state.name}
                onChange={(e) => this.handleName(e)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Email-Id"
                value={this.state.emailid}
                onChange={(e) => this.handleEmailId(e)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Mobile Number"
                value={this.state.mobilenumber}
                onChange={(e) => this.handleMobile(e)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Antenna Type</InputLabel>
                <Select
                  label="Antenna Type"
                  value={this.state.type}
                  onChange={this.handleType}
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Microstrip antenna">
                    Microstrip antenna
                  </MenuItem>
                  <MenuItem value="Wire antenna">Wire antenna</MenuItem>
                  <MenuItem value="Lens antenna">Lens antenna</MenuItem>
                  <MenuItem value="Horn antenna">Horn antenna</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Application"
                value={this.state.application}
                onChange={(e) => this.handleApplication(e)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Shape of Antenna</InputLabel>
                <Select
                  label="Shape of Antenna"
                  value={this.state.shape}
                  onChange={this.handleShape}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Round">Round</MenuItem>
                  <MenuItem value="Square">Square</MenuItem>
                  <MenuItem value="Rectangle">Rectangle</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={6}
                label="Antenna Description"
                value={this.state.description}
                onChange={(e) => this.handleDescription(e)}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleOrder();
                }}
                style={{ letterSpacing: "0.4em" }}
              >
                ORDER
              </Button>
            </Grid>
          </Grid>
          <br />
          <Paper elevation={15}>
            <Typography
              style={{
                textAlign: "center",
                backgroundColor: "#8E08B9",
                color: "white",
                letterSpacing: "0.3em",
                fontSize: "1.3rem",
              }}
            >
              DISCLAIMER
            </Typography>
            <Typography
              style={{
                textAlign: "justify",
                marginLeft: "3rem",
                marginRight: "3rem",
              }}
            >
              On ordering the antenna, you will be called by our company
              collegues to confirm that you only have been ordered the antenna
              for your requirments. The fabrication and design cost of the
              antenna as by your requirements will be informed to you through
              any source by our team...
            </Typography>
          </Paper>
          <br />
          <br />
        </Container>
        <EndDescription />
      </React.Fragment>
    );
  }
}

export default Order;
