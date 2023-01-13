import { Layer } from "../../classes/layer";

export const incrementCount = (count, margin) => {
  return count + margin * 1;
};
export const decrementCount = (count, margin) => {
  return count - margin * 1;
};

export const createLayerUtil = ({ layers }) => {
  const label = `Layer ${layers.length}`;
  const index = layers.length;
  const layer = new Layer(label, index);
  const updatedLayers = [...layers, layer];
  return updatedLayers;
};

export const changeLayerNameUtil = ({ input, selectedLayerIndex, layers }) => {
  const updatedLayer = { ...layers[selectedLayerIndex] };
  updatedLayer.label = input;

  const updatedLayers = [...layers];

  updatedLayers.splice(selectedLayerIndex, 1, updatedLayer);
  return updatedLayers;
};

export const moveLayerUtil = ({ direction, index, layers }) => {
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

    return updatedLayers;
  }
  return layers;
};

export const deleteLayerUtil = ({ selectedLayerIndex, layers }) => {
  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1);
  updatedLayers.forEach((layer, index) => (layer.index = index));
  return updatedLayers;
};

export const addModifierToTappedBindingUtil = ({
  modifier,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  const updateLayer = { ...layers[selectedLayerIndex] };
  const modifiers = updateLayer.bindings[selectedBindingIndex].tapped.modifiers;

  const doesAlternateExist = modifiers.findIndex((mod) => {
    const currentModSplit = mod.label.split(" ");
    const modifierSplit = modifier.label.split(" ");
    return (
      currentModSplit[0] !== modifierSplit[0] &&
      currentModSplit[1] === modifierSplit[1]
    );
  });
  if (doesAlternateExist === -1) {
    const doesModifierExist = modifiers.findIndex(
      (mod) => mod.label === modifier.label
    );
    if (doesModifierExist === -1) {
      updateLayer.bindings[selectedBindingIndex].tapped.modifiers = [
        ...modifiers,
        modifier,
      ];
    } else {
      modifiers.splice(doesModifierExist, 1);
      updateLayer.bindings[selectedBindingIndex].tapped.modifiers = [
        ...modifiers,
      ];
    }
  } else {
    modifiers.splice(doesAlternateExist, 1);
    updateLayer.bindings[selectedBindingIndex].tapped.modifiers = [
      ...modifiers,
      modifier,
    ];
  }

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);
  return updatedLayers;
};

export const changeBindingTappedUtil = ({
  newBindingTappedValue,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex].tapped = {
    ...newBindingTappedValue,
    modifiers: [],
  };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);

  return updatedLayers;
};

export const setSelectedBindingLayerUtil = ({
  index,
  label,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex].tapped.layer = { index, label };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);

  return updatedLayers;
};
