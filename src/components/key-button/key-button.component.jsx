import * as React from "react";
import { Button } from "@mui/material";

export const KeyButton = (props) => {
  const { keyData } = props;

  const handleOnClick = () => {
    console.log("hello");
  };

  return (
    <Button variant="outlined" onClick={handleOnClick}>
      {keyData.label}
    </Button>
  );
};
