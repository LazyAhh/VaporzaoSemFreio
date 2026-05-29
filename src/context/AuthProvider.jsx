import {
  createContext,
  useEffect,
  useState,
} from "react"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)

  useEffect(() => {

    const storedToken =
      localStorage.getItem("token")

    const storedUser =
      localStorage.getItem("user")

    if (storedToken && storedUser) {

      setToken(storedToken)

      setUser(JSON.parse(storedUser))
    }

  }, [])

  const login = (data) => {

    localStorage.setItem(
      "token",
      data.token
    )

    localStorage.setItem(
      "user",
      JSON.stringify(data.usuario)
    )

    setToken(data.token)

    setUser(data.usuario)
  }

  const logout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("user")

    setToken(null)

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider