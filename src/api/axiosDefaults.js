import axios from "axios";

axios.defaults.baseURL = "https://drf-api-my-creative-gems-f8e57028547e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// To avoid CORS error when sending cookies
axios.defaults.withCredentials = true;  
