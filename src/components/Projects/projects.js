import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Barbershop from "../../assets/images/barbershop-page.JPG";
import HTMLlogo from "../../assets/images/html-logo.png";
import CSSlogo from "../../assets/images/css-logo.png";
import Javascriptlogo from "../../assets/images/js-logo.png";
import Javalogo from "../../assets/images/java-logo.png";
import TaxiCluster from "../../assets/images/taxi-clustering.png";
import AndroidStudioLogo from "../../assets/images/androidstudio-logo.png";
import CourseManager from "../../assets/images/coursemanagerapp.JPG";
import Herokulogo from "../../assets/images/heroku-logo.png";
import Postgresql from "../../assets/images/postgresql-logo.png";
import DatabasePic from "../../assets/images/databasecapture.JPG";

import "../../css/Projects.css";

function projects() {
  return (
    <Container fluid id="card-container">
      <p className="some-info-title" id="webpage-content-title"> --- TAKE A LOOK AT MY </p>
      <h1 className="about-me-title" id="webpage-content-title">Projects</h1>
      <Card id="card">
        <Card.Img variant="top" src={Barbershop} />
        <Card.Body>
          <Card.Title>Barbershop Website</Card.Title>
          <Card.Text>
            This website simulates a barbershop where you can book an
            appointment. The purpose of the website was to strengthen my skills
            in HTML.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <img src={HTMLlogo} alt="HTML logo" className="htmllogo" />
            <b>HTML</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={CSSlogo} alt="CSS logo" className="csslogo" />
            <b>CSS</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img
              src={Javascriptlogo}
              alt="Javascript logo"
              className="jslogo"
            />
            <b>Javascript</b>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/CameronMoreira/barbershop"
            id="button-50"
          >
            <p id="card-btn-txt">Repo</p>
          </Card.Link>
          <Card.Link
            href="https://cameronmoreira.github.io/barbershop/"
            id="button-50"
          >
            <p id="card-btn-txt">Live</p>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card id="card2">
        <Card.Img variant="top" src={TaxiCluster} />
        <Card.Body>
          <Card.Title>DBSCAN Clustering Algorithm</Card.Title>
          <Card.Text>
            This assignment implements a DBSCAN data clustering algorithm for a
            NYC taxi fleet.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <img src={Javalogo} alt="Java logo" className="javalogo" />
            <b>Java</b>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/CameronMoreira/CSI2120_a1"
            id="button-50"
          >
            <p id="card-btn-txt">Repo</p>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card id="card3">
        <Card.Img variant="top" src={CourseManager} />
        <Card.Body>
          <Card.Title>Student Course Manager App</Card.Title>
          <Card.Text>
            An application that allows for the managing of courses for students,
            instructors, and adminsistrators. This was a team project.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <img src={Javalogo} alt="Java logo" className="javalogo" />
            <b>Java</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img
              src={AndroidStudioLogo}
              alt="Android Studio logo"
              className="androidstudioLogo"
            />
            <b>Android Studio</b>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/SEG-Group-3/CourseManager"
            id="button-50"
          >
            <p id="card-btn-txt">Repo</p>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card id="card4">
        <Card.Img variant="top" src={DatabasePic} />
        <Card.Body>
          <Card.Title>Dentistry Database</Card.Title>
          <Card.Text>
            This website simulates a dentistry database where dentists can
            manage patients and their appointments
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <img
              src={Postgresql}
              alt="PostgreSQL logo"
              className="postgresql"
            />
            <b>PostgreSQL</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={Herokulogo} alt="Heroku logo" className="herokulogo" />
            <b>Heroku</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={Javalogo} alt="Java logo" className="javalogo" />
            <b>Java</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={HTMLlogo} alt="HTML logo" className="htmllogo" />
            <b>HTML</b>
          </ListGroup.Item>
          <ListGroup.Item>
            <img src={CSSlogo} alt="CSS logo" className="csslogo" />
            <b>CSS</b>
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link
            href="https://github.com/AlexAWyatt/csi2132"
            id="button-50"
          >
            <p id="card-btn-txt">Repo</p>
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default projects;
