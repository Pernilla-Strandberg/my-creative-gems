import axios from "axios";

axios.defaults.baseURL =
  "https://drf-api-my-creative-gems-f8e57028547e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// To avoid CORS error when sending cookies
axios.defaults.withCredentials = true;
// Intercept req and res to extend logged in time up to 24 h
export const axiosReq = axios.create();
export const axiosRes = axios.create();
