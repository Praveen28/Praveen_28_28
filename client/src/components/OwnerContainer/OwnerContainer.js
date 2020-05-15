import React, { Component } from "react";
import {
  Paper,
  CardHeader,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

import "./OwnerContainer.css";
import Jones from "../../images/Jones.jpeg";

class Owner_Details extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <Paper elevation={10}>
          <CardHeader className="card_header" title="C E O" />
          <br />
          <Grid container spacing={2}>
            <Grid item md={1}/>
            <Grid item xs={12} md={3}>
              <img alt="Jones" className="avatar" src={Jones} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography className="text">
                A chief executive officer (CEO) is the highest-ranking executive
                in a company, whose primary responsibilities include making
                major corporate decisions, managing the overall operations and
                resources of a company, acting as the main point of
                communication between the board of directors (the board) and
                corporate operations and being the public face of the company. A
                CEO is elected by the board and its shareholders.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

export default Owner_Details;
