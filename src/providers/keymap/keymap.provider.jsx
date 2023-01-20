import React, { createContext, useState, useEffect } from "react";
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
import axios from "axios";

const apiCall = () => {
  return axios
    .get("/layouts")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
};
const apiSaveLayout = (layoutId, body) => {
  return axios
    .put(`/layouts/${layoutId}`, body)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
};

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapContext = createContext({
  layers: [],
  layout: {},
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
  setLayout: () => {},
  getLayouts: () => {},
  saveLayoutById: () => {},
});

// can I and should I right test for this?
/* istanbul ignore next */
export const KeymapProvider = ({ children }) => {
  const [layers, setLayers] = useState([]);
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const [selectedBindingIndex, setSelectedBindingIndex] = useState(null);
  const [buttonMode, setButtonMode] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [layout, setLayout] = useState({});

  const getLayouts = async () => {
    setLoading(true);
    try {
      const layouts = await apiCall();
      console.log({ layouts });
      setData(layouts);
      setLoading(false);
      setLayers(layouts[0].layers);
      setLayout(layouts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const saveLayoutById = async () => {
    const body = {
      id: data[0].id,
      label: data[0].label,
      layers: layers,
    };
    const layoutId = data[0].id;
    setLoading(true);
    try {
      await apiSaveLayout(layoutId, body);
      getLayouts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLayouts();
  }, []);

  // actions
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
        buttonMode,
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
        loading,
        data,
        layout,
        setLayout,
        getLayouts,
        saveLayoutById,
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
