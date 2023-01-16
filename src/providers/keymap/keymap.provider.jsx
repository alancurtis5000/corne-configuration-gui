import React, { createContext, useState } from "react";
import propTypes from "prop-types";
import {
  changeLayerNameUtil,
  changeBindingLabelUtil,
  createLayerUtil,
  moveLayerUtil,
  deleteLayerUtil,
  addModifierToTappedBindingUtil,
  addModifierToHeldBindingUtil,
  changeBindingTappedUtil,
  setSelectedBindingLayerUtil,
  changeBindingHeldUtil,
} from "./keymap.utils";
import { layersInitialState } from "./layersInitialState";

// import { incrementCount, decrementCount } from "./keymap.utils";

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  layers: [],
  selectedLayerIndex: 0,
  selectedBindingIndex: null,
  buttonMode: null,
  // actions
  // increment: () => {},
  setButtonMode: () => {},
  createLayer: () => {},
  changeLayerName: () => {},
  changeBindingLabel: () => {},
  moveLayer: () => {},
  deleteLayer: () => {},
  addModifierToTappedBinding: () => {},
  addModifierToHeldBinding: () => {},
  changeBindingTapped: () => {},
  changeBindingHeld: () => {},
  setSelectedLayerIndex: () => {},
  setSelectedBindingIndex: () => {},
  setSelectedBindingLayer: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [layers, setLayers] = useState([...layersInitialState]);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedBindingIndex, setSelectedBindingIndex] = useState(null);
  const [buttonMode, setButtonMode] = useState(null);

  // actions
  // const increment = () => setCount(incrementCount(count, margin));
  const createLayer = () => {
    setLayers(createLayerUtil({ layers }));
    setSelectedLayerIndex(layers.length);
  };

  const changeLayerName = ({ input }) =>
    setLayers(changeLayerNameUtil({ input, selectedLayerIndex, layers }));
  const changeBindingLabel = ({ input }) =>
    setLayers(
      changeBindingLabelUtil({
        input,
        selectedLayerIndex,
        layers,
        selectedBindingIndex,
      })
    );
  const moveLayer = ({ direction, index }) =>
    setLayers(moveLayerUtil({ direction, index, layers }));
  const deleteLayer = ({ selectedLayerIndex }) =>
    setLayers(deleteLayerUtil({ selectedLayerIndex, layers }));
  const addModifierToTappedBinding = ({ modifier }) =>
    setLayers(
      addModifierToTappedBindingUtil({
        modifier,
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );
  const addModifierToHeldBinding = ({ modifier }) =>
    setLayers(
      addModifierToHeldBindingUtil({
        modifier,
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );
  const changeBindingTapped = ({ newBindingTappedValue }) =>
    setLayers(
      changeBindingTappedUtil({
        newBindingTappedValue,
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );
  const changeBindingHeld = ({ newBindingTappedValue }) =>
    setLayers(
      changeBindingHeldUtil({
        newBindingTappedValue,
        layers,
        selectedLayerIndex,
        selectedBindingIndex,
      })
    );

  const setSelectedBindingLayer = ({ index, label }) =>
    setLayers(
      setSelectedBindingLayerUtil({
        index,
        label,
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
        buttonMode,
        setButtonMode,
        setLayers,
        createLayer,
        changeLayerName,
        changeBindingLabel,
        moveLayer,
        deleteLayer,
        addModifierToTappedBinding,
        addModifierToHeldBinding,
        changeBindingTapped,
        changeBindingHeld,
        setSelectedLayerIndex,
        setSelectedBindingIndex,
        setSelectedBindingLayer,
      }}
    >
      {children}
    </KeymapContext.Provider>
  );
};

KeymapProvider.propTypes = {
  children: propTypes.node,
};
