import axios from "axios";

const BASE_URL = "http://localhost:8080";
const post = (path: string, data: any) => {
  return axios.post(path, data, {
    baseURL: BASE_URL,
  });
};

export { post };
