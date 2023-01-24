import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import { createLayerUtil } from "./layout.utils";

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
    console.log("createLayer");
    setLayout(createLayerUtil({ layout }));
    setSelectedLayerIndex(layout.layers.length);
    setHasBeenChanged(true);
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
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: propTypes.node,
};
