import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ChatPage from './pages/ChatPage'
import DashboardPage from './pages/DashboardPage'
import MoonPage from './pages/MoonPage'
import NotFound from './pages/NotFound'
import ReportPage from './pages/ReportPage'
import ResultsPage from './pages/ResultsPage'
import SkyPage from './pages/SkyPage'
import UploadPage from './pages/UploadPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<UploadPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="results" element={<ResultsPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="moon" element={<MoonPage />} />
        <Route path="sky" element={<SkyPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
