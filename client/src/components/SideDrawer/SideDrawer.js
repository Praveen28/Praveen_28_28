import React, { Component } from "react";
import { Link } from "@material-ui/core";

import "./SideDrawer.css";

class SideDrawer extends Component {
  render() {
    return (
      <div className="sidedrawer">
        <div className="sidedrawer_items">
          <Link className="sidedrawer_button">Products</Link>
          <br />
          <Link className="sidedrawer_button">Actions</Link>
          <br />
          <Link className="sidedrawer_button">Contact Us</Link>
          <br />
          <Link className="sidedrawer_button">Emplyoees</Link>
          <br />
          <Link className="sidedrawer_button">Address</Link>
          <br />
          <Link className="sidedrawer_button">Order</Link>
        </div>
      </div>
    );
  }
}

export default SideDrawer;
