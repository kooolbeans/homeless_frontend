import axios from 'axios';

const { VITE_API_BASEURL } = import.meta.env;

export const http = axios.create({
  // @ts-ignore
  baseURL: VITE_API_BASEURL,
  withCredentials: false,
  timeout: 5000,
});

http.interceptors.response.use(
  ({ data }) => data,
  (error) => Promise.reject(error.message),
);