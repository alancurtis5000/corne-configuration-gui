import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "./bottom-actions.styles.scss";
import { DownloadButton } from "../download-button/download-button";

export const BottomActions = () => {
  const handleSave = () => {
    console.log("save");
  };

  return (
    <div className="bottom-actions">
      <Button onClick={handleSave} startIcon={<ArrowBackIcon />}>
        Save
      </Button>
      <DownloadButton />
    </div>
  );
};
