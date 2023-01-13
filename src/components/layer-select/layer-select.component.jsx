import React, { useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const LayerSelect = () => {
  const {
    setSelectedBindingLayer,
    selectedLayerIndex,
    selectedBindingIndex,
    layers,
  } = useContext(KeymapContext);

  const selectedBinding =
    layers[selectedLayerIndex].bindings[selectedBindingIndex];

  const handleChange = (event) => {
    const layerIndex = event.target.value;
    const { label, index } = layers[layerIndex];
    setSelectedBindingLayer({ label, index });
  };

  const menuItems = layers.map((layer) => (
    <MenuItem key={layer.index} value={layer.index}>
      {layer.label}
    </MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="layer-select-label">Layer</InputLabel>
        <Select
          labelId="layer-select-label"
          id="layer-select"
          value={selectedBinding.tapped.layer.index}
          label="Layer"
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
};
