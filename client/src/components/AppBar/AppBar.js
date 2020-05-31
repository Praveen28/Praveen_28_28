import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { withRouter } from "react-router-dom";

import "./AppBar.css";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../BackDrop/BackDrop";
import Logo from "../../images/components/AppBar/antenna.png";

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

  handleClick = () => {
    this.props.history.push("/");
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
            <img
              className="logo"
              alt="logo"
              src={Logo}
              onClick={() => {
                this.handleClick();
              }}
            />
            <Typography
              className="appbar_title"
              onClick={() => {
                this.handleClick();
              }}
            >
              µ-MAKER 
            </Typography>

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
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/services");
                }}
              >
                SERVICES
              </Button>
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/products");
                }}
              >
                PRODUCTS
              </Button>
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/contact");
                }}
              >
                CONTACT
              </Button>
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/about");
                }}
              >
                ABOUT
              </Button>
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/career");
                }}
              >
                Career
              </Button>
              <Button
                className="navigation_links_button"
                onClick={() => {
                  this.props.history.push("/order");
                }}
              >
                Order
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default withRouter(Appbar);
