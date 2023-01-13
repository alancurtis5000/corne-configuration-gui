import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./modifier-list.styles.scss";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { keys } from "../../constants/keys";

export const ModifierList = () => {
  const {
    addModifierToTappedBinding,
    layers,
    selectedLayerIndex,
    selectedBindingIndex,
  } = useContext(KeymapContext);
  const modifiers = keys.filter((key) => key.key_category_id === 63);

  const leftMods = [];
  const rightMods = [];

  modifiers.forEach((modifier) => {
    const isSelected = layers[selectedLayerIndex].bindings[
      selectedBindingIndex
    ].tapped.modifiers.find((mod) => mod.label === modifier.label);
    if (modifier.label && modifier.label.includes("Left")) {
      leftMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
          onClick={() => addModifierToTappedBinding({ modifier })}
        >
          {modifier.label}
        </Button>
      );
    } else if (modifier.label && modifier.label.includes("Right")) {
      rightMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
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
