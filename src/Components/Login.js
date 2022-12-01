import React from "react";
import { Button, Card } from "react-bootstrap";
import "../Css/Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="main_login">
        <div className="row">
          <div className="col-lg-7 mt-2">
            <Card className="card">
              <Card.Body>
                <Card.Title className="card_title center">Sign In</Card.Title>
                <Card.Text>Enrollment No.</Card.Text>
                <input type="number" autoComplete="new-password"/>
                <Card.Text>Password</Card.Text>
                <input type="password" /><br/>  
                <Button className="btn">Login</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
