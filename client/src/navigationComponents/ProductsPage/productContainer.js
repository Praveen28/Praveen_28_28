import React, { Component } from "react";
import { Container, Typography, Grid, Paper } from "@material-ui/core";
import { Check } from "@material-ui/icons";

import Product_Image from "../../images/navigationComponents/ProductsPage/product_title.jpg"
import Product1 from "../../images/navigationComponents/ProductsPage/product1.png"
import Product2 from "../../images/navigationComponents/ProductsPage/product2.jpg"
import Product3 from "../../images/navigationComponents/ProductsPage/product3.jpg"
import Tech1 from "../../images/navigationComponents/ProductsPage/tech1.jpeg"
import Tech2 from "../../images/navigationComponents/ProductsPage/tech2.png"
import Tech3 from "../../images/navigationComponents/ProductsPage/tech3.png"
import Tech4 from "../../images/navigationComponents/ProductsPage/tech4.png"
import Solution_Image from "../../images/navigationComponents/ProductsPage/solution.jpg";

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
        <div className="product_div">
          <img
            alt="product_images"
            className="product_images"
            src={Product_Image}
          />
          <Typography className="intro_product">
            PRODUCTS <br /> We offer the best design and products...
          </Typography>
        </div>
        <br />
        <Container>
          <Paper elevation={10} className="paper_product">
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={6}>
                <img
                  alt="microstrip antenna"
                  className="full_product_image"
                  src={Product1}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" className="product_title">
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
                <Typography component="div">ADVANTAGES</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Light weight and low
                        volume
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Planar configuration
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Low manufacturing cost
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Support both linear as
                        well as circular polarization
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Easily integrated with
                        microwave integrated circuit
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Capable of multiband
                        operation
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Capable of multiband
                        operation
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Mechanically robust
                        when mounted on rigid surface.
                      </Typography>
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
                <Typography component="div" className="product_title">
                  LENS ANTENNAS DESIGN
                </Typography>
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
                <Typography component="div">ADVANTAGES</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> In lens antennas, feed
                        and feed support, do not obstruct the aperture.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It has greater design
                        tolerance.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Larger amount of wave,
                        than a parabolic reflector, can be handled.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> Beam can be moved
                        angularly with espect to the axis.
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  alt="lens antenna"
                  className="full_product_image"
                  src={Product2}
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
                  src={Product3}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography component="div" className="product_title">
                  WIRE ANTENNAS DESIGN
                </Typography>
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
                <Typography component="div">ADVANTAGES</Typography>
                <br />
                <Typography component="div">
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It is simple in
                        construction
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It offers satisfactory
                        gain and directivity.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It radiates on any
                        frequency for which its overall length is not less than
                        λ/2.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It has sharp
                        directional pattern.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It concentrates
                        radiation at low vertical angles.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography component="div">
                        <Check className="check_icon" /> It is inexpensive.
                      </Typography>
                    </Grid>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <br />
        <br />
        <div style={{ backgroundColor: "#D7DBDD" }}>
          <br />
          <br />
          <Typography className="solution_title">TECHNOLOGIES</Typography>
          <br />
          <br />
          <Container>
            <Grid container spacing={3}>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src={Tech1}
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src={Tech2}
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src={Tech3}
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src={Tech4}
                  className="technology_image"
                />
              </Grid>
            </Grid>
          </Container>
        </div>
        <br />
        <br />
        <Typography component="div" className="solution_title">
          SOLUTION PROCESS
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
