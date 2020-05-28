import React, { Component } from "react";
import { Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import CarrerImage from "../../images/navigationComponents/CarrerPage/carrerImage.jpg";
import AppBar from "../../components/AppBar/AppBar";
import EndDescription from "../../components/EndDescrip_Container/EndContainer";
import "./careerContainer.css";

class Career extends Component {
  applyNow = () => {
    this.props.history.push("/apply");
  };

  render() {
    return (
      <React.Fragment>
        <AppBar />
        <div className="career_div">
          <img alt="career_image" src={CarrerImage} className="career_image" />
          <Typography className="career_title">CAREER</Typography>
        </div>
        <br />
        <Typography className="career_subtitle">
          LIFE AT ANTENNA DESIGN
        </Typography>
        <br />
        <Typography className="career_subtitle_1">
          YOU’LL NEVER STOP LEARNING
        </Typography>
        <br />
        <Typography className="career_subtitle_2">
          Small teams and a blazing pace mean that your contributions will
          matter. Our new hire orientation program, sets you up for success in
          your new role. <br />
          Our unique culture empowers creativity and problem solving while
          enjoying the freedom to work in a way that’s right for you & you’ll
          have the chance to give back to your community, make a positive impact
          on the environment.
        </Typography>
        <br />
        <div style={{ textAlign: "center" }}>
          <Button
            className="career_button"
            onClick={() => {
              this.applyNow();
            }}
          >
            Apply Now
          </Button>
        </div>
        <br />
        <EndDescription />
      </React.Fragment>
    );
  }
}

export default withRouter(Career);
