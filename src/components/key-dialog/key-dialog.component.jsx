import * as React from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export const KeyDialog = (props) => {
  const { onClose, selectedValue, isOpen } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
};

KeyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
