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
  const {
    createLayer,
    setSelectedLayerIndex,
    selectedLayerIndex,
    selectedLayoutIndex,
    layouts,
  } = useContext(KeymapContext);
  if (!layouts) return;

  const handleChange = (event, layerIndex) => {
    if (layerIndex === layouts[selectedLayoutIndex]?.layers.length) {
      createLayer();
    } else {
      setSelectedLayerIndex(layerIndex);
    }
  };
  let some = [];
  layouts[selectedLayoutIndex]?.layers?.forEach((layer) => {
    some.push(layer.label);
  });

  let tabs = layouts[selectedLayoutIndex].layers.map((layer) => (
    <Tab label={layer.label} key={layer.index} {...a11yProps(layer.index)} />
  ));
  tabs.push(
    <Tab
      label={"New"}
      icon={<AddIcon />}
      iconPosition="start"
      key={-1}
      {...a11yProps(-1)}
    />
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedLayerIndex}
          onChange={handleChange}
          aria-label="basic tabs"
        >
          {tabs}
        </Tabs>
      </Box>
      {layouts[selectedLayoutIndex]?.layers.map((layer) => {
        return (
          <LayerPanel key={layer.label} index={layer.index} layer={layer} />
        );
      })}
    </Box>
  );
};
