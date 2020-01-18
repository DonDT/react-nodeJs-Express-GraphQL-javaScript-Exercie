import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseURL);
};

const postNew = newData => {
  return axios.post(baseURL, newData);
};

export default {
  getAll,
  postNew
};
