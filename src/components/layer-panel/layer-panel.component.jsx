import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import "./layer-panel.styles.scss";

export const LayerPanel = (props) => {
  const { children, value, index, layer, ...other } = props;

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
          <div className="grid">
            {layer.bindingsArray.map((key) => {
              return (
                <Button variant="outlined" key={key.index}>
                  {key.label}
                </Button>
              );
            })}
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
