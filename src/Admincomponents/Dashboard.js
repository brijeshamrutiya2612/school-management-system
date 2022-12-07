import React from "react";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FiUsers } from "react-icons/fi";
import dash_student from "./Images/dash_student.png";

const Dashboard = () => {
  const { adminInfo } = useSelector((state) => state.admin);
  const cardDetail = [
    {
      title: "Student",
      img: dash_student,
    },
    {
      title: "Faculties",
      img: dash_student,
    },
    {
      title: "Events & Holidays",
      img: dash_student,
    },
    {
      title: "Sports",
      img: dash_student,
    },
    {
      title: "Admission",
      img: dash_student,
    },
  ];
  return (
    <>
      <div className="d-flex">
        <h2 className="mb-4">
          Dashboard
          {/* {adminInfo.role.charAt(0).toUpperCase() + adminInfo.role.slice(1)} */}
        </h2>
      </div>
      <div className="container d-flex" style={{ flexWrap: "wrap" }}>
        {cardDetail.map((item, i) => {
          return (
            <div className="d-flex col-lg-3 mt-5" style={{ flexWrap: "wrap",width:"100%" }}>
              <Card
                sx={{ mxWidth: 300 }}
                style={{
                  width:"100%",
                  flexWrap: "wrap",
                  boxShadow: "2px 3px 22px 0px",
                  borderRadius: "20px 20px 20px 20px",
                }}
              >
                <CardMedia
                  style={{
                    width: "100px",
                    display: "flex",
                    justifyContent: "center",
                    marginLeft: "3.2em",
                    marginTop: "1em",
                  }}
                  component="img"
                  height="100"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ textAlign: "center" }}
                  >
                    <b>{item.title}</b>
                  </Typography>
                </CardContent>
                {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
