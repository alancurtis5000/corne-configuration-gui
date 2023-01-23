import axios from "axios";

export const getLayouts = async () => {
  return axios
    .get("/layouts")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const createLayout = async (body) => {
  return axios
    .post("/layouts", body)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

export const deleteLayout = async (layoutId) => {
  return axios
    .delete(`/layouts/${layoutId}`)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

export const updateLayout = async (layoutId, body) => {
  return axios
    .put(`/layouts/${layoutId}`, body)
    .then((res) => {
      return res;
    })
    .catch((error) => console.log(error));
};

export const getLayout = async (layoutId) => {
  console.log({ layoutId });
  return axios
    .get(`/layouts/${layoutId}/`)
    .then((res) => {
      console.log({ res });
      return res;
    })
    .catch((error) => console.log(error));
};
