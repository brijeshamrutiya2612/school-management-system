import { TextField } from "@mui/material";
import React from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

const Demo = () => {
  return (
    <div className="container">
      <Row className="g-5">
        <Col sm>
          <FloatingLabel controlId="floatingSelectGrid" label="Projects">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">Shine Project Demo 1</option>
              <option value="1">Shine Project Demo 2</option>
              <option value="1">Shine Project Demo 3</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel
            style={{ flexWrap: "wrap" }}
            controlId="floatingInputGrid"
            label="Description"
          >
            <Form.Control
              style={{ flexWrap: "wrap" }}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Col>
        <Col lg>
          <TextField type="time" label="Time" step="0" value="13:25" />
        </Col>
        <Col lg>
          <Button variant="primary">+ Add</Button>
        </Col>
        {/* <Col lg>
      <Button variant='danger'>Remove</Button>
      </Col> */}
      </Row>
      <Row>
        <Col sm></Col>
        <Col md>
          <FloatingLabel
            style={{ flexWrap: "wrap" }}
            controlId="floatingInputGrid"
            label="Description"
          >
            <Form.Control
              style={{ flexWrap: "wrap" }}
              type="email"
              placeholder="name@example.com"
            />
          </FloatingLabel>
        </Col>
        <Col lg>
          <TextField type="time" label="Time" min="1:30" max="2:30"/>
        </Col>
      </Row>
    </div>
  );
};

export default Demo;
