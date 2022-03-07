import axios, { AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 60 * 1000,
});

http.interceptors.request.use((config) => {
  config.url = `${config.url}?api-key=${process.env.REACT_APP_NY_TIMES_KEY}`;
  return config;
});

http.interceptors.response.use((response) => response.data);
