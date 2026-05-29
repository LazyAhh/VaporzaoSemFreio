import { useContext } from "react"

import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../context/AuthProvider"

const AuthActions = () => {

    const navigate = useNavigate()

    const {
        logout,
        isAuthenticated,
    } = useContext(AuthContext)

    const handleLogout = () => {

        logout()

        navigate("/login")
    }

    if (isAuthenticated) {
        return (
            <button
                onClick={handleLogout}
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-violet-500"
            >
                Sair
            </button>
        )
    }

    return (
        <button
            onClick={() => navigate("/login")}
            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-violet-500"
        >
            Entrar
        </button>
    )
}

export default AuthActions