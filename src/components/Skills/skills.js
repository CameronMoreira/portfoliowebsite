import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import AndroidStudioLogo from "../../assets/images/androidstudio-logo.png";
import HTMLlogo from "../../assets/images/html-logo.png";
import CSSlogo from "../../assets/images/css-logo.png";
import Javascriptlogo from "../../assets/images/js-logo.png";
import Javalogo from "../../assets/images/java-logo.png";
import Reactlogo from "../../assets/images/react-logo.png";
import FirebaseLogo from "../../assets/images/firebase-logo.png";
import GithubLogo from "../../assets/images/github-logo.png";
import GolangLogo from "../../assets/images/golang-logo.png";
import HerokuLogo from "../../assets/images/heroku-logo.png";
import PostgresqlLogo from "../../assets/images/postgresql-logo.png";
import PrologLogo from "../../assets/images/prolog-logo.png";
import PythonLogo from "../../assets/images/python-logo.png";
import SqlLogo from "../../assets/images/sql-logo.png";
import SwiftLogo from "../../assets/images/swift-logo.png";
import CplusplusLogo from "../../assets/images/c++-logo.png";

import "../../css/skills.css";

function Skills() {
  return (
    <Container id="skills-container" fluid>
    <p className="some-info-title" id="webpage-content-title"> --- CHECK OUT MY </p>
      <h1 className="about-me-title" id="webpage-content-title">Skills</h1>
    <Container id="skills" >
      <h2>Web Development</h2>
      <Row id="list-row">
        <ListGroup horizontal id="list-group">
          <ListGroup.Item id="group-item">
            <img
              src={Javascriptlogo}
              alt="javascript"
              className="javascriptlogo"
              id="skill-img"
            />
            <p className="skills-txt">FireBase</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img
              src={HTMLlogo}
              alt="html"
              className="htmlLogo"
              id="skill-img"
            />
            <p className="skills-txt">HTML</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={CSSlogo} alt="css" className="cssLogo" id="skill-img" />
            <p className="skills-txt">CSS</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img
              src={Reactlogo}
              alt="react"
              className="reactLogo"
              id="skill-img"
            />
            <p className="skills-txt">React</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <ListGroup horizontal id="list-group">
          <ListGroup.Item id="group-item">
            <img
              src={FirebaseLogo}
              alt="firebase"
              className="firebaseLogo"
              id="skill-img"
            />
            <p className="skills-txt">Firebase</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img
              src={HerokuLogo}
              alt="heroku"
              className="herokuLogo"
              id="skill-img"
            />
            <p className="skills-txt">Heroku</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img
              src={PostgresqlLogo}
              alt="postgresql"
              className="postgresqlLogo"
              id="skill-img"
            />
            <p className="skills-txt">PostgreSQL</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={SqlLogo} alt="sql" className="sqlLogo" />
            <p className="skills-txt">SQL</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>

      <Row>
        <h2>Coding</h2>
        <ListGroup horizontal id="list-group">
          <ListGroup.Item id="group-item">
            <img
              src={PythonLogo}
              alt="python"
              className="pythonLogo"
              id="skill-img"
            />
            <p className="skills-txt">Python</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={Javalogo} alt="java" className="javaLogo" />
            <p className="skills-txt">Java</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={CplusplusLogo} alt="c++" className="cplusplusLogo" />
            <p className="skills-txt">C++</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={GolangLogo} alt="golang" className="golangLogo" />
            <p className="skills-txt">GoLang</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <ListGroup horizontal id="list-group">
          <ListGroup.Item id="group-item">
            <img src={SwiftLogo} alt="swift" className="swiftLogo" />
            <p className="skills-txt">Swift</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={PrologLogo} alt="prolog" className="prologLogo" />
            <p className="skills-txt">Prolog</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img
              src={AndroidStudioLogo}
              alt="android studio"
              className="androidStudioLogo"
            />
            <p className="skills-txt">Android Studio</p>
          </ListGroup.Item>
          <ListGroup.Item id="group-item">
            <img src={GithubLogo} alt="github" className="githubLogo" />
            <p className="skills-txt">Github</p>
          </ListGroup.Item>
        </ListGroup>
      </Row>
    </Container>
    </Container>
  );
}

export default Skills;
