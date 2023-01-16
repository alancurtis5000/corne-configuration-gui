import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./modifier-list.styles.scss";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { keys } from "../../constants/keys";
import { HELD, TAPPED } from "../../constants/button-modes";

export const ModifierList = () => {
  const {
    addModifierToTappedBinding,
    addModifierToHeldBinding,
    layers,
    selectedLayerIndex,
    selectedBindingIndex,
    buttonMode,
  } = useContext(KeymapContext);
  const modifiers = keys.filter((key) => key.key_category_id === 63);

  const leftMods = [];
  const rightMods = [];

  const modLocation = () => {
    if (buttonMode === TAPPED) {
      return TAPPED;
    } else if (buttonMode === HELD) {
      return HELD;
    }
  };

  const handleAddMod = ({ modifier }) => {
    if (buttonMode === TAPPED) {
      addModifierToTappedBinding({ modifier });
    } else if (buttonMode === HELD) {
      addModifierToHeldBinding({ modifier });
    }
  };

  modifiers.forEach((modifier) => {
    const isSelected = layers[selectedLayerIndex].bindings[
      selectedBindingIndex
    ][modLocation()].modifiers.find((mod) => mod.label === modifier.label);
    if (modifier.label && modifier.label.includes("Left")) {
      leftMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
          onClick={() => handleAddMod({ modifier })}
        >
          {modifier.label}
        </Button>
      );
    } else if (modifier.label && modifier.label.includes("Right")) {
      rightMods.push(
        <Button
          variant={isSelected ? "contained" : "outlined"}
          key={modifier.label}
          onClick={() => handleAddMod({ modifier })}
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
