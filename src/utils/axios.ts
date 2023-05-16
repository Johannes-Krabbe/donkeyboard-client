import axios from "axios";

export const request = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://api.donkeyboard.cc/"
      : "http://localhost:8080",
  timeout: 1000,
});

request.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("donkey-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});
