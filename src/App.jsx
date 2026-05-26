import './App.css'
import Home from './pages/Home/Home'
import Navbar from './components/layout/navigation/Navbar'
import Footer from './components/layout/footer/Footer'
import PageContainer from './components/layout/PageContainer'

function App() {

  return (
    <PageContainer>
      <Navbar />
      <Home />
      <Footer />
    </PageContainer>
  )
}

export default App
