import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "./layer-panel.styles.scss";
import { KeyButton } from "../key-button/key-button.component";
import { IconButton, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DeleteIcon from "@mui/icons-material/Delete";

export const LayerPanel = (props) => {
  const { children, value, index, layer, setSelectedTab, ...other } = props;
  const { changeLayerName, moveLayer, layers } = useContext(KeymapContext);
  const [isEdit, setIsEdit] = useState(false);
  const [label, setLabel] = useState(layer.label);

  const gridLeft = () => {
    return (
      <div className="grid-left">
        {layer.bindings.map((key, index) => {
          const button = <KeyButton key={key.index} keyData={key} />;
          if (
            index < 5 ||
            (index > 9 && index < 15) ||
            (index > 19 && index < 25) ||
            (index > 29 && index < 33)
          ) {
            return button;
          }
          return null;
        })}
      </div>
    );
  };

  const gridRight = () => {
    return (
      <div className="grid-right">
        {layer.bindings.map((key, index) => {
          const button = <KeyButton key={key.index} keyData={key} />;
          if (
            (index > 4 && index < 10) ||
            (index > 14 && index < 20) ||
            (index > 24 && index < 30) ||
            index > 32
          ) {
            return button;
          }
          return null;
        })}
      </div>
    );
  };

  const handleOnChange = (e) => {
    console.log("handleOnChange", { e, ta: e.target.value });
    const input = e.target.value;
    setLabel(input);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
    setLabel(layer.label);
  };

  const handleSave = () => {
    const input = label;
    const selectedLayer = layer;
    changeLayerName({ input, index, selectedLayer });
  };

  const handleMoveLayer = (e) => {
    console.log("handleMoveLayer", e.target.value, {
      index,
      len: layers.length,
    });
    const direction = e.target.value;
    if (direction === "left") {
      if (index !== 0) {
        moveLayer({ direction, index });
        setSelectedTab(index - 1);
      }
    } else {
      if (index !== layers.length - 1) {
        moveLayer({ direction, index });
        setSelectedTab(index + 1);
      }
    }
  };

  const handleDeleteLayer = () => {
    console.log("delete");
  };

  return (
    <div
      className="layer-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div className="layer-actions">
            <div className="label">
              <TextField
                id="layer-label"
                value={label}
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
            </div>
            <div className="move-buttons">
              <IconButton
                color="default"
                onClick={handleMoveLayer}
                value="left"
                className="move-button"
              >
                <ArrowCircleLeftIcon sx={{ pointerEvents: "none" }} />
              </IconButton>
              <Typography>Move Layer</Typography>
              <IconButton
                color="default"
                onClick={handleMoveLayer}
                value="right"
                className="move-button"
              >
                <ArrowCircleRightIcon sx={{ pointerEvents: "none" }} />
              </IconButton>
            </div>
            <div className="delete-button">
              <IconButton color="default" onClick={handleDeleteLayer}>
                <DeleteIcon sx={{ pointerEvents: "none" }} />
              </IconButton>
            </div>
          </div>

          <div className="full-keyboard">
            {gridLeft()}
            {gridRight()}
          </div>
        </Box>
      )}
    </div>
  );
};

LayerPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
