import { Layer } from "../../classes/layer";

export const incrementCount = (count, margin) => {
    return count + margin * 1;
};
export const decrementCount = (count, margin) => {
    return count - margin * 1;
};


export const createLayerUtil = (currentLayers) => {
    const label = `Layer ${currentLayers.length}`
    const index = currentLayers.length
    const layer = new Layer(label, index)
    const updatedLayers = [...currentLayers, layer]
    return updatedLayers
}

export const changeLayerNameUtil = ({ input, index, selectedLayer, layers }) => {
    console.log({ input, index, selectedLayer, layers })
    const updatedSelectedLayer = { ...selectedLayer }
    const updatedLayers = [...layers]
    updatedSelectedLayer.label = input
    updatedLayers.splice(index, 1, updatedSelectedLayer);
    return updatedLayers
}