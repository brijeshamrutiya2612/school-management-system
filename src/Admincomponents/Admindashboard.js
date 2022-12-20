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

const Admindashboard = () => {
  const { adminInfo } = useSelector((state) => state.admin);
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>
        {adminInfo.role.charAt(0).toUpperCase() + adminInfo.role.slice(1)}
      </h1>
      <Card
        sx={{ maxWidth: 300 }}
        style={{
          boxShadow: "2px 3px 22px 0px",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        <CardMedia
          style={{
            width: "190px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "8.5em",
          }}
          component="img"
          height="80"
          image={dash_student}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ textAlign: "center" }}
          >
            <b>Students</b>
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div>
  );
};

export default Admindashboard;
