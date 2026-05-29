

import axiosClient from "./axiosClient"

const gamesService = {

  getAll: async (params = {}) => {
    const response = await axiosClient.get("/jogos", {
      params,
    })

    return response.data
  },

  getFeatured: async () => {
    const response = await axiosClient.get("/jogos/destaques")

    return response.data
  },

}

export default gamesService