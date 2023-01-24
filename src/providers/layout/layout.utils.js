import { Layer } from "../../classes/layer";

export const createLayerUtil = ({ layout }) => {
  const label = `Layer_${layout.layers.length}`;
  const index = layout.layers.length;
  const newLayer = new Layer(label, index);
  const updatedLayout = { ...layout, layers: [...layout.layers, newLayer] };
  return updatedLayout;
};

export const moveLayerUtil = ({ layout, direction, index }) => {
  const layers = layout.layers;

  const updatedLayers = [...layers];
  const sourceLayer = updatedLayers.find((layer) => layer.index === index);
  const targetLayer = updatedLayers.find((layer) => {
    if (direction === "left") {
      return layer.index === index - 1;
    } else {
      return layer.index === index + 1;
    }
  });

  if (targetLayer && sourceLayer) {
    if (direction === "left") {
      sourceLayer.index = sourceLayer.index - 1;
      targetLayer.index = targetLayer.index + 1;
    } else {
      sourceLayer.index = sourceLayer.index + 1;
      targetLayer.index = targetLayer.index - 1;
    }

    updatedLayers.splice(sourceLayer.index, 1, sourceLayer);
    updatedLayers.splice(targetLayer.index, 1, targetLayer);
    layout.layers = updatedLayers;
    return layout;
  }
  return layout;
};

export const deleteLayerUtil = ({ layout, selectedLayerIndex }) => {
  const layers = layout.layers;
  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1);
  updatedLayers.forEach((layer, index) => (layer.index = index));
  layout.layers = updatedLayers;
  return layout;
};

export const updateLayerLabelUtil = ({ layout, input, selectedLayerIndex }) => {
  const layers = layout.layers;
  const updatedLayer = { ...layers[selectedLayerIndex] };
  updatedLayer.label = input;

  const updatedLayers = [...layers];

  updatedLayers.splice(selectedLayerIndex, 1, updatedLayer);
  layout.layers = updatedLayers;
  return layout;
};
