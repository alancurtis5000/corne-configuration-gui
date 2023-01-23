import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../classes/layout";
import { boxSX, buttonSX, deleteSX, listSX } from "./layouts.styles";
import { createLayout, deleteLayout, getLayouts } from "../../api/layouts.api";

export const Layouts = () => {
  const [layouts, setLayouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiCallGetLayouts = async () => {
      try {
        const response = await getLayouts();
        setLayouts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    apiCallGetLayouts();
  }, []);

  const handleLayoutSelect = (layoutId) => {
    navigate(`/layout/${layoutId}`);
  };
  const handleCreateLayout = async () => {
    const createdAt = Date.now();
    const label = `layout_${layouts.length}`;
    const layout = new Layout({ label, createdAt });
    const body = layout;
    await createLayout(body);
    const response = await getLayouts();
    setLayouts(response.data);
  };

  const handleDeleteLayout = async (event, layoutId) => {
    event.stopPropagation();
    await deleteLayout(layoutId);
    const response = await getLayouts();
    setLayouts(response.data);
  };

  return (
    <div className="page">
      <div>Layouts</div>
      <Box sx={boxSX}>
        <nav aria-label="secondary mailbox folders">
          <List sx={listSX}>
            <ListItem key={-1} disablePadding>
              <ListItemButton onClick={handleCreateLayout}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary={"New Layout"} />
              </ListItemButton>
            </ListItem>
            {layouts.map((layout) => (
              <ListItem key={layout.id} sx={buttonSX} disablePadding>
                <ListItemButton onClick={() => handleLayoutSelect(layout.id)}>
                  <ListItemText primary={layout.label} />
                  <IconButton
                    sx={deleteSX}
                    onClick={(event) => handleDeleteLayout(event, layout.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </div>
  );
};
