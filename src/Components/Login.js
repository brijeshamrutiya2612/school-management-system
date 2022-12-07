import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import { loginAction } from "../Redux/Actions/Adminaction";

const Login = () => {
  const { loading, adminInfo } = useSelector(
    (state) => state.admin
  );
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/admin";


  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (adminInfo.isAuthenticated) {
      nav(redirect);
    }
  }, [nav, adminInfo, redirect]);

  const Login = () => {
    dispatch(loginAction(loginData));
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
                <input
                  type="text"
                  autoComplete="off"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
                <Card.Text>Password</Card.Text>
                <input
                  type="password"
                  autoComplete="off"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
                <br />
                <Button className="btn" onClick={Login}>
                  {!loading ? "Login" : "Loading..."}
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
