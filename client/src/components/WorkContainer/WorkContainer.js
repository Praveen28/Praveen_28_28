import React, { Component } from "react";

import { Grid, Typography, Container } from "@material-ui/core";

import "./WorkContainer.css";

class WorkContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="work_div">
          <br />
          <br />
          <br />
          <Container>
            <Grid container spacing={5}>
              <Grid item md={3} xs={12}>
                <Typography className="work_text">2+</Typography>
                <Typography className="work_text_1">
                  YEARS OF EXPERIENCE
                </Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography className="work_text">30+</Typography>
                <Typography className="work_text_1">CLIENTS</Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography className="work_text">100+</Typography>
                <Typography className="work_text_1">PROJECTS</Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <Typography className="work_text">500K</Typography>
                <Typography className="work_text_1">
                  PERSON HOURS EXPERIENCE
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default WorkContainer;
