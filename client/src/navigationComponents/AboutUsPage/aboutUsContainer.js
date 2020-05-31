import React, { Component } from "react";
import { Typography, Grid, Container, Paper } from "@material-ui/core";
import { Visibility, Check, ControlCamera, AcUnit } from "@material-ui/icons";
import ChairmanImage from "../../images/navigationComponents/AboutUsPage/Jones.jpeg";

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
              Thank you very much for visiting the µ-maker website. In line with
              our brand message of “µ-maker makes contributions to society by
              creating Third Eye for Research,” the µ-maker group is creating
              and offering various products, based on which we have conducted
              business in wide-ranging fields to make contributions to the
              general public. µ-maker is drawn through its superior
              technological capabilities centring around antenna to develop and
              offer excellent-quality products of outstanding performance in
              newer areas such as the Surveillance, Automotive and other
              applications. In this way, µ-maker makes contributions to progress
              in research. The µ-maker group will continue to focus on further
              improving our technical capabilities as a manufacturer of
              precision RF products, and on tackling fresh challenges towards
              advanced “Third Eye for Research” that assures a sense of
              excitement, trust and security to our customers. We at µ-maker
              group, will be united in our efforts to continue meeting in good
              faith the expectations of all of our stakeholders. We would like
              to cordially ask you for your continued invaluable support.
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
                <img alt="vision" src={ChairmanImage} className="photo_icon" />
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
                  "Third Eye for Research" that assure a sense of excitement,
                  trust and security
                  <br />
                  <br />
                  An Associate Member of NIIT research scholar team and an 8
                  years of experience in the field of antenna design and
                  fabrication and specifically over 3 years in the middles east
                  opertaing in the spheres of nano antenna, manufacturing and
                  involving in the process of fabrication of nano antenna.
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
