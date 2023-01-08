import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LayerPanel } from "../layer-panel/layer-panel";
import { useContext } from "react";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const LayerTabs = () => {
  const [value, setValue] = React.useState(0);
  const { keymap } = useContext(KeymapContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {keymap.map((layer, index) => {
            return (
              <Tab label={layer.label} key={index} {...a11yProps(index)} />
            );
          })}
        </Tabs>
      </Box>
      {keymap.map((layer, index) => {
        return (
          <LayerPanel
            key={layer.label}
            value={value}
            index={index}
            layer={layer}
          />
        );
      })}
    </Box>
  );
};
