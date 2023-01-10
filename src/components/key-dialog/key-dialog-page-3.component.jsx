import React from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./key-dialog-page-3.styles.scss";
import { BackButton } from "../back-button/back-button.component";
import { keys } from "../../constants/keys";
import { Button } from "@mui/material";

export const KeyDialogPage3 = (props) => {
  const { selectedValue, setPage } = props;
  const { index } = selectedValue;

  const back = () => {
    setPage(2);
  };

  const options = () => {
    const options = [];
    for (let i = 0; i < 20; i++) {
      options.push(keys[i]);
    }
    return (
      <>
        {options.map((option) => {
          return (
            <Button variant="outlined" key={option.id}>
              {option.label}
            </Button>
          );
        })}
      </>
    );
  };

  return (
    <div className="key-dialog-page-3">
      <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
      <DialogContent dividers>
        <div className="content">
          <div>
            <BackButton onClick={back} />
          </div>
          <div className="key-options">{options()}</div>
        </div>
      </DialogContent>
    </div>
  );
};

KeyDialogPage3.propTypes = {
  setPage: PropTypes.func.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
