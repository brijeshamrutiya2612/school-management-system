import React from "react";
import "../Css/Footer.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col-lg-15 footer_brand_element text-center">
          School Management System
        </div>
      </div>
      <div className="container d-flex">
        <div className="col-lg-3 mt-4 m-4">
          <h2>Contact Us</h2>
          <div className="col-lg-5 mt-2 m-1">
            +91 999 999 9999
            <br />
            example@example.com
          </div>
        </div>
        <div className="col-lg-3 mt-4 m-4">
          <h2>About Us</h2>
          <div className="col-lg-5 mt-2 m-1">About Us</div>
        </div>
        <div className="col-lg-3 mt-4 m-4">
          <h2>Social Media</h2>
          <div className="col-lg-5 mt-2 m-1">Facebook</div>
          <div className="col-lg-5 mt-2 m-1">twitter</div>
          <div className="col-lg-5 mt-2 m-1">Instagram</div>
        </div>
        <div className="col-lg-3 mt-4 m-4"></div>
      </div>
      <div className="container">
        <div className="col-lg-15 footer_copy_element text-center">
          Copyright &copy; 2022 A.Brij Infosoft PVT. LTD.
        </div>
      </div>
    </div>
  );
};

export default Footer;
