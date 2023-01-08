import React, { useState } from "react";
import { Button } from "@mui/material";
import { KeyDialog } from "../key-dialog/key-dialog.component";

export const KeyButton = (props) => {
  const { keyData } = props;
  const { tapped, held, label } = keyData;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
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
      <KeyDialog
        onClose={handleCloseDialog}
        selectedValue={keyData}
        isOpen={isOpen}
      />
    </>
  );
};
