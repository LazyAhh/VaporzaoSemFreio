import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/layout/navigation/Navbar'
import Footer from './components/layout/footer/Footer'
import PageContainer from './components/layout/PageContainer'
import { BrowserRouter } from "react-router-dom"
import AppRoutes from './routes/AppRoutes'
import AuthProvider from './context/AuthProvider'

function App() {

  return (
    <div>
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
    </div>
  )
}

export default App
