import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./layer-panel.styles.scss";
import { KeyButton } from "../key-button/key-button.component";

export const LayerPanel = (props) => {
  const { children, value, index, layer, ...other } = props;

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
          <Typography variant="h4">{layer.label}</Typography>
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
