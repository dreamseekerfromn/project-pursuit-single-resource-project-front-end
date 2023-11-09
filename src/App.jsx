import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import FourOFour from './pages/FourOFour'
import Home from './pages/Home'
import NavBar from './components/NavBar';

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


