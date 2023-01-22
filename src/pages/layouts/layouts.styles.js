export const buttonSX = {
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

export const deleteSX = {
  "&:hover": {
    svg: {
      fill: "red",
    },
  },
};

export const boxSX = {
  width: "100%",
  maxWidth: 360,
  maxHeight: 400,
  bgcolor: "background.paper",
};

export const listSX = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
  position: "relative",
  overflow: "auto",
  maxHeight: 300,
  "& ul": { padding: 0 },
};
