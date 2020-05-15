import React, { Component } from "react";
import { Card, Container, Typography, Grid } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";

import Logo from "../../images/antenna.png";
import "./EndContainer.css";

class EndContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Card className="card">
            <Container>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Typography className="end_text" style={{ fontSize: "130%" }}>
                    <img alt="Logo" src={Logo} className="end_logo" />
                    Antenna Design
                  </Typography>
                </Grid>
                <Grid item md={3}></Grid>
                <Grid item xs={12} md={3}>
                  <Typography className="end_text">OUR PARTNERS:</Typography>
                  <Typography className="end_text">Tesla</Typography>
                  <Typography className="end_text">Google</Typography>
                </Grid>
              </Grid>
              <hr />
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Typography className="end_text">
                    All rights reserved by Antenna Design.Copyright{" "}
                    <Copyright style={{ fontSize: "1rem" }} /> 2020
                  </Typography>
                </Grid>
                <Grid item xs={3} md={1}>
                  <img
                    onClick={() => alert("Plese provide link")}
                    className="social_logo"
                    alt="instagram"
                    src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/instagram-marketing-strategies-featured-image.jpg"
                  />
                </Grid>
                <Grid item xs={3} md={1}>
                  <img
                    onClick={() => alert("Plese provide link")}
                    className="social_logo"
                    alt="twitter"
                    src="https://pennine-ways.co.uk/wp-content/uploads/2020/04/Twitter.png"
                  />
                </Grid>
                <Grid item xs={3} md={1}>
                  <img
                    onClick={() => alert("Plese provide link")}
                    className="social_logo"
                    alt="facebook"
                    src="https://www.facebook.com/images/fb_icon_325x325.png"
                  />
                </Grid>
                <Grid item xs={3} md={1}>
                  <img
                    onClick={() => alert("Plese provide link")}
                    className="social_logo"
                    alt="youtube"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png"
                  />
                </Grid>
              </Grid>
            </Container>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default EndContainer;
