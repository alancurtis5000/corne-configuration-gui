import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./key-dialog-page-2.styles.scss";
import { BackButton } from "../back-button/back-button.component";

export const KeyDialogPage3 = (props) => {
  const { selectedValue, setPage } = props;
  const { index } = selectedValue;

  const back = () => {
    setPage(2);
  };

  return (
    <div className="key-dialog-page-3">
      <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
      <DialogContent dividers>
        <div className="content">
          <div>
            <BackButton onClick={back} />
          </div>
        </div>
      </DialogContent>
    </div>
  );
};

KeyDialogPage3.propTypes = {
  setPage: PropTypes.func.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
