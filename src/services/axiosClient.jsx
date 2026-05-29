import axios from "axios"

import { BASE_URL } from "../config/API"

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

axiosClient.interceptors.request.use((config) => {

  const token = localStorage.getItem("token")

  if (token) {
    config.headers.token = token
  }

  return config
})

export default axiosClient