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
        <div className="product_div">
          <img
            alt="product_images"
            className="product_images"
            src="https://image.freepik.com/free-photo/black-creative-background_99433-733.jpg"
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
                  src="https://www.researchgate.net/profile/Mahfuz_Rahman8/publication/325284168/figure/fig1/AS:628969061769217@1526969318949/Microstrip-line-feeding-for-the-Patch.png"
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
                  src="https://www.pasternack.com/images/Product/medium/PEWAN1078.jpg"
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
                  src="https://images-eu.ssl-images-amazon.com/images/I/41eNFVzsT3L._SL500_AC_SS350_.jpg"
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
                  src="data:image/jpeg;base64,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"
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src="https://logodix.com/logo/1965692.png"
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src="https://www.goengineer.com/wp-content/uploads/EMWorks.png"
                  className="technology_image"
                />
              </Grid>
              <Grid item md={3} xs={6}>
                <img
                  alt="technology"
                  src="https://logos-download.com/wp-content/uploads/2019/01/ANSYS_Logo.png"
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
