import React, { useState } from "react";
import {
  Button,
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";

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
        <TableCell align="left">{row.enrollmentno}</TableCell>
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
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
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
const Student = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [joinDate_value, setJoinDate_value] = useState();
  const [dob_value, setDob_value] = useState();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handle_Join_Date_Change = (newValue) => {
    setJoinDate_value(newValue);
  };

  const handle_Dob_Value_Change = (newValue) => {
    setDob_value(newValue);
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
              {rows.map((row) => (
                <Row key={row.name} row={row} />
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
        <DialogTitle className="center">Add Student Detail</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              width: "fit-content",
            }}
          >
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="First Name"
            />
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="Last Name"
            />
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="Class"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack className="m-4" spacing={3}>
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="MM/DD/YYYY"
                  value={dob_value}
                  onChange={handle_Dob_Value_Change}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack className="m-4" spacing={3}>
                <DesktopDatePicker
                  label="Join Date"
                  inputFormat="MM/DD/YYYY"
                  value={joinDate_value}
                  onChange={handle_Join_Date_Change}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "row",
              m: "auto",
              width: "fit-content",
            }}
          >
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="First Name"
            />
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="Last Name"
            />
            <TextField
              className="m-4"
              required
              id="outlined-required"
              label="Class"
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack className="m-4" spacing={3}>
                <DesktopDatePicker
                  label="Date of Birth"
                  inputFormat="MM/DD/YYYY"
                  value={dob_value}
                  onChange={handle_Dob_Value_Change}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack className="m-4" spacing={3}>
                <DesktopDatePicker
                  label="Join Date"
                  inputFormat="MM/DD/YYYY"
                  value={joinDate_value}
                  onChange={handle_Join_Date_Change}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleChange}
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
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
