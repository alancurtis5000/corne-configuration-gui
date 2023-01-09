import React, { useContext } from "react";
import { Button } from "@mui/material";
import { modifiers } from "../../constants/modifiers";
import "./modifier-list.styles.scss";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const ModifierList = (props) => {
  const { index, layer } = props;
  const { addModifierToKey, layers } = useContext(KeymapContext);

  const leftMods = [];
  const rightMods = [];

  const handleSelectModifier = (e) => {
    console.log("handleSelectModifier", e.target.value);
    // addModifierToKey({ index, layer });
  };

  Object.values(modifiers).forEach((modifier) => {
    if (modifier.label.includes("Left")) {
      leftMods.push(
        <Button
          variant="outlined"
          key={modifier.label}
          value={modifier.label}
          onClick={handleSelectModifier}
        >
          {modifier.label}
        </Button>
      );
    } else {
      rightMods.push(
        <Button
          variant="outlined"
          key={modifier.label}
          value={modifier.label}
          onClick={handleSelectModifier}
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
