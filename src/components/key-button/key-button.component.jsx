import React, { useState } from "react";
import { Button } from "@mui/material";
import { KeyDialog } from "../key-dialog/key-dialog.component";

export const KeyButton = (props) => {
  const { keyData } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsOpen(true);
  };

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpenDialog}>
        {keyData.label}
      </Button>
      <KeyDialog
        onClose={handleCloseDialog}
        selectedValue={keyData}
        isOpen={isOpen}
      />
    </>
  );
};
