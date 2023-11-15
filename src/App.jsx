import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css"
import Footer from './components/Footer'
import FourOFour from './pages/FourOFour'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import New from "./pages/New";
import Edit from './pages/Edit';
import Show from './Pages/Show';




function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<New />} />
            <Route path="/posts/:id" element={<Show />} />
            <Route path="/posts/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  )
}

export default App


