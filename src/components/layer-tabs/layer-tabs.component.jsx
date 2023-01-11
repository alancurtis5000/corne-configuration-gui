import React from "react";
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
  const { layers, createLayer, setSelectedLayerIndex, selectedLayerIndex } =
    useContext(KeymapContext);

  const handleChange = (event, layerIndex) => {
    if (layerIndex === layers.length) {
      createLayer();
    } else {
      setSelectedLayerIndex(layerIndex);
    }
  };

  const addTab = () => {
    const allTabs = [];
    layers.forEach((layer) => {
      allTabs.push(
        <Tab
          label={layer.label}
          key={layer.index}
          {...a11yProps(layer.index)}
        />
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
          value={selectedLayerIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {addTab()}
        </Tabs>
      </Box>
      {layers.map((layer) => {
        return (
          <LayerPanel key={layer.label} index={layer.index} layer={layer} />
        );
      })}
    </Box>
  );
};
