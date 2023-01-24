import { Layer } from "../../classes/layer";

export const createLayerUtil = ({ layout }) => {
  const label = `Layer_${layout.layers.length}`;
  const index = layout.layers.length;
  const newLayer = new Layer(label, index);
  const updatedLayout = { ...layout, layers: [...layout.layers, newLayer] };
  return updatedLayout;
};
