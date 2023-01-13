import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const LayerSelect = () => {
  const [age, setAge] = useState("");
  const { selectedBindingIndex, selectedLayerIndex, layers } =
    useContext(KeymapContext);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const menuItems = layers.map((layer) => (
    <MenuItem value={layer.index}>{layer.label}</MenuItem>
  ));

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="layer-select-label">Layer</InputLabel>
        <Select
          labelId="layer-select-label"
          id="layer-select"
          value={age}
          label="Layer"
          onChange={handleChange}
        >
          {menuItems}
        </Select>
      </FormControl>
    </Box>
  );
};
