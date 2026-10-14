import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RubenSummaryPage from './pages/RubenSummary'
import RubenExperience from './pages/RubenExperience'
import RubenInfo from './pages/RubenInfo'
import './css/App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team/ruben" element={<RubenSummaryPage />} />
            <Route
                path="/team/ruben/experience"
                element={<RubenExperience />}
            />
            <Route
                path="/team/ruben/info"
                element={<RubenInfo />}
            />
        </Routes>
    )
}

export default App