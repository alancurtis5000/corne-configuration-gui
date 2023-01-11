import React, { useContext } from "react";

import { IconButton } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { KeymapContext } from "../../providers/keymap/keymap.provider";
import { saveAs } from "file-saver";

export const DownloadButton = (props) => {
  const { layers } = useContext(KeymapContext);

  const handleDownload = () => {
    console.log("handleDownload");
    var blob = new Blob(["This is a sample file content."], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "download.txt");
  };

  return (
    <div>
      <div className="delete-button">
        <IconButton color="default" onClick={handleDownload}>
          <DownloadIcon sx={{ pointerEvents: "none" }} />
        </IconButton>
      </div>
    </div>
  );
};