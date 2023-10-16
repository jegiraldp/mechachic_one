import axios from "axios";

const instance = axios.create({
  baseULR: "localhost:4000",
  withCredentials: true,
});

export default instance;
