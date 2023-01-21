import { Layer } from "../../classes/layer";
import { isEmpty } from "../../utilities/data-parsing";
import { keys } from "../../constants/keys";

export const incrementCount = (count, margin) => {
  return count + margin * 1;
};
export const decrementCount = (count, margin) => {
  return count - margin * 1;
};

export const createLayerUtil = ({ layouts, selectedLayoutIndex }) => {
  const selectedLayout = layouts[selectedLayoutIndex];
  const layers = selectedLayout.layers;

  const label = `Layer_${layers.length}`;
  const index = layers.length;

  const layer = new Layer(label, index);
  let updatedLayout = (layouts[selectedLayoutIndex].layers = [
    ...layers,
    layer,
  ]);
  let updatedLayouts = [...layouts, updatedLayout];
  return updatedLayouts;
};

export const changeLayerNameUtil = ({ input, selectedLayerIndex, layers }) => {
  const updatedLayer = { ...layers[selectedLayerIndex] };
  updatedLayer.label = input;

  const updatedLayers = [...layers];

  updatedLayers.splice(selectedLayerIndex, 1, updatedLayer);
  return updatedLayers;
};

export const changeBindingLabelUtil = ({
  input,
  selectedLayerIndex,
  layers,
  selectedBindingIndex,
}) => {
  if (input === null) {
    input = "";
  }
  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex] = {
    ...updateLayer.bindings[selectedBindingIndex],
    label: input,
  };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);
  console.log({ updateLayer });
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

export const deleteLayerUtil = ({
  layouts,
  selectedLayoutIndex,
  selectedLayerIndex,
}) => {
  // get selected layout
  const selectedLayout = layouts[selectedLayoutIndex];
  // get selected layers
  const layers = selectedLayout.layers;
  // clone layers
  const updatedLayers = [...layers];
  // delete selected layer from cloned layers
  updatedLayers.splice(selectedLayerIndex, 1);
  // update their indexes after removing one
  updatedLayers.forEach((layer, index) => (layer.index = index));
  // clone selected layout
  const updatedLayout = { ...selectedLayout, layers: updatedLayers };

  // clone layouts
  const updatedLayouts = [...layouts];

  // replace selected layout with updated layout
  updatedLayouts.splice(selectedLayoutIndex, 1, updatedLayout);
  return updatedLayouts;
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

export const addModifierToHeldBindingUtil = ({
  modifier,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  const updateLayer = { ...layers[selectedLayerIndex] };
  const modifiers = updateLayer.bindings[selectedBindingIndex].held.modifiers;

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
      updateLayer.bindings[selectedBindingIndex].held.modifiers = [
        ...modifiers,
        modifier,
      ];
    } else {
      modifiers.splice(doesModifierExist, 1);
      updateLayer.bindings[selectedBindingIndex].held.modifiers = [
        ...modifiers,
      ];
    }
  } else {
    modifiers.splice(doesAlternateExist, 1);
    updateLayer.bindings[selectedBindingIndex].held.modifiers = [
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
  if (isEmpty(newBindingTappedValue)) {
    newBindingTappedValue = keys.find((key) => key.id === 5002);
  }
  if (newBindingTappedValue.key_category_id === 65) {
    const index = 0;
    const label = layers[0].label;
    newBindingTappedValue.layer = { index, label };
  }

  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex].tapped = {
    ...newBindingTappedValue,
    modifiers: [],
  };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);

  return updatedLayers;
};

export const changeBindingHeldUtil = ({
  newBindingTappedValue,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  if (newBindingTappedValue.key_category_id === 65) {
    const index = 0;
    const label = layers[0].label;
    newBindingTappedValue.layer = { index, label };
  }

  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex].held = {
    ...newBindingTappedValue,
    modifiers: [],
  };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);

  return updatedLayers;
};

export const setSelectedBindingLayerUtil = ({
  buttonMode,
  index,
  label,
  layers,
  selectedLayerIndex,
  selectedBindingIndex,
}) => {
  const updateLayer = { ...layers[selectedLayerIndex] };
  updateLayer.bindings[selectedBindingIndex][buttonMode].layer = {
    index,
    label,
  };

  const updatedLayers = [...layers];
  updatedLayers.splice(selectedLayerIndex, 1, updateLayer);

  return updatedLayers;
};
