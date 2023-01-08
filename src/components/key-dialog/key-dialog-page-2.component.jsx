import React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

export const KeyDialogPage2 = (props) => {
  const { selectedValue, setPage } = props;
  const { index } = selectedValue;

  const backToHome = () => {
    setPage(1);
  };

  const currentValue = {
    backgroundColor: "pink",
    height: "100px",
    width: "100px",
  };
  return (
    <>
      <DialogTitle>Edit Tapped Key {index + 1}</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <Button onClick={backToHome}> Change</Button>
            <Button onClick={backToHome}> Back</Button>
          </div>
          <div style={currentValue}></div>

          <DialogContentText>Add Modifiers</DialogContentText>
          <DialogContentText>Description</DialogContentText>
        </div>
      </DialogContent>
    </>
  );
};

KeyDialogPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
