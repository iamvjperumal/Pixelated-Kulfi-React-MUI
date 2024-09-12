import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../hooks/useData";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "587302c03f804c689443706c72ef6726",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(config: AxiosRequestConfig) {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient;
