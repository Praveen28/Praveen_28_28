import React, { Component } from "react";
import { Grid, Typography, Container } from "@material-ui/core";

import {} from "@material-ui/icons";

import "./UniqueContainer.css";

class UniqueContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Typography className="unique_title">OUR UNIQUENESS</Typography>
        <br />
        <Typography style={{ textAlign: "center" }}>
          Here's what we understood why our customer stayed with us for a long
          time...that defined us eventually
        </Typography>
        <br />
        <br />
        <Container>
          <Grid container spacing={2} className="unique_grid">
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={3}>
                  <img
                    alt="image1"
                    src="http://pngimg.com/uploads/globe/globe_PNG63.png"
                    className="unique_icons"
                  />
                </Grid>
                <Grid item md={9} xs={9}>
                  <Typography className="unique_grid_title">
                    BIG PICTURE
                  </Typography>
                  <br />
                  <Typography className="unique_grid_subtitle">
                    We work with you by looking at “YOUR BIG PICTURE” the same
                    way you do
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={3}>
                  <img
                    alt="image2"
                    src="https://cdn.pixabay.com/photo/2013/03/29/13/40/magnifying-glass-97635_1280.png"
                    className="unique_icons"
                  />
                </Grid>
                <Grid item md={9} xs={9}>
                  <Typography className="unique_grid_title">
                    TRANSPARENCY
                  </Typography>
                  <br />
                  <Typography className="unique_grid_subtitle">
                    "WHAT WE SAY IS REALLY WHAT WE DO”, we ensure and expect
                    transparency
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={3}>
                  <img
                    alt="image3"
                    src="https://pngimg.com/uploads/like/like_PNG81.png"
                    className="unique_icons"
                  />
                </Grid>
                <Grid item md={9} xs={9}>
                  <Typography className="unique_grid_title">
                    TAILORED SERVICE
                  </Typography>
                  <br />
                  <Typography className="unique_grid_subtitle">
                    We believe “NO ONE SIZE FITS ALL”, our services are always
                    tailored and personalized
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={3} xs={3}>
                  <img
                    alt="image4"
                    src="https://pngimage.net/wp-content/uploads/2018/05/clients-png.png"
                    className="unique_icons"
                  />
                </Grid>
                <Grid item md={9} xs={9}>
                  <Typography className="unique_grid_title">
                    CLIENT REFERRAL
                  </Typography>
                  <br />
                  <Typography className="unique_grid_subtitle">
                    OUR CLIENTS ARE OUR BRAND AMBASSADORS. we mostly work on
                    referrals
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default UniqueContainer;
