import React from "react";
import "../Css/Header.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const login = () => {
    nav("/login");
  };
  return (
    <div>
      <Navbar expand="lg" className="bg">
        <Container fluid>
          <Navbar.Brand className="nav_brand_element" href="#">
            School Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav_element" href="#action1">
                Home
              </Nav.Link>
              <Nav.Link className="nav_element" href="#action2">
                Students
              </Nav.Link>
              <Nav.Link className="nav_element" href="#action3">
                Faculties
              </Nav.Link>
              <Nav.Link className="nav_element" href="#action4">
                Admission
              </Nav.Link>
              <Nav.Link className="nav_element" href="#action5">
                Event & Holidays
              </Nav.Link>
              <Nav.Link className="nav_element" href="#action6">
                Notice Board
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="head_login_btn" onClick={login}>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
