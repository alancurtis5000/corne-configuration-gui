import React from "react";
import { Button } from "@mui/material";
import { modifiers } from "../../constants/modifiers";
import "./modifier-list.styles.scss";

export const ModifierList = () => {
  const leftMods = [];
  const rightMods = [];
  Object.values(modifiers).forEach((modifier) => {
    if (modifier.label.includes("Left")) {
      leftMods.push(
        <Button variant="outlined">
          <div>{modifier.label}</div>
        </Button>
      );
    } else {
      rightMods.push(
        <Button variant="outlined">
          <div>{modifier.label}</div>
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
