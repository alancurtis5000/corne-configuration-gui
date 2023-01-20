import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "./bottom-actions.styles.scss";
import { DownloadButton } from "../download-button/download-button";

import { KeymapContext } from "../../providers/keymap/keymap.provider";
export const BottomActions = () => {
  const { saveLayoutById } = useContext(KeymapContext);
  const handleSave = () => {
    saveLayoutById();
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
