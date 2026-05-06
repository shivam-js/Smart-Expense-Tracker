import axios from "axios";

const API = axios.create({
  baseURL: "https://smart-expense-tracker-production-ca7c.up.railway.app/api",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;