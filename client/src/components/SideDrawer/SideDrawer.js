import React, { Component } from "react";
import { Link } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import "./SideDrawer.css";

class SideDrawer extends Component {
  render() {
    return (
      <div className="sidedrawer">
        <div className="sidedrawer_items">
          <Link
            className="sidedrawer_button"
            onClick={() => {
              this.props.history.push("/products");
            }}
          >
            PRODUCTS
          </Link>
          <br />
          <Link
            className="sidedrawer_button"
            onClick={() => {
              this.props.history.push("/products");
            }}
          >
            CONTACT
          </Link>
          <br />
          <Link
            className="sidedrawer_button"
            onClick={() => {
              this.props.history.push("/contact");
            }}
          >
            ABOUT
          </Link>
          <br />
          <Link
            className="sidedrawer_button"
            onClick={() => {
              this.props.history.push("/career");
            }}
          >
            CAREER
          </Link>
          <br />
          <Link
            className="sidedrawer_button"
            onClick={() => {
              this.props.history.push("/order");
            }}
          >
            ORDER
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SideDrawer);
