import React, { useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Button from "@mui/material/Button";
import "./bottom-actions.styles.scss";
import { DownloadButton } from "../download-button/download-button";

import { LayoutContext } from "../../providers/layout/layout.provider";
export const BottomActions = () => {
  const { hasBeenChanged /*saveLayoutById*/ } = useContext(LayoutContext);
  const handleSave = () => {
    // saveLayoutById();
  };

  return (
    <div className="bottom-actions">
      {hasBeenChanged && (
        <>
          <Button onClick={handleSave} startIcon={<ArrowBackIcon />}>
            Save
          </Button>
        </>
      )}
      <DownloadButton />
    </div>
  );
};
