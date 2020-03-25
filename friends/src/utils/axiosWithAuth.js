import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  // axios.create takes a config object
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: token
    }
  });
};
