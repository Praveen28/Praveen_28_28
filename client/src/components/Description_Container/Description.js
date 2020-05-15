import React, { Component } from "react";
import { Container, Typography, Paper } from "@material-ui/core";

import "./Description.css";

class Description extends Component {
  render() {
    return (
      <div>
        <Container>
          <Typography style={{ fontSize: "2rem" }} className="text_a">
            COMPANY DESCRIPTION
          </Typography>
          <br />
          <Paper elevation={15}>
            <img
              className="company_photo"
              alt="company_photo"
              src="https://i.ytimg.com/vi/cn7AFhVEI5o/maxresdefault.jpg"
            />

            <Typography className="text">
              Starbucks' company profile has it all -- the company's mission,
              background story, products, store atmosphere, and even folklore
              regarding the name. Best of all, they somehow manage to pull off
              sounding both genuine and grandiose. I don't know many other
              coffee stores that could claim, "our mission: to inspire and
              nurture the human spirit". Starbucks' company profile is a
              fantastic example of a store with a common household product --
              coffee -- managing to stand out from the competition through their
              mission and values.
            </Typography>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default Description;
