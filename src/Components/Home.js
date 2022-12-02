import React from "react";
import "../Css/Home.css";
import "../App.css";
import cap from "./Images/49-492081_graduation-cap-png-transparent-images-clip-art-grad.png";
import { Button, Card } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div className="home_head">
        <div className="container">
          <div className="row">
            <div className="col-lg-15 d-flex">
              <h1 className="home_head_h1">School Management System</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-15 d-flex center">
            <a href="#overview" className="btn">Explore More</a>
            </div>
          </div>
        </div>
      </div>
      <div id="overview">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mt-5 center">
            <img className="center m-5" src={cap} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mt-2 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">
                  Student Information
                </Card.Title>
                <Card.Text>
                  School's All Student Information and their Details.
                </Card.Text>
                <Card.Link className="btn">Get Information</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mt-2 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">
                  Faculties Information
                </Card.Title>
                <Card.Text>School's All Faculties Information.</Card.Text>
                <Card.Link className="btn">Get Information</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-7 mt-5 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">Event & Holidays</Card.Title>
                <Card.Text>
                  A Cultural Event and Which days on holdays in schools
                </Card.Text>
                <Card.Link className="btn">Show Event</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-5 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">
                  Sports Activities
                </Card.Title>
                <Card.Text>
                  We do sports activities for physical fitness
                </Card.Text>
                <Card.Link className="btn">Show Activities</Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-7 mt-5 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">Exams</Card.Title>
                <Card.Text>Exam Scheduals</Card.Text>
                <Card.Link className="btn">Get Exam Scheduals</Card.Link>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4 mt-5 center">
            <Card className="home_card">
              <Card.Body>
                <Card.Title className="home_card_title">Admission</Card.Title>
                <Card.Text>
                  Get admission in our school to make your child smart and
                  intelligent
                </Card.Text>
                <Card.Link className="btn">Get Admission</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="home_second_head mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 d-flex">
              <h2 className="home_head_h2">Brief Tour of School</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
