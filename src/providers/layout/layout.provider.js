import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import { createLayerUtil, moveLayerUtil } from "./layout.utils";

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

  // extra actions
  createLayer: () => {},
  moveLayer: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const LayoutProvider = ({ children }) => {
  // state values and actions
  const [layout, setLayout] = useState({});
  const [layoutOriginal, setLayoutOriginal] = useState({});
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [hasBeenChanged, setHasBeenChanged] = useState(false);

  // extra actions
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
        // extra actions
        createLayer,
        moveLayer,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: propTypes.node,
};
