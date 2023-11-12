import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer'
import FourOFour from './pages/FourOFour'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import PostNewForm from './components/PostNewForm';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<FourOFour />} />
            <Route path="/PostNewForm" element={<PostNewForm />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App


