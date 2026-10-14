import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RubenSummaryPage from './pages/RubenSummary'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/team/ruben" element={<RubenSummaryPage />} />
    </Routes>
  )
}

export default App