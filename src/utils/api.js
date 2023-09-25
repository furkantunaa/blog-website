import axios from "axios";
const token = localStorage.getItem("token");

export const instance = axios.create({
  baseURL: "https://blog-server-with-prisma-and-mongodb-mct.vercel.app/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

