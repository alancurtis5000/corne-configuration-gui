import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "./bottom-actions.styles.scss";
import { DownloadButton } from "../download-button/download-button";
import { LayoutContext } from "../../providers/layout/layout.provider";

export const BottomActions = () => {
  const { saveLayout } = useContext(LayoutContext);

  const handleSave = () => {
    saveLayout();
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
