import React, { useContext } from "react";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import "./key-dialog-page-3.styles.scss";
import { BackButton } from "../back-button/back-button.component";
import { keys } from "../../constants/keys";
import { Button } from "@mui/material";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const KeyDialogPage3 = (props) => {
  const { setPage } = props;
  const {
    selectedBindingIndex,
    selectedLayerIndex,
    layers,
    changeBindingTapped,
  } = useContext(KeymapContext);
  const { index } = layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const back = () => {
    setPage(2);
  };

  const options = () => {
    const options = [];
    for (let i = 0; i < 26; i++) {
      options.push(keys[i]);
    }
    options.sort((a, b) => a.label.localeCompare(b.label));

    return (
      <>
        {options.map((option) => {
          return (
            <Button
              variant="outlined"
              key={option.id}
              onClick={() =>
                changeBindingTapped({ newBindingTappedValue: option })
              }
            >
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
};
