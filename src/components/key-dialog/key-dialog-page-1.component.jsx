import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import {
  Button,
  TextField,
  DialogContentText,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { HELD, TAPPED } from "../../constants/button-modes";
import { isEmpty } from "../../utilities/data-parsing";

export const KeyDialogPage1 = (props) => {
  const { onClose, setPage } = props;
  const [isEdit, setIsEdit] = useState(false);

  const {
    selectedBindingIndex,
    selectedLayerIndex,
    layers,
    changeBindingLabel,
    setButtonMode,
    changeBindingTapped,
    changeBindingHeld,
  } = useContext(KeymapContext);
  const [localLabel, setLocalLabel] = useState(
    layers[selectedLayerIndex]?.bindings[selectedBindingIndex]?.label || null
  );
  if (!layers[selectedLayerIndex].bindings[selectedBindingIndex]) return;

  const { index, tapped, held } =
    layers[selectedLayerIndex]?.bindings[selectedBindingIndex];

  const handleClose = () => {
    onClose();
    setPage(1);
    setButtonMode(null);
  };

  const handleTapped = () => {
    setButtonMode(TAPPED);
    if (isEmpty(tapped)) {
      setPage(3);
    } else {
      setPage(2);
    }
  };
  const handleHold = () => {
    setButtonMode(HELD);
    if (isEmpty(held)) {
      setPage(3);
    } else {
      setPage(2);
    }
  };

  const handleClearTapped = () => {
    changeBindingTapped({ newBindingTappedValue: {} });
  };
  const handleClearHeld = () => {
    changeBindingHeld({ newBindingTappedValue: {} });
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setLocalLabel(localLabel);
  };

  const handleSave = () => {
    const input = localLabel;
    setIsEdit(false);
    changeBindingLabel({ input });
  };

  const handleOnChange = (e) => {
    const input = e.target.value;
    setLocalLabel(input);
  };

  return (
    <>
      <DialogTitle>
        <div> Key: {index + 1}</div>
        <TextField
          id="layer-label"
          value={localLabel}
          label="Layer Name"
          variant="standard"
          onChange={handleOnChange}
          disabled={!isEdit}
        />
        {isEdit ? (
          <>
            <IconButton color="primary" onClick={handleSave}>
              <SaveIcon />
            </IconButton>
            <IconButton color="warning" onClick={handleCancel}>
              <CancelIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              className="edit-button"
              color="default"
              onClick={handleEdit}
            >
              <EditIcon />
            </IconButton>
          </>
        )}
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
          <Button onClick={handleClearTapped}>Clear</Button>
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
          <Button onClick={handleClearHeld}>Clear</Button>
        </div>
      </DialogContent>
    </>
  );
};

KeyDialogPage1.propTypes = {
  onClose: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
