import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import {
  createLayerUtil,
  moveLayerUtil,
  deleteLayerUtil,
  updateLayerLabelUtil,
  setBindingActionValueUtil,
} from "./layout.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const LayoutContext = createContext({
  // state values and actions
  layout: {},
  setLayout: () => {},
  originalLayout: {},
  setLayoutOriginal: () => {},
  selectedLayerIndex: 0,
  setSelectedLayerIndex: () => {},
  hasBeenChanged: false,
  setHasBeenChanged: () => {},
  selectedBindingIndex: 0,
  setSelectedBindingIndex: () => {},
  selectedBindingActionKey: "",
  setSelectedBindingActionKey: () => {},

  // extra actions
  createLayer: () => {},
  moveLayer: () => {},
  deleteLayer: () => {},
  updateLayerLabel: () => {},
  setBindingActionValue: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const LayoutProvider = ({ children }) => {
  // state values and actions
  const [layout, setLayout] = useState({});
  const [layoutOriginal, setLayoutOriginal] = useState({});
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [hasBeenChanged, setHasBeenChanged] = useState(false);
  const [selectedBindingIndex, setSelectedBindingIndex] = useState(0);
  const [selectedBindingActionKey, setSelectedBindingActionKey] = useState("");

  // extra actions

  const forceTabsToRerender = async () => {
    // mui would not update deleting the first tab without await
    let oldSelectedLayerIndex = selectedLayerIndex;
    await setSelectedLayerIndex(1);
    setSelectedLayerIndex(oldSelectedLayerIndex);
  };
  const createLayer = () => {
    setLayout(createLayerUtil({ layout }));
    setSelectedLayerIndex(layout.layers.length);
    setHasBeenChanged(true);
  };

  const moveLayer = ({ direction, index }) => {
    setLayout(moveLayerUtil({ layout, direction, index }));
    setHasBeenChanged(true);
    if (direction === "left") {
      if (index !== 0) {
        setSelectedLayerIndex(index - 1);
      }
    } else {
      if (index !== layout.layers.length - 1) {
        setSelectedLayerIndex(index + 1);
      }
    }
  };
  const deleteLayer = async () => {
    const layers = layout.layers;
    // cant delete if only one layer
    if (selectedLayerIndex === 0 && layers.length === 1) return;

    setLayout(deleteLayerUtil({ layout, selectedLayerIndex }));
    setHasBeenChanged(true);
    if (selectedLayerIndex === 0) {
      forceTabsToRerender();
    } else {
      setSelectedLayerIndex(selectedLayerIndex - 1);
    }
  };

  const updateLayerLabel = async ({ input }) => {
    setLayout(updateLayerLabelUtil({ layout, input, selectedLayerIndex }));
    forceTabsToRerender();
  };

  const setBindingActionValue = ({ bindingActionKey, bindingActionValue }) => {
    setLayout(
      setBindingActionValueUtil({
        layout,
        bindingActionKey,
        bindingActionValue,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );
  };

  return (
    <LayoutContext.Provider
      value={{
        // state values and actions
        layout,
        setLayout,
        layoutOriginal,
        setLayoutOriginal,
        selectedLayerIndex,
        setSelectedLayerIndex,
        hasBeenChanged,
        setHasBeenChanged,
        selectedBindingIndex,
        setSelectedBindingIndex,
        selectedBindingActionKey,
        setSelectedBindingActionKey,
        // extra actions
        createLayer,
        moveLayer,
        deleteLayer,
        updateLayerLabel,
        setBindingActionValue,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: propTypes.node,
};
