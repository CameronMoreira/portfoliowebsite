import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavLinks from "./NavLinks/navLinks";
import CameronLogo from '../../assets/images/cameron-logo.png'

import "../../css/navbar.css";

// Create a sidebar navigation bar with the following items: Home, About, Skills, Projects, Contact.

function NavBar() {
  return (
    <Container>
      <Row id="nav-banner-row">
        <img id="cameron-logo" src={CameronLogo} alt="Cameron's Logo" />
      </Row>
      <Row id="nav-links-row">
        <NavLinks />
      </Row>
    </Container>
  );
}

export default NavBar;
