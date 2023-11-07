
import './App.css'
import Footer from './components/Footer'
import FourOFour from './pages/FourOFour'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App


