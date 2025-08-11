import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import Newspage from './pages/Newspage'
import './styles.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/news" element={<Newspage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
