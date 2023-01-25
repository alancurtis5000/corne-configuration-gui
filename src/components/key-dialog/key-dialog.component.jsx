import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import { KeyDialogPage1 } from "./key-dialog-page-1.component";
import { KeyDialogPage2 } from "./key-dialog-page-2.component";
import { KeyDialogPage3 } from "./key-dialog-page-3.component";
import { LayoutContext } from "../../providers/layout/layout.provider";

export const KeyDialog = (props) => {
  const { onClose, isOpen } = props;
  const [page, setPage] = useState(1);

  const { setSelectedBindingActionKey } = useContext(LayoutContext);
  const handleClose = () => {
    onClose();
    setSelectedBindingActionKey("");
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
          />
        );
      case 2:
        return <KeyDialogPage2 setPage={setPage} />;
      case 3:
        return <KeyDialogPage3 setPage={setPage} />;
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
};
