import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthLayout from "../components/auth/AuthLayout"
import LoginCard from "../components/auth/LoginCard"
import LoginForm from "../components/auth/LoginForm"

import authService from "../services/authService"
import { AuthContext } from "../context/AuthProvider"

const Login = () => {

  const navigate = useNavigate()
  const {login} = useContext(AuthContext)

  const [matricula, setMatricula] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      setLoading(true)
      setError(null)

      const data = await authService.login({
        matricula,
        senha: password,
      })

      login(data)

      navigate("/")

    } catch (err) {

      console.log(err)

      setError("Matrícula ou senha inválidas.")

    } finally {

      setLoading(false)

    }
  }

  return (
    <AuthLayout>

      <LoginCard>

        {/* Header */}
        <div className="mb-8 text-center">

          <h1 className="text-4xl font-black text-white">
            Entrar
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Acesse sua conta para continuar.
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Form */}
        <LoginForm
          matricula={matricula}
          password={password}
          onMatriculaChange={(e) => setMatricula(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSubmit}
        />

        {/* Primeiro Acesso */}
        <div className="mt-6 text-center">

          <button
            onClick={() => navigate("/primeiro-acesso")}
            className="text-sm text-violet-400 transition hover:text-violet-300"
          >
            Primeiro acesso? Defina sua senha
          </button>

        </div>

        {/* Loading */}
        {loading && (
          <p className="mt-4 text-center text-sm text-zinc-400">
            Entrando...
          </p>
        )}

      </LoginCard>

    </AuthLayout>
  )
}

export default Login