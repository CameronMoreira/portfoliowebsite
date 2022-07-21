import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavBar from "./components/NavBar/navBar";
import AboutMe from "./components/AboutMe/aboutMe";
import HomePage from "./components/Home/Home";
import Project from "./components/Projects/projects";
import ContactMe from "./components/ContactMe/contactMe";
import Skills from "./components/Skills/skills";
import ContactMe2 from "./components/ContactMe2/contactMe2";
import "./css/App.css";

function App() {
  return (
    <Container fluid id="container-main">
      <Row>
        <Col id="nav-bar-col" xl={2}>
          {/* NavBar */}
          <NavBar />
        </Col>

        <Col id="page-view-col">
          {/* Page View */}
          <HomePage />

          <AboutMe />

          <Skills />

          <Project />

          <ContactMe />

          {/* <ContactMe2 /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
