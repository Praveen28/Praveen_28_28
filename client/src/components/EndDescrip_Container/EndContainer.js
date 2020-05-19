import React, { Component } from "react";
import { Typography, Grid } from "@material-ui/core";

import "./EndContainer.css";

class EndContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="end_color">
          <br />
          <Typography className="company_detail">
            COPYRIGHT © 2020. ANTENNA DESIGN SERVICE PVT LTD.
          </Typography>
          <br />
          <div className="end_items">
            <Grid container justify="center">
              <Grid item>
                <img
                  onClick={() => alert("Plese provide link")}
                  className="social_logo"
                  alt="instagram"
                  src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/12/instagram-marketing-strategies-featured-image.jpg"
                />
                <img
                  onClick={() => alert("Plese provide link")}
                  className="social_logo"
                  alt="twitter"
                  src="https://pennine-ways.co.uk/wp-content/uploads/2020/04/Twitter.png"
                />
                <img
                  onClick={() => alert("Plese provide link")}
                  className="social_logo"
                  alt="facebook"
                  src="https://www.facebook.com/images/fb_icon_325x325.png"
                />
                <img
                  onClick={() => alert("Plese provide link")}
                  className="social_logo"
                  alt="youtube"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1200px-YouTube_social_white_square_%282017%29.svg.png"
                />
              </Grid>
            </Grid>
          </div>
          <br/>
        </div>
      </React.Fragment>
    );
  }
}

export default EndContainer;
