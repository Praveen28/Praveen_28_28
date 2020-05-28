import React, { Component } from "react";
import { Typography, Grid, Container, Paper } from "@material-ui/core";
import { Visibility, Check, ControlCamera, AcUnit } from "@material-ui/icons";

import EndDescription from "../../components/EndDescrip_Container/EndContainer";
import AppBar from "../../components/AppBar/AppBar";
import "./aboutUsContainer.css";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Grid container className="about_image1">
          <Grid item xs={12}>
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
            <Typography component="div" className="about_title">
              About Us <br />
              THIS IS WHAT WE ARE...
              <br />
              Reliable  |   Premium  |   Boutique  |   Passionate  |   Fun
              Loving
            </Typography>
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
            <br />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{ left: "5%" }}
          className="about_image2"
        >
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Grid container direction="row">
              <Grid item xs={12} md={2}>
                <Visibility className="about_icons" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" className="about_text">
                  VISION <br />
                  Antenna design is committed to the creation of a powerful
                  global brand characterized by integrity with focus on the
                  Rural and Bottom of Pyramid sectors.
                </Typography>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item xs={12} md={2} style={{ marginTop: "3%" }}>
                <ControlCamera className="about_icons" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" className="about_text">
                  MISION <br />
                  To Promote wire free world with innovative antenna designs and
                  develop the motherland for the welfare of the nation.
                </Typography>
              </Grid>
              <Grid item md={4}></Grid>
              <Grid item xs={12} md={2} style={{ marginTop: "3%" }}>
                <AcUnit className="about_icons" />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography component="div" className="about_text">
                  VALUES <br />
                  <Typography>
                    <Check className="values_icons" /> Create a revolution and
                    then revenue
                  </Typography>
                  <Typography>
                    <Check className="values_icons" /> Integrity is the key
                  </Typography>
                  <Typography>
                    <Check className="values_icons" /> Keep it simple and
                    straight
                  </Typography>
                  <Typography>
                    <Check className="values_icons" /> Commit to what we can
                    deliver and deliver what is committed
                  </Typography>
                  <Typography>
                    <Check className="values_icons" /> Invest in people, process
                    and products
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5} xs={12}></Grid>
        </Grid>

        <br />
        <br />
        <Grid container className="about_image3">
          <Grid item md={6} xs={12}></Grid>
          <Grid item md={6} xs={12}>
            <br />
            <Typography className="chaiman_title">
              CHAIRMAN'S MESSAGE
            </Typography>
            <br />
            <Typography className="chaiman_message">
              "In the times of mushrooming IT companies, Antenna Design is meant
              to grow to be a gigantic tree not competing for mere space or
              water, but to transcend the natural barriers and stand tall as a
              towering symbol of grandeur and elegance. It should create and
              sustain an ecosystem of integrity and trust, the impact of which
              can be felt by its employees and customers alike. The positive
              synergy that will hold the elements of the company together at
              various levels is sure to reflect in the quality of the services
              and offerings."
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Grid>
        </Grid>
        <br />
        <br />
        <Typography className="title">MEET THE TEAM</Typography>
        <br />
        <br />

        <Container maxWidth="md">
          <Paper elevation={15} className="about_paper">
            <Grid container spacing={2}>
              <Grid item md={2} xs={12}>
                <img
                  alt="vision"
                  src="https://www.freepngimg.com/thumb/chess/22811-8-chess.png"
                  className="photo_icon"
                />
              </Grid>
              <Grid item md={10} xs={12}>
                <br />
                <Typography style={{ textAlign: "center", fontSize: "25px" }}>
                  PRASAD JONES CHRISTY DASS
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  INCREDIBLE DESIGNER & ADVISOR
                </Typography>
                <br />
                <br />
                <Typography
                  style={{
                    textAlign: "justify",
                    marginRight: "1rem",
                    marginLeft: "1rem",
                  }}
                >
                  A thorough finance professional and an entrepreneur, currently
                  head of finance of an organization that is providing support
                  services to Energy Industries in Doha, Qatar. <br />
                  <br />
                  An Associate Member of ICAI and a qualified Cost Accountant
                  with over 14 yrs of experience and specifically over 10 years
                  in the middle east operating in the spheres of automobile,
                  manufacturing, trading and real estate with excellence in
                  business support services.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <br />
        <br />
        <div className="about_spartans">
          <br />
          <Typography className="title">MEET THE SPARTANS</Typography>
          <Typography style={{ textAlign: "center" }}>
            “A successful team is a group of many hands and one mind”
          </Typography>
          <br />
          <Container maxWidth="md">
            <Grid container spacing={2}>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://ya-webdesign.com/transparent250_/george-washington-clipart-11.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="http://pngimg.com/uploads/man/man_PNG6534.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="http://pngimg.com/uploads/man/man_PNG6533.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="http://pngimg.com/uploads/man/man_PNG6531.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="http://pngimg.com/uploads/man/man_PNG6513.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="http://pngimg.com/uploads/man/man_PNG6509.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={1} xs={12}></Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://ya-webdesign.com/transparent250_/man-clipart-png-10.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://ya-webdesign.com/transparent250_/man-clipart-png-2.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://ya-webdesign.com/transparent250_/male-clipart-1-person-8.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://webstockreview.net/images/clipart-child-wave-goodbye-5.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={2} xs={6}>
                <img
                  alt="spartan1"
                  src="https://ya-webdesign.com/transparent250_/george-washington-clipart-11.png"
                  className="spartans_icon"
                />
              </Grid>
              <Grid item md={1} xs={6}></Grid>
            </Grid>
            <br />
            <br />
          </Container>
        </div>
        <EndDescription />
      </React.Fragment>
    );
  }
}

export default AboutUs;
