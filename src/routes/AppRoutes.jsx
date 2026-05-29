
import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import PrimeiroAcesso from "../pages/PrimeiroAcesso"
// import Library from "../pages/Library"

import ProtectedRoute from "../components/auth/ProtectedRoute"

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/Home"
        element={<Home />}
      />

      <Route
        path="/primeiro-acesso"
        element={<PrimeiroAcesso />}
      />

      {/* <Route
        path="/library"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Library />
          </ProtectedRoute>
        }
      /> */}

    </Routes>
  )
}

export default AppRoutes