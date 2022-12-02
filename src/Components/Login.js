import React, { useRef } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { Loginfunctions } from "../Functions/Loginfunctions";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const Login = () => {
    dispatch({ type: "success", payload:email.current.value});
  };
  return (
    <div className="container">
      <div className="main_login">
        <div className="row">
          <div className="col-lg-7 mt-2">
            <Card>
              <Card.Body>
                <Card.Title className="card_title center">Sign In</Card.Title>
                <Card.Text>Enrollment No.</Card.Text>
                <input type="number" ref={email} autoComplete="new-password" />
                <Card.Text>Password</Card.Text>
                <input type="password" />
                <br />
                <Button className="btn" onClick={Login}>
                  Login
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
