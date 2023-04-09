import axios from 'axios';

const { VITE_API_BASEURL } = import.meta.env;

export const http = axios.create({
  baseURL: `${VITE_API_BASEURL}/api`,
  withCredentials: false,
  timeout: 5000
});

http.interceptors.request.use(
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  ({ data }) => data,
  (error) => Promise.reject(error.message),
);