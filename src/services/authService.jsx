import axiosClient from "./axiosClient"

const authService = {

  login: async ({ matricula, senha }) => {

    const response = await axiosClient.post(
      "/auth/login",
      {
        matricula,
        senha,
      }
    )

    return response.data
  },

}

export default authService