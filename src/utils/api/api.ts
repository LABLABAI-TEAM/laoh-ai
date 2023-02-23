import axios from "axios";
// export const _BASE_URL = "http://localhost:5000";
export const _BASE_URL = "https://recipesby.ai";

export const postRequest = (path: string, data: {}) => {
  return axios.post(`${_BASE_URL}${path}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getRequest = (path: string) => {
  return axios.get(`${_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
