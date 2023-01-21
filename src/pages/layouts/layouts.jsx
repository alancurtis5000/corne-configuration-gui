import React, { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";

export const Layouts = () => {
  const [layouts, setLayouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/layouts")
      .then((res) => {
        setLayouts(res.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  const handleLayoutSelect = (layoutId) => {
    navigate(`/layout/${layoutId}`);
  };

  return (
    <div className="page">
      <div>Layouts</div>
      <div> create new layout</div>
      <div>List of layouts </div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          maxHeight: 400,
          bgcolor: "background.paper",
        }}
      >
        <nav aria-label="secondary mailbox folders">
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
          >
            {layouts.map((layout) => (
              <ListItem key={layout.id} disablePadding>
                <ListItemButton onClick={() => handleLayoutSelect(layout.id)}>
                  <ListItemText primary={layout.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
};
