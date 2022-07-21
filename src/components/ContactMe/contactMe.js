import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import ContactMe from "../../assets/images/contact-me-img.png";
import Modal from 'react-bootstrap/Modal';



import "react-calendar/dist/Calendar.css";
import "../../css/contactMe.css";

function FormPage() {
  
  const [timeValue, timeOnChange] = useState("10:00");
  const [dateValue, dateOnChange] = useState(new Date());

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");



  return (

    <Container fluid id="container-background">
    <p className="some-info-title" id="webpage-content-title"> --- SAY HELLO </p>
      <h1 className="about-me-title" id="webpage-content-title">Contact </h1>
    <Container id="container-contact-form">
      <Row>
        <Col>
          <div className="contact-image">
            <img src={ContactMe} className="contact-img" alt="contact-img" />
          </div>
        </Col>
        <Col xl={2}>
          <p className="email">cam@gmail.com</p>
          <p className="phone-number">905-123-4567</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <h3>Contact Me</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name: </Form.Label>
              <input className="name-imput" type="text" id="clientName" placeholder="Enter Name" onChange={e => setName(e.target.value)} />
              <Form.Text className="text-muted">
                Would Love to know it
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email: </Form.Label>
              <input className="email-input" type="email" id="clientEmail" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              Sign up for my news letter
            <input className="checkbox-imput" type="checkbox" id="checkbox-id" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWritting">
            <input className="phone-input" type="text" id="clientEmail" placeholder="Enter Phone" onChange={e => setPhone(e.target.value)} />
              <Form.Text className="text-muted">What you need done</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicWritting">
            <input className="message-input" type="text" id="clientEmail" placeholder="Enter message" onChange={e => setMessage(e.target.value)} />

              <Form.Text className="text-muted">What you need done</Form.Text>
            </Form.Group>
            <Container id="date-time-container">
              <Row>
                <Col>
                  <p className="enter-time"> Enter Date: </p>
                  <Calendar onChange={dateOnChange} value={dateValue} id="date"/>
                </Col>
                <Col id="time-col">
                  <p className="enter-time">Enter Time: </p>
                  <TimePicker onChange={timeOnChange} value={timeValue} id="time"/>
                </Col>
              </Row>
            </Container>
            <button onClick={handleShow} className="modal-button">
        Launch demo modal
      </button>
            </div>
        </Col>
      </Row>
    </Container>
    <Modal show={show} onHide={handleClose} id="model-container">
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Notice:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <b> Cameron has been emailed with the information below: </b> 
            <br />
            <br />
            Name: {name}
            <br />
            <br />
            Email: {email}
            <br />
            <br />
            PhoneNumber: {phone}
            <br />
            <br />
            Message Content: {message}
  
           
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
    
  );
}

export default FormPage;
