import React from "react";
import "../Css/Header.css";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logoutAction } from "../Redux/Actions/Adminaction";

const Header = () => {
  const { loading, error, adminInfo } = useSelector((state) => state.admin);
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{

  },[adminInfo])
  return (
    <div className="header">
      <Navbar expand="lg" className="bg">
        <Container fluid>
          <Navbar.Brand
            className="nav_brand_element"
            onClick={() => {
              nav("/");
            }}
          >
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
              {adminInfo.isAuthenticated ?
              <Nav.Link
              className="head_login_btn"
              onClick={() => {
                dispatch(logoutAction(adminInfo))
              }}
              >
                Logout
              </Nav.Link>
              :
              <Nav.Link
              className="head_login_btn"
              onClick={() => {
                nav("/login");
              }}
              >
                Login
              </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
