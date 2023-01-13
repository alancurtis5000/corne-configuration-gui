import React, { useContext } from "react";
import PropTypes from "prop-types";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import { ModifierList } from "../modifier-list/modifier-list.component";
import "./key-dialog-page-2.styles.scss";
import { BackButton } from "../back-button/back-button.component";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const KeyDialogPage2 = (props) => {
  const { setPage } = props;
  const { selectedBindingIndex, selectedLayerIndex, layers } =
    useContext(KeymapContext);
  const { index, tapped } =
    layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const backToHome = () => {
    setPage(1);
  };

  const goToChangePage = () => {
    setPage(3);
  };

  return (
    <div className="key-dialog-page-2">
      <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
      <DialogContent dividers>
        <div className="content">
          <div>
            <BackButton onClick={backToHome} />
            <Button onClick={goToChangePage}> Change</Button>
          </div>
          <div className="current-value">{tapped.label}</div>
          {tapped.modifiable && (
            <>
              <DialogContentText>Add Modifiers</DialogContentText>
              <ModifierList />
            </>
          )}
          {tapped.key_category_id === 65 && (
            <>
              <DialogContentText>Layer Select</DialogContentText>
              <div>layer select</div>
            </>
          )}
          <DialogContentText>Description</DialogContentText>
        </div>
      </DialogContent>
    </div>
  );
};

KeyDialogPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
};
