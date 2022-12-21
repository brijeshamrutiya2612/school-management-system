import React, { useState } from "react";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Button } from "react-bootstrap";

const Dialogcomponent = ({open}) => {
    console.log("Dialogcomponent",open)
  const [detailOpen, setDetailOpen] = useState(true);
  const handleClose = () => {
    setDetailOpen(false);
  };
  return (
    <div>
      <Dialog
        fullScreen
        // fullWidth="xl"
        open={detailOpen}
        onClose={handleClose}
      >
        <DialogTitle style={{ fontSize: "40px" }} className="center">
          <b>Student Detail</b>
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
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </div>
  );
};

export default Dialogcomponent;
