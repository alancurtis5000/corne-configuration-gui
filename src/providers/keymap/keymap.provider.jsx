import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import {
  changeLayerNameUtil,
  createLayerUtil,
  moveLayerUtil,
  deleteLayerUtil,
  addModifierToKeyUtil,
  changeBindingTappedUtil,
} from "./keymap.utils";
import { layersInitialState } from "./layersInitialState";

// import { incrementCount, decrementCount } from "./keymap.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  layers: [],
  selectedLayerIndex: 0,
  selectedBindingIndex: null,
  // actions
  // increment: () => {},
  createLayer: () => {},
  changeLayerName: () => {},
  moveLayer: () => {},
  deleteLayer: () => {},
  addModifierToKey: () => {},
  changeBindingTapped: () => {},
  setSelectedLayerIndex: () => {},
  setSelectedBindingIndex: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [layers, setLayers] = useState([...layersInitialState]);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedBindingIndex, setSelectedBindingIndex] = useState(null);
  // actions
  // const increment = () => setCount(incrementCount(count, margin));
  const createLayer = () => {
    setLayers(createLayerUtil({ layers }));
    setSelectedLayerIndex(layers.length);
  };

  const changeLayerName = ({ input }) =>
    setLayers(changeLayerNameUtil({ input, selectedLayerIndex, layers }));
  const moveLayer = ({ direction, index }) =>
    setLayers(moveLayerUtil({ direction, index, layers }));
  const deleteLayer = ({ selectedLayerIndex }) =>
    setLayers(deleteLayerUtil({ selectedLayerIndex, layers }));
  const addModifierToKey = ({ index, layer }) =>
    setLayers(addModifierToKeyUtil({ index, layer, layers }));
  const changeBindingTapped = ({ newBindingTappedValue }) =>
    setLayers(
      changeBindingTappedUtil({
        newBindingTappedValue,
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );

  // if count changes do something
  // useEffect(() => {
  //   console.log({ count });
  // }, [count]);

  return (
    <KeymapContext.Provider
      value={{
        //increment
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
        setLayers,
        createLayer,
        changeLayerName,
        moveLayer,
        deleteLayer,
        addModifierToKey,
        changeBindingTapped,
        setSelectedLayerIndex,
        setSelectedBindingIndex,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
};

KeymapProvider.propTypes = {
  children: propTypes.node,
};
