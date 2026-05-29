import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import AuthLayout from "../components/auth/AuthLayout"
import LoginCard from "../components/auth/LoginCard"
import FirstAccessForm from "../components/auth/FirstAccessForm"
import BackButton from "../components/navigation/BackButton"

import authService from "../services/authService"
import { AuthContext } from "../context/AuthProvider"

const PrimeiroAcesso = () => {

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [matricula, setMatricula] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      setLoading(true)
      setError(null)

      const data = await authService.firstAccess({
        matricula,
        senha: password,
      })

      login(data)

      navigate("/")

    } catch (err) {

      console.log(err)

      setError("Não foi possível definir a senha.")

    } finally {

      setLoading(false)

    }
  }

  return (
    <AuthLayout>

      <LoginCard>
        <BackButton />   
        {/* Header */}
        <div className="mb-8 text-center">

          <h1 className="text-4xl font-black text-white">
            Primeiro Acesso
          </h1>

          <p className="mt-3 text-sm text-zinc-400">
            Defina sua senha para ativar sua conta.
          </p>

        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Form */}
        <FirstAccessForm
          matricula={matricula}
          password={password}
          onMatriculaChange={(e) => setMatricula(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
          onSubmit={handleSubmit}
        />

        {/* Loading */}
        {loading && (
          <p className="mt-4 text-center text-sm text-zinc-400">
            Definindo senha...
          </p>
        )}

      </LoginCard>

    </AuthLayout>
  )
}

export default PrimeiroAcesso