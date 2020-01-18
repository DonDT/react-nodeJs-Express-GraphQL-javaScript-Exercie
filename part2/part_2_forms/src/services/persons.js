import axios from "axios";

const baseURL = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseURL);
};

const postNew = newData => {
  return axios.post(baseURL, newData);
};
const deleteItem = id => {
  return axios.delete(`${baseURL}/${id}`);
};

export default {
  getAll,
  postNew,
  deleteItem
};
