import React, { useContext } from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { HELD, TAPPED } from "../../constants/button-modes";

export const KeyDialogPage1 = (props) => {
  const { onClose, setPage } = props;
  const { selectedBindingIndex, selectedLayerIndex, layers, setButtonMode } =
    useContext(KeymapContext);
  if (!layers[selectedLayerIndex].bindings[selectedBindingIndex]) return;
  const { index, label, tapped, held } =
    layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const handleClose = () => {
    onClose();
    setPage(1);
    setButtonMode(null);
  };

  const handleTapped = () => {
    setButtonMode(TAPPED);
    setPage(2);
  };
  const handleHold = () => {
    setButtonMode(HELD);
    setPage(2);
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
          <Button onClick={handleTapped}>Tapped</Button>
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
          <Button onClick={handleHold}>Held</Button>
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
};
