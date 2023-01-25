import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { KeyDialog } from "../key-dialog/key-dialog.component";
import { LayoutContext } from "../../providers/layout/layout.provider";

export const KeyButton = (props) => {
  const { keyData } = props;
  const { index, tapped, held, label } = keyData;
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedBindingIndex } = useContext(LayoutContext);

  const handleOpenDialog = () => {
    setSelectedBindingIndex(index);
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedBindingIndex(null);
    setIsOpen(false);
  };

  const buttonStyles = () => {
    return {
      backgroundColor: isOpen ? "red" : "inherit",
      padding: "5px",
      textTransform: "unset",
    };
  };

  const labelStyles = {
    display: "flex",
    flexDirection: "column",
    opacity: tapped.label === "None" ? ".5" : "1",
  };

  const bold = {
    fontWeight: "bold",
  };
  const small = {
    fontSize: "10px",
    margin: "-4px",
  };

  const buttonModes = {
    display: "flex",
    flexDirection: "column",
  };

  const labelWithMods = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const modStyles = {
    ...small,
    backgroundColor: "rgb(219, 183, 106)",
    borderRadius: "8px",
    padding: "0px 2px",
    marginLeft: "3px",
  };
  return (
    <>
      <Button sx={buttonStyles()} variant="outlined" onClick={handleOpenDialog}>
        <div style={labelStyles}>
          {label ? (
            <div style={bold}>{label}</div>
          ) : (
            <>
              <div style={buttonModes}>
                <div style={small}>Tap:</div>
                <div style={bold}>
                  <div style={labelWithMods}>
                    {tapped.label}
                    {tapped?.modifiers?.length > 0 && (
                      <div style={modStyles}>{"mods"}</div>
                    )}
                  </div>
                  {tapped?.layer?.label && (
                    <div style={small}>{tapped.layer.label}</div>
                  )}
                </div>
              </div>
              {held.label && (
                <div style={buttonModes}>
                  <div style={small}>Hold:</div>
                  <div style={bold}>
                    <div style={labelWithMods}>
                      {held.label}
                      {held?.modifiers.length > 0 && (
                        <div style={modStyles}>{"mods"}</div>
                      )}
                    </div>
                    {held?.layer?.label && (
                      <div style={small}>{held.layer.label}</div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </Button>
      <KeyDialog onClose={handleCloseDialog} isOpen={isOpen} />
    </>
  );
};
