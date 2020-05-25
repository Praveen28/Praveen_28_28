import React from "react";
import { Typography, Container, Grid, Paper } from "@material-ui/core";

import { Check } from "@material-ui/icons";
import AppBar from "../../components/AppBar/AppBar";
import EndDescription from "../../components/EndDescrip_Container/EndContainer";
import "./ServiceContainer.css";

class Services extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div className="services_div">
          <img
            alt="service"
            src="https://img-a.udemycdn.com/course/750x422/1645908_5506_5.jpg"
            className="services_image"
          />
          <Typography className="services_title">SERVICES</Typography>
        </div>
        <br />
        <Container maxWidth="md">
          <Typography
            style={{
              textAlign: "center",
              letterSpacing: "0.2em",
              fontSize: "1.8rem",
            }}
          >
            FRAMEWORKS
          </Typography>
          <br />
          <Grid container spacing={0}>
            <Grid item md={5} xs={12}>
              <img
                alt="service1"
                src="https://www.pngitem.com/pimgs/m/287-2876917_software-testing-hd-png-download.png"
                className="services_icon"
              />
              <br />
              <Typography className="services_text">
                ANTENNA FABRICATION & TESING <br />
                The fabrication and design of antenna is more efficient and long
                term support where they are designed and fabricated upto 40GHz
                with latest technologies.
              </Typography>
            </Grid>
            <hr />
            <Grid item md={5} xs={12}>
              <img
                alt="service1"
                src="https://www.kindpng.com/picc/m/667-6678542_quantitative-descriptive-research-quantitative-research-design-clipart-hd.png"
                className="services_icon"
              />
              <br />
              <Typography className="services_text">
                INDUSTRIAL RESEARCH & RESEARCH GUIDANCE <br /> We have
                experienced industrial experts for the development of antenna
                and the guidance given by our resarch team have been made easy.
              </Typography>
            </Grid>
          </Grid>
          <hr />
          <Grid container spacing={0}>
            <Grid item md={5} xs={12}>
              <img
                alt="service1"
                src="https://pngimage.net/wp-content/uploads/2018/06/publication-png-5.png"
                className="services_icon"
              />
              <br />
              <Typography className="services_text">
                PUBLICATION OF JOUNEAL & PATENT SUPPORT
                <br />
                The paper which is prepared by you will be made to publish in
                the top journals and have the authority to have the patent onn
                your name.
              </Typography>
            </Grid>
            <hr className="services_divider" />
            <Grid item md={5} xs={12}>
              <img
                alt="service1"
                src="https://newcommunityacademy.org/wp-content/uploads/2015/08/icon-parent-academic.png"
                className="services_icon"
              />
              <br />
              <Typography className="services_text">
                ACADEMIC SUPPORTS
                <br />
                For your future, we offer online & offine classes to engage you
                with upto-date and recent trends in the development of antenna
                with video courses.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <br />
        <br />
        <Typography
          style={{
            textAlign: "center",
            letterSpacing: "0.2em",
            fontSize: "1.8rem",
          }}
        >
          KEY MILESTONES
        </Typography>
        <br />
        <br />
        <Container>
          <Paper elevation={10}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <img
                  alt="fbarication"
                  src="https://breakthruweb.com/wp-content/uploads/2019/11/web-design-bg.png"
                  className="services_detail_icons"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography className="services_detail_title">
                  ANTENNA FABRICATION AND TESTING
                </Typography>
                <div style={{ margin: "1rem" }}>
                  <Typography className="services_detail_text">
                    The design and the fabrication process of the antenna are
                    designed upto 40GHz and they are made to test with various
                    frequencies and bandidths to check whethter all the
                    parameters of the antenna are working with proper condition.
                  </Typography>
                  <br />
                  <Typography>
                    METHOD USED:
                    <br />
                    <Check className="services_check_icon" /> Photolithography
                    and etching.
                    <br />
                    <Check className="services_check_icon" /> Machine cut
                  </Typography>
                  <br />
                  <Typography>SUBSTRATE MATERIALS:</Typography>
                  <Typography>
                    <Check className="services_check_icon" /> Roger <br />
                    <Check className="services_check_icon" /> Arlon <br />
                    <Check className="services_check_icon" /> FR4 <br />
                    <Check className="services_check_icon" /> All the substrates
                    available in market
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <Grid container spacing={0}>
            <Grid item md={6} xs={12}>
              <Paper className="services_paper" elevation={10}>
                <br />
                <img
                  alt="research"
                  src="https://aim2excel.in/wp-content/uploads/Asset-1@2x.png"
                  className="services_detail_icons"
                />
                <br />
                <Typography className="services_detail_title">
                  INDUSTRIAL RESEARCH & RESEARCH GUIDANCE
                </Typography>
                <br />
                <div style={{ margin: "1rem" }}>
                  <Typography className="services_detail_text">
                    The industry research & research guidance can help you you
                    to understand the the characteristics and preferences of
                    your customers and to monitor the level of competition in
                    your market.
                  </Typography>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>TECHNOLOGIES :</Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Embedded Systems
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        VLSI
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Antenna
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Steganography
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Image processing
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Power electronics
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Sentimental analysis
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Cyber security & attacks
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>SERVICES :</Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        PhD Registration
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        PhD Admission
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Research Proposal
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Proposal Implementation
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Paper Writing
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Thesis Writing
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Publication Guidance
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className="services_paper" elevation={10}>
                <br />
                <img
                  alt="research"
                  src="http://www.pngmart.com/files/7/Support-PNG-Photos.png"
                  className="services_detail_icons"
                />
                <br />
                <Typography className="services_detail_title">
                  ACADEMIC SUPPORT
                </Typography>
                <br />
                <div style={{ margin: "1rem" }}>
                  <Typography className="services_detail_text">
                    We offer the students to engage with us through online and
                    offline classes by video lectures, Value Added Courses,
                    Implant training and on-campus-training to tune their
                    knowledge with the recent trends in the antenna development.
                  </Typography>
                  <br />
                  <Typography>
                    <Check className="services_check_icon" />
                    Antenna Design(CST & HFSS)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Wirless Charger Design(HFSS)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Embedded (with Arduino Uno, Node MCU, Raspberry Pi)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Image Processing (with Matlab)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Steganography and attacks (Java & Python)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    VLSI (with Xilinx)
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Block Chain
                  </Typography>
                  <Typography>
                    <Check className="services_check_icon" />
                    Data structures Programming (with C, Python & Java)
                  </Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <br />
          <br />
          <Paper elevation={10}>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <img
                  alt="publishing"
                  src="https://pngimage.net/wp-content/uploads/2018/06/publication-png-7.png"
                  className="services_detail_icons"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <Typography className="services_detail_title">
                  PUBLICATION OF JOURNAL & PATENT SUPPORT
                </Typography>
                <div style={{ margin: "1rem" }}>
                  <Typography className="services_detail_text">
                    Your paper will be made to publish in the journal and it you
                    will get patent for your paper. We will offer the best free
                    publication journals with our support and you will be give
                    some solution and tips how the paper should be made to
                    publish and and to avoid errors while writing the paper.
                  </Typography>
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>STEPS TO PUBLISH :</Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Complete your research.
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Prepare the manuscript.
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Submit the manuscript.
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Manuscript get received.
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Decision / Accept or Reject
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Publication
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>THESIS WRITING AREAS:</Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Embedded Systems
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        VLSI
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Steganography
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Image processing
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Power electronics
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Cyber security & attacks
                      </Typography>
                      <Typography>
                        <Check className="services_check_icon" />
                        Sentimental analysis
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <br />
        <br />
        <EndDescription />
      </React.Fragment>
    );
  }
}

export default Services;
