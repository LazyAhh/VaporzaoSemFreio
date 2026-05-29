
import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import PrimeiroAcesso from "../pages/PrimeiroAcesso"
import NotFound from "../pages/NotFound"
// import Library from "../pages/Library"

import ProtectedRoute from "../components/auth/ProtectedRoute"

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/login"
        element={<Login />}
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
      <Route
        path="*"
        element={<NotFound />} />

    </Routes>
  )
}

export default AppRoutes