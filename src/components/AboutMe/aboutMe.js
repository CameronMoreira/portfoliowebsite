import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UottawaLogo from "../../assets/images/uottawa-logo.png";
import "../../css/AboutMe.css";

function AboutMe() {
  return (
    
    <Container id="about-me-background" fluid>
      <p className="some-info-title" id="webpage-content-title-aboutme"> --- Some Info </p>
      <h1 className="about-me-title" id="webpage-content-title">About Me</h1>
      <Container id="aboutMe" >  
      <Row>
        
        <Col>
          {/* <h1>About Me</h1> */}

          <p className="aboutme-description">
            I am a full time student at the <b id="b-text">Univesrsity of Ottawa</b> studying
            Computer Science and Political Science. I am actively looking to
            expand my knowledge and skills in the field of web development. With
            goals of becoming a <b id="b-text">Full Stack Developer</b> , I am currently open to
            any opportunity to learn new technologies and expand my knowledge.
          </p>
        </Col>
      </Row>

      <Row>
        <h2 id="my-education-title">My Education</h2>
        <Col id="uottawa-logo-col">
          {/* <h2> My Education</h2> */}
          <img className="uottawa-logo" src={UottawaLogo} alt="UOttawa Logo" />
        </Col>
        <Col>
          {/* <h2 >My Education Info</h2> */}
          <h3>
            Program: Honours Bachelor of Science with Major in Computer Science
            and and Minor Political Science
          </h3>

          <p>University of Ottawa, Canada</p>
        </Col>
      </Row>
    </Container>
    </Container>
  
  );
}

export default AboutMe;
