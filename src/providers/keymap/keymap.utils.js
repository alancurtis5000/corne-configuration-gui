import { Layer } from "../../classes/layer";

export const incrementCount = (count, margin) => {
    return count + margin * 1;
};
export const decrementCount = (count, margin) => {
    return count - margin * 1;
};


export const createLayerUtil = ({ layers }) => {
    const label = `Layer ${layers.length}`
    const index = layers.length
    const layer = new Layer(label, index)
    const updatedLayers = [...layers, layer]
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

export const moveLayerUtil = ({ direction, index, layers }) => {
    console.log({ direction, index, layers })
    const updatedLayers = [...layers]
    const sourceLayer = updatedLayers.find((layer) => layer.index === index)
    const targetLayer = updatedLayers.find((layer) => {
        if (direction === 'left') {
            return layer.index === index - 1;
        } else {
            return layer.index === index + 1;
        }
    })

    if (targetLayer && sourceLayer) {
        if (direction === 'left') {
            sourceLayer.index = sourceLayer.index - 1;
            targetLayer.index = targetLayer.index + 1;
        } else {
            sourceLayer.index = sourceLayer.index + 1;
            targetLayer.index = targetLayer.index - 1;
        }

        updatedLayers.splice(sourceLayer.index, 1, sourceLayer);
        updatedLayers.splice(targetLayer.index, 1, targetLayer);

        return updatedLayers
    }
    return layers
}

export const deleteLayerUtil = ({ index, layers }) => {
    console.log({ index, layers })
    const updatedLayers = [...layers]
    updatedLayers.splice(index, 1);
    updatedLayers.forEach((layer, index) => layer.index = index)
    return updatedLayers
}

export const addModifierToKeyUtil = ({ index, layer, layers }) => {
    // todo alan left off here addings modifier to key
    // alan maybe also add update key next
    console.log({ index, layer, layers })
    const updatedLayers = [...layers]
    //  updatedLayers.splice(index, 1);
    // updatedLayers.forEach((layer, index) => layer.index = index)
    return updatedLayers
}

export const changeKeyTappedUtil = ({ index, layer, newValue, layers }) => {
    console.log(changeKeyTappedUtil, { index, layer, newValue, layers })
    const updatedLayers = [...layers]
    //  updatedLayers.splice(index, 1);
    // updatedLayers.forEach((layer, index) => layer.index = index)
    return updatedLayers
}