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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import "./css/student.css";
import { addStudentDetail } from "../Redux/Actions/Adminaction";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  ADD_ADMISSION_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_FAIL,
  ADD_STUDENT_DETAIL_RESULT,
} from "../Redux/Constants/Adminconstant";
import { useNavigate } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";

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
  const [open, setOpen] = useState(false);

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
        <TableCell align="left">{row.studentname}</TableCell>
        <TableCell align="center">
          {row.section}-{row.grade}
        </TableCell>
        <TableCell align="center">
          {row.activestatus === true ? (
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
          )}
        </TableCell>
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
                    <TableCell>Joining Date</TableCell>
                    <TableCell>Enrollment No</TableCell>
                    <TableCell>Student</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Contact</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const grade = [1, 2, 3, 4, 5];
const section = ["A", "B", "C"];

const Student = () => {
  const { error, adminInfo, studentError, addStudent,getStudent } = useSelector(
    (state) => state.admin
  );
  console.log("getStudent",getStudent)
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
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
console.log("addStudent",addStudent)
  useEffect(()=>{
    console.log("Checking");
    if (addStudent == 201) {
      console.log("Rendering");
      setTimeout(() => {
        dispatch({
          type: ADD_STUDENT_DETAIL_RESULT,
          payload: [],
        });
      }, 5000);
      setOpen(false);
    }
  },[addStudent])


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
      <div className="container">
        <Button
          className="w-100"
          variant="contained"
          color="success"
          onClick={handleClickOpen}
        >
          Add Student
        </Button>
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
              </TableRow>
            </TableHead>
            <TableBody>
              {getStudent.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog
        fullScreen
        // fullWidth="xl"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ fontSize: "40px" }} className="center">
          <b>Add Student Detail</b>
        </DialogTitle>
        <DialogContent className="container">
          <Box
            noValidate
            component=""
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              textAlign: "left",
            }}
          >
            <DialogContentText
              style={{ fontSize: "25px", textAlign: "left" }}
              id="alert-dialog-slide-description"
            >
              <b>Personal Details</b>
            </DialogContentText>
          </Box>
          <Box
            noValidate
            component="form"
            className="container"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              m: "auto",
              // width: 1800,
            }}
          >
            <TextField
              className="m-4 col-lg-2"
              required
              id="outlined-required"
              label="First Name"
              onChange={(e) =>
                setStudentDetail({ ...studentDetail, fname: e.target.value })
              }
            />
            <TextField
              className="m-4 col-lg-2"
              required
              id="outlined-required"
              label="Last Name"
              onChange={(e) =>
                setStudentDetail({ ...studentDetail, lname: e.target.value })
              }
            />
            <TextField
              className="m-4 col-lg-2"
              required
              id="outlined-required"
              label="Email"
              onChange={(e) =>
                setStudentDetail({ ...studentDetail, email: e.target.value })
              }
            />
            <TextField
              className="m-4 col-lg-2"
              required
              id="outlined-required"
              label="Mobile"
              type="number"
              onChange={(e) =>
                setStudentDetail({ ...studentDetail, mobile: e.target.value })
              }
            />
            <FormControl sx={{ m: 1, minWidth: 100 }} className="m-4">
              <InputLabel id="demo-simple-select-autowidth-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={studentDetail.gender}
                // onChange={handleChange}
                autoWidth
                label="Age"
                onChange={(e) =>
                  setStudentDetail({ ...studentDetail, gender: e.target.value })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="Date of Birth"
                type="date"
                className="m-4"
                defaultValue={currentDate}
                onChange={(e) =>
                  setStudentDetail({ ...studentDetail, dob: e.target.value })
                }
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Box>
          <Box
            noValidate
            component=""
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              textAlign: "left",
            }}
          >
            <DialogContentText
              style={{ fontSize: "25px", textAlign: "left" }}
              id="alert-dialog-slide-description"
            >
              <b>School Details</b>
            </DialogContentText>
          </Box>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 150 }} className="m-4">
              <InputLabel id="demo-simple-select-autowidth-label">
                Grade
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={studentDetail.grade}
                onChange={(e) =>
                  setStudentDetail({ ...studentDetail, grade: e.target.value })
                }
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {grade.map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 150 }} className="m-4">
              <InputLabel id="demo-simple-select-autowidth-label">
                Section
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={studentDetail.section}
                onChange={(e) =>
                  setStudentDetail({
                    ...studentDetail,
                    section: e.target.value,
                  })
                }
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {section.map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <Stack component="form" noValidate spacing={3}>
              <TextField
                id="date"
                label="Date of Joining"
                type="date"
                className="m-4"
                defaultValue={currentDate}
                onChange={(e) =>
                  setStudentDetail({
                    ...studentDetail,
                    jon_date: e.target.value,
                  })
                }
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={sendStudentData}>
            save
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Student;
