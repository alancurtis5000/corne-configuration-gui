import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { KeyDialog } from "../key-dialog/key-dialog.component";
import { KeymapContext } from "../../providers/keymap/keymap.provider";

export const KeyButton = (props) => {
  const { keyData } = props;
  const { index, tapped, held, label } = keyData;
  const [isOpen, setIsOpen] = useState(false);
  const { setSelectedBindingIndex } = useContext(KeymapContext);

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
    };
  };

  const labelStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <Button sx={buttonStyles()} variant="outlined" onClick={handleOpenDialog}>
        <div style={labelStyles}>
          <div>{label}</div>
          <div>{tapped.label}</div>
          <div>{held.label}</div>
        </div>
      </Button>
      <KeyDialog onClose={handleCloseDialog} isOpen={isOpen} />
    </>
  );
};
