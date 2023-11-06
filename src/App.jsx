
import './App.css'

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App


