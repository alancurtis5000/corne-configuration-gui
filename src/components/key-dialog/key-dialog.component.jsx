import React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

export const KeyDialog = (props) => {
  const { onClose, selectedValue, isOpen } = props;
  const { index, label, tapped, held } = selectedValue;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>
        Key {index + 1} Label {label}
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <DialogContentText>When</DialogContentText>{" "}
          <Button onClick={handleClose}>Tapped</Button>
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
          <Button onClick={handleClose}>Held</Button>
          <DialogContentText>:</DialogContentText> {held.label}
          <Button onClick={handleClose}>Clear</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

KeyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
