import React, { useEffect, useState } from "react";
import {
  Button,
  DialogContentText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import "./css/student.css";
import {
  addStudentDetail,
  getStudentDetail,
  getStudentDetailById,
} from "../Redux/Actions/Adminaction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  ADD_ADMISSION_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_RESULT,
} from "../Redux/Constants/Adminconstant";
import { useNavigate } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";
import Dialogcomponent from "./UI/Dialogcomponent.js";

function createData(
  rollno,
  enrollmentno,
  studentname,
  section,
  grade,
  activestatus
) {
  return {
    rollno,
    enrollmentno,
    studentname,
    section,
    grade,
    activestatus,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}
Row.propTypes = {
  row: PropTypes.shape({
    rollno: PropTypes.number.isRequired,
    enrollmentno: PropTypes.number.isRequired,
    studentname: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    grade: PropTypes.number.isRequired,
    activestatus: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const rows = [
  createData(1, 110101, "Hello World", "A", 1, true),
  createData(1, 110101, "Hello World", "A", 2, false),
  createData(1, 110101, "Hello World", "A", 3, true),
];
function Row(props) {
  const { row } = props;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    console.log("detailOpen", detailOpen);
  }, [detailOpen]);

  const checkStudentDetail = (id) => {
    // dispatch(getStudentDetailById(id))
    setDetailOpen(true);
    return <Dialogcomponent open={true} />
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.rollno}
        </TableCell>
        <TableCell align="left">{row.e_no}</TableCell>
        <TableCell align="left">
          {row.fname} {row.lname}
        </TableCell>
        <TableCell align="center">
          {row.section}-{row.grade}
        </TableCell>
        <TableCell align="center">
          {row.attendance_report.map((p) => {
            return p.availability === true ? (
              <span
                style={{
                  backgroundColor: "green",
                  padding: "1em",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Present
              </span>
            ) : (
              <span
                style={{
                  backgroundColor: "tomato",
                  padding: "1em",
                  color: "white",
                  borderRadius: "20px",
                }}
              >
                Absent
              </span>
            );
          })}
        </TableCell>
        <TableCell align="center">
          <Button variant="contained" onClick={() => checkStudentDetail(row.id)}>
            Detail
          </Button>
        </TableCell>
        {/* <Dialogcomponent open={true} /> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Detail
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Joining Date</b>
                    </TableCell>
                    <TableCell>
                      <b>Enrollment No</b>
                    </TableCell>
                    <TableCell>
                      <b>Student</b>
                    </TableCell>
                    <TableCell>
                      <b>Address</b>
                    </TableCell>
                    <TableCell>
                      <b>Contact</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.jon_date}
                    </TableCell>
                    <TableCell>{row.e_no}</TableCell>
                    <TableCell>
                      {row.fname} {row.lname}
                    </TableCell>
                    <TableCell>Rajkot</TableCell>
                    <TableCell>{row.mobile}</TableCell>
                    {/* <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <Dialogcomponent open={detailOpen} />
    </React.Fragment>
  );
}

const grade = [1, 2, 3, 4, 5];
const section = ["A", "B", "C"];

const Student = () => {
  const { error, adminInfo, studentError, addStudent, getStudent } =
    useSelector((state) => state.admin);
  console.log("getStudent", getStudent);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getUTCMonth() + 1;
  const date = dateNow.getUTCDate();
  const currentDate = `${year}-${month}-${date}`;

  const [studentDetail, setStudentDetail] = useState({
    fname: "",
    lname: "",
    rollno: "",
    e_no: `1101${year}`,
    password: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    grade: "",
    section: "",
    jon_date: "",
    attendance_report: [{}],
  });
  console.log("addStudent", addStudent);
  useEffect(() => {
    dispatch(getStudentDetail());
  }, [addStudent]);

  const sendStudentData = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (studentDetail.fname === "") {
      toast.error("Firstname Is Required");
    } else if (studentDetail.lname === "") {
      toast.error("Lastname Is Required");
    } else if (studentDetail.email === "") {
      toast.error("Email Is Required");
    } else if (!studentDetail.email.match(validRegex)) {
      toast.error("Invalid Email");
    } else if (studentDetail.email.length < 3) {
      toast.error("Invalid Email");
    } else if (studentDetail.mobile === "") {
      toast.error("Mobile Is Required");
    } else if (studentDetail.gender === "") {
      toast.error("Gender Is Required");
    } else if (studentDetail.dob === "") {
      toast.error("DOB Is Required");
    } else if (studentDetail.grade === "") {
      toast.error("Grade Is Required");
    } else if (studentDetail.section === "") {
      toast.error("Section Is Required");
    } else if (studentDetail.jon_date === "") {
      toast.error("Join Date Is Required");
    } else {
      dispatch(addStudentDetail(studentDetail));
    }

    // setTimeout(() => {
    //   if (addStudent == 201) {
    //     setTimeout(() => {
    //       setOpen(false);
    //     }, 5000);
    //   }
    // }, 5000);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <>
      <div className="container">
        <h1 className="center">Manage of Student</h1>
      </div>
      <div className="container mt-5">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Roll No.</TableCell>
                <TableCell>Enrollment No.</TableCell>
                <TableCell>Student</TableCell>
                <TableCell align="center">Section-Grade</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getStudent.map((row) => (
                <>
                  <Row key={row.id} row={row} />
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Student;
