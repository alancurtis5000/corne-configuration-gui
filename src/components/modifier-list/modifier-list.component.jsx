import React, { useContext } from "react";
import { Button } from "@mui/material";
import { modifiers } from "../../constants/modifiers";
import "./modifier-list.styles.scss";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const ModifierList = () => {
  const {
    addModifierToTappedBinding,
    layers,
    selectedLayerIndex,
    selectedBindingIndex,
  } = useContext(KeymapContext);

  const leftMods = [];
  const rightMods = [];

  // todo only can select left or right not both
  Object.values(modifiers).forEach((modifier) => {
    const isSelected = layers[selectedLayerIndex].bindings[
      selectedBindingIndex
    ].tapped.modifiers.find((mod) => mod.label === modifier.label);
    if (modifier.label.includes("Left")) {
      leftMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
          value={modifier.label}
          onClick={() => addModifierToTappedBinding({ modifier })}
        >
          {modifier.label}
        </Button>
      );
    } else {
      rightMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
          value={modifier.label}
          onClick={() => addModifierToTappedBinding({ modifier })}
        >
          {modifier.label}
        </Button>
      );
    }
  });

  return (
    <div className="modifier-list">
      <div className="left-mods">{leftMods}</div>
      <div className="right-mods">{rightMods}</div>
    </div>
  );
};
