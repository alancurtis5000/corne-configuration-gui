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
import { LayerSelect } from "../layer-select/layer-select.component";
import { HELD, TAPPED } from "../../constants/button-modes";

export const KeyDialogPage2 = (props) => {
  const { setPage } = props;
  const { selectedBindingIndex, selectedLayerIndex, layers, buttonMode } =
    useContext(KeymapContext);
  const { index, tapped, held } =
    layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const backToHome = () => {
    setPage(1);
  };

  const goToChangePage = () => {
    setPage(3);
  };

  if (buttonMode === TAPPED) {
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
                <LayerSelect />
              </>
            )}
            <DialogContentText>Description</DialogContentText>
          </div>
        </DialogContent>
      </div>
    );
  } else if (buttonMode === HELD) {
    return (
      <div className="key-dialog-page-2">
        <DialogTitle>Key: {index + 1} (Edit Tapped) </DialogTitle>
        <DialogContent dividers>
          <div className="content">
            <div>
              <BackButton onClick={backToHome} />
              <Button onClick={goToChangePage}> Change</Button>
            </div>
            <div className="current-value">{held.label}</div>
            {held.modifiable && (
              <>
                <DialogContentText>Add Modifiers</DialogContentText>
                <ModifierList />
              </>
            )}
            {held.key_category_id === 65 && (
              <>
                <DialogContentText>Layer Select</DialogContentText>
                <LayerSelect />
              </>
            )}
            <DialogContentText>Description</DialogContentText>
          </div>
        </DialogContent>
      </div>
    );
  }
};

KeyDialogPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
};
