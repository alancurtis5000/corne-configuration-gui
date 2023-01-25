import React, { useContext } from "react";
import { Button } from "@mui/material";
import "./modifier-list.styles.scss";
import { keys } from "../../constants/keys";
import { HELD, TAPPED } from "../../constants/button-modes";
import { LayoutContext } from "../../providers/layout/layout.provider";

export const ModifierList = () => {
  const {
    addModifierToTappedBinding,
    addModifierToHeldBinding,
    layout,
    selectedLayerIndex,
    selectedBindingIndex,
    selectedBindingActionKey,
  } = useContext(LayoutContext);
  const layers = layout.layers;

  const modifiers = keys.filter(
    (key) => key.key_category_id === 63 && key.modCode
  );

  const leftMods = [];
  const rightMods = [];

  const modLocation = () => {
    if (selectedBindingActionKey === TAPPED) {
      return TAPPED;
    } else if (selectedBindingActionKey === HELD) {
      return HELD;
    }
  };

  const handleAddMod = ({ modifier }) => {
    if (selectedBindingActionKey === TAPPED) {
      addModifierToTappedBinding({ modifier });
    } else if (selectedBindingActionKey === HELD) {
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
