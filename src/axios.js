import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/challenge-66486/us-central1/api",
});

export default instance;
