import React, { useEffect, useState } from "react";
import axios from "axios";
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

const getLayouts = async () => {
  return axios
    .get("/layouts")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log({ err });
    });
};

const createNewLayout = async (body) => {
  return axios
    .post("/layouts", body)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

const deleteLayout = async (layoutId) => {
  return axios
    .delete(`/layouts/${layoutId}`)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

export const Layouts = () => {
  const [layouts, setLayouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      try {
        const response = await getLayouts();
        setLayouts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  }, []);

  const handleLayoutSelect = (layoutId) => {
    navigate(`/layout/${layoutId}`);
  };
  const handleCreateNewLayout = async () => {
    const createdAt = Date.now();
    const label = `layout_${layouts.length}`;
    const layout = new Layout({ label, createdAt });
    const body = layout;
    await createNewLayout(body);
    const response = await getLayouts();
    setLayouts(response.data);
  };

  const handleDeleteLayout = async (event, layoutId) => {
    event.stopPropagation();
    await deleteLayout(layoutId);
    const response = await getLayouts();
    setLayouts(response.data);
  };

  const buttonSX = {
    div: {
      button: {
        opacity: "0",
      },
    },
    "&:hover": {
      div: {
        button: {
          opacity: "1",
        },
      },
    },
  };

  const deleteSX = {
    "&:hover": {
      svg: {
        fill: "red",
      },
    },
  };
  return (
    <div className="page">
      <div>Layouts</div>
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
            <ListItem key={-1} disablePadding>
              <ListItemButton onClick={handleCreateNewLayout}>
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
