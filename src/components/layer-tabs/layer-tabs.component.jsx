import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { LayerPanel } from "../layer-panel/layer-panel.component";
import { useContext } from "react";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import AddIcon from "@mui/icons-material/Add";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export const LayerTabs = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { layers, createLayer } = useContext(KeymapContext);

  const handleChange = (event, newTab) => {
    console.log(newTab);
    if (newTab === layers.length) {
      createLayer();
      setSelectedTab(newTab);
    } else {
      setSelectedTab(newTab);
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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedTab}
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
            value={selectedTab}
            index={index}
            layer={layer}
            setSelectedTab={setSelectedTab}
          />
        );
      })}
    </Box>
  );
};
