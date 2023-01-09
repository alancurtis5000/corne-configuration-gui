import { Layer } from "../../classes/layer";

export const incrementCount = (count, margin) => {
    return count + margin * 1;
};
export const decrementCount = (count, margin) => {
    return count - margin * 1;
};


export const createLayerUtil = (currentLayers) => {
    const layer = new Layer(`Layer ${currentLayers.length}`)
    const updatedLayers = [...currentLayers, layer]
    return updatedLayers
}