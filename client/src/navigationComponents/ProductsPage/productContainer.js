import React, { Component } from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import { Check } from "@material-ui/icons";

import Solution_Image from "../../images/solution.jpg";

import AppBar from "../../components/AppBar/AppBar";
import EndDescription from "../../components/EndDescrip_Container/EndContainer";
import "./productContainer.css";

class Product extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <img
          alt="product_images"
          className="product_images"
          src="https://www2.l3t.com/csw/assets/products/images/products-header.jpg"
        />
        <div style={{ marginTop: "10%" }} />
        <Container>
          <Typography component="div" className="intro_product" variant="h4">
            PRODUCTS <br /> We offer the best design and products...
          </Typography>
          <div style={{ marginTop: "15%" }}></div>
          <Paper elevation={10} className="paper_product">
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={6}>
                <img
                  alt="microstrip antenna"
                  className="full_product_image"
                  src="https://www.researchgate.net/profile/Mahfuz_Rahman8/publication/325284168/figure/fig1/AS:628969061769217@1526969318949/Microstrip-line-feeding-for-the-Patch.png"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div">
                  MICROSTRIP PATCH ANTENNA
                </Typography>
                <Typography component="div" className="product_details">
                  The most common type of microstrip antenna is the patch
                  antenna. Antennas using patches as constitutive elements in an
                  array are also possible. A patch antenna is a narrowband,
                  wide-beam antenna fabricated by etching the antenna element
                  pattern in metal trace bonded to an insulating dielectric
                  substrate, such as a printed circuit board, with a continuous
                  metal layer bonded to the opposite side of the substrate which
                  forms a ground plane. Common microstrip antenna shapes are
                  square, rectangular, circular and elliptical, but any
                  continuous shape is possible.
                </Typography>
                <br />
                <Typography component="div">Core Modules</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Check className="check_icon" /> Hi
                      <Typography component="div"></Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <Paper elevation={10} className="paper_product">
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={6}>
                <Typography component="div">LENS ANTENNAS DESIGN</Typography>
                <Typography component="div" className="product_details">
                  The Fresnel lens reduces the amount of material required
                  compared to a conventional lens by dividing the lens into a
                  set of concentric annular sections. An ideal Fresnel lens
                  would have an infinite number of sections. In each section,
                  the overall thickness is decreased compared to an equivalent
                  simple lens. This effectively divides the continuous surface
                  of a standard lens into a set of surfaces of the same
                  curvature, with stepwise discontinuities between them. In some
                  lenses, the curved surfaces are replaced with flat surfaces,
                  with a different angle in each section. Such a lens can be
                  regarded as an array of prisms arranged in a circular fashion,
                  with steeper prisms on the edges, and a flat or slightly
                  convex center.
                </Typography>
                <br />
                <Typography component="div">Core Modules</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  alt="lens antenna"
                  className="full_product_image"
                  src="https://www.researchgate.net/profile/HR_Hassani/publication/255570558/figure/fig1/AS:297915227623424@1448039933298/Configuration-of-the-proposed-horn-antenna.png"
                />
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
          <Paper elevation={10} className="paper_product">
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={6}>
                <img
                  alt="microstrip antenna"
                  className="full_product_image"
                  src="https://www.lectrosonics.com/media/com_hikashop/upload/thumbnails/500x570f/arg2.jpg"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div">WIRE ANTENNAS DESIGN</Typography>
                <Typography component="div" className="product_details">
                  A random wire antenna is a radio antenna consisting of a long
                  wire suspended above the ground, whose length does not bear a
                  relation to the wavelength of the radio waves used, but is
                  typically chosen more for convenience. The wire may be
                  straight or it may be strung back and forth between trees or
                  walls just to get enough wire into the air. Such antennas are
                  usually not as effective as antennas whose length is adjusted
                  to resonate at the wavelength to be used. Random wire antennas
                  are a type of monopole antenna and the other side of the
                  receiver or transmitter antenna terminal must be connected to
                  an earth ground.
                </Typography>
                <br />
                <Typography component="div">Core Modules</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Typography component="div">
                        <Check className="check_icon" /> Hi
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <br />
          <br />
        </Container>

        <Typography component="div" className="solution_title">
          Solution Process
        </Typography>
        <Container>
          <img alt="solution" className="solution_image" src={Solution_Image} />
        </Container>

        <EndDescription />
      </React.Fragment>
    );
  }
}

export default Product;
