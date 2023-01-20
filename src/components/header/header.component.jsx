import React, { useContext } from "react";
import "./header.styles.scss";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { KeymapContext } from "../../providers/keymap/keymap.provider";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export const Header = () => {
  const { data, layout, setLayout } = useContext(KeymapContext);

  const handleChange = (event) => {
    setLayout(event.target.value);
  };

  const layoutOptions = data?.map((layoutOption) => (
    <MenuItem value={layoutOption} key={layoutOption.id}>
      {layoutOption.label}
    </MenuItem>
  ));

  return (
    <div className="header">
      <Typography variant="h4">Keyboard Configurator</Typography>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="layout-select-label">Layout</InputLabel>
          <Select
            labelId="layout-select-label"
            id="layout-select"
            value={layout}
            label="Layout"
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            {layoutOptions}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
