import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LayerPanel } from "../layer-panel/layer-panel.component";
import { useContext } from "react";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const LayerTabs = () => {
  const [value, setValue] = React.useState(0);
  const { layers, createLayer } = useContext(KeymapContext);

  const handleChange = (event, newValue) => {
    console.log({ event, newValue, len: layers.length });
    if (newValue === layers.length) {
      console.log("pluss");
      createLayer();
      setValue(newValue);
    } else {
      setValue(newValue);
    }
  };

  const addTab = () => {
    const allTabs = [];
    layers.forEach((layer, index) => {
      allTabs.push(
        <Tab label={layer.label} key={index} {...a11yProps(index)} />
      );
    });
    allTabs.push(
      <Tab
        label={"New"}
        icon={<AddIcon />}
        iconPosition="start"
        key={-1}
        {...a11yProps(-1)}
      />
    );
    return allTabs;
  };
  console.log("tabs");
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {addTab()}
        </Tabs>
      </Box>
      {layers.map((layer, index) => {
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
