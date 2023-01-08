import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import { KeyDialogPage1 } from "./key-dialog-page-1.component";
import { KeyDialogPage2 } from "./key-dialog-page-2.component";

export const KeyDialog = (props) => {
  const { onClose, selectedValue, isOpen } = props;
  const [page, setPage] = useState(1);

  const handleClose = () => {
    onClose(selectedValue);
    setPage(1);
  };

  const pageToRender = () => {
    switch (page) {
      case 1:
        return (
          <KeyDialogPage1
            setPage={setPage}
            isOpen={isOpen}
            onClose={handleClose}
            selectedValue={selectedValue}
          />
        );
      case 2:
        return (
          <KeyDialogPage2 setPage={setPage} selectedValue={selectedValue} />
        );
      case 3:
        return <div>3</div>;

      default:
        return <div>def</div>;
    }
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} fullWidth>
      {pageToRender()}
    </Dialog>
  );
};

KeyDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  selectedValue: PropTypes.object.isRequired,
};
