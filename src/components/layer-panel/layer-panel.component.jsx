import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "./layer-panel.styles.scss";

export const LayerPanel = (props) => {
  const { children, value, index, layer, ...other } = props;

  const gridLeft = () => {
    return (
      <div className="grid-left">
        {layer.bindingsArray.map((key, index) => {
          if (index <= 17) {
            return (
              <Button variant="outlined" key={key.index}>
                {key.label}
              </Button>
            );
          }
        })}
      </div>
    );
  };

  const gridRight = () => {
    return (
      <div className="grid-right">
        {layer.bindingsArray.map((key, index) => {
          if (index >= 18) {
            return (
              <Button variant="outlined" key={key.index}>
                {key.label}
              </Button>
            );
          }
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
          <Typography>{layer.label}</Typography>
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
