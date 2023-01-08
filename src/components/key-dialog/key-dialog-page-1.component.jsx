import React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

export const KeyDialogPage1 = (props) => {
  const { onClose, selectedValue, setPage } = props;
  const { index, label, tapped, held } = selectedValue;

  const handleClose = () => {
    onClose(selectedValue);
    setPage(1);
  };

  return (
    <>
      <DialogTitle>
        <div> Key: {index + 1}</div>
        <div>Label: {label}</div>
      </DialogTitle>
      <DialogContent dividers>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DialogContentText>When</DialogContentText>{" "}
          <Button onClick={() => setPage(2)}>Tapped</Button>
          <DialogContentText>:</DialogContentText> {tapped.label}
          <Button onClick={handleClose}>Clear</Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DialogContentText>When</DialogContentText>{" "}
          <Button onClick={() => setPage(3)}>Held</Button>
          <DialogContentText>:</DialogContentText> {held.label}
          <Button onClick={handleClose}>Clear</Button>
        </div>
      </DialogContent>
    </>
  );
};

KeyDialogPage1.propTypes = {
  onClose: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
