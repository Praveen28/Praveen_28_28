import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ListItem,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import "./AppBar.css";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import Logo from "../../images/antenna.png";

class Appbar extends Component {
  state = {
    drawerOpen: false,
  };

  drawerOpen = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  backDropClick = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  render() {
    let sidedrawer;
    let backdrop;
    if (this.state.drawerOpen) {
      sidedrawer = <SideDrawer />;
      backdrop = <BackDrop click={this.backDropClick} />;
    }
    return (
      <React.Fragment>
        <AppBar className="appbar" position="sticky">
          <Toolbar>
            <img className="logo" alt="logo" src={Logo} />
            <Typography className="appbar_title" variant="h6">
              Antenna Design
            </Typography>
          </Toolbar>
        </AppBar>
        <ListItem>
          <div className="drawer_button">
            <Menu
              className="hamburger_button"
              style={{ fontSize: "2rem" }}
              onClick={() => this.drawerOpen()}
            />
          </div>
          {sidedrawer}
          {backdrop}
          <div className="navigation_links">
            <Button className="navigation_links_button">Products</Button>
            <Button className="navigation_links_button">Actions</Button>
            <Button className="navigation_links_button">Contact Us</Button>
            <Button className="navigation_links_button">Emplyoees</Button>
            <Button className="navigation_links_button">Address</Button>
            <Button className="navigation_links_button">Order</Button>
          </div>
        </ListItem>
      </React.Fragment>
    );
  }
}

export default Appbar;
