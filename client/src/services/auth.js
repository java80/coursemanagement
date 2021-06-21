// import axios from "axios";
// const baseUrl = "http://localhost:3000";
// const api = axios.create({
//   baseURL: baseUrl,
// });

import axios from "axios";

let apiUrl;
const apiUrls = {
  development: "http://localhost:3000",
  production: "https://myyoutech.herokuapp.com",
};
if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});
export const registerUser = async (FormData) => {
  const res = await api.post("/users", FormData);
  return res.data;
};

export const loginUser = async (FormData, redirectToHome) => {
  const res = await api.post("api/v1/auth", FormData);
  localStorage.setItem("authToken", res.data.token);
  api.defaults.headers.common.authorization = `Bearer ${res.data.token}`;
  return res;
 //redirectToHome();
};

export const logoutUser = async () => {
  
  localStorage.removeItem("authToken");
 
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  console.log("token", token);
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const res = await api.get("/api/v1/auth");
    return res.data;
  }
  return false;
};


export default api;
