import React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { ModifierList } from "../modifier-list/modifier-list.component";
import "./key-dialog-page-2.styles.scss";

export const KeyDialogPage2 = (props) => {
  const { selectedValue, setPage } = props;
  const { index, label } = selectedValue;

  const backToHome = () => {
    setPage(1);
  };

  const currentValue = {};

  return (
    <div className="key-dialog-page-2">
      <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
      <DialogContent dividers>
        <div className="content">
          <div>
            <Button onClick={backToHome}> Change</Button>
            <Button onClick={backToHome}> Back</Button>
          </div>
          <div className="current-value" style={currentValue}>
            {label}
          </div>

          <DialogContentText>Add Modifiers</DialogContentText>
          <ModifierList />
          <DialogContentText>Description</DialogContentText>
        </div>
      </DialogContent>
    </div>
  );
};

KeyDialogPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
