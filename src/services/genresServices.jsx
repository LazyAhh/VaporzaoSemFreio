

import axiosClient from "./axiosClient"

const genresService = {

  getAll: async () => {
    const response = await axiosClient.get("/generos")
    return response.data
  },

  getById: async (id) => {
    const response = await axiosClient.get(`/generos/${id}`)
    return response.data
  },

}

export default genresService