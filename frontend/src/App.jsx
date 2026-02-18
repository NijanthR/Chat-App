import SideNav from './components/SideNav.jsx'
import { Route, Routes } from 'react-router-dom'
import ActivityPage from './pages/ActivityPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

function App() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-slate-50 text-slate-900">
      <DesktopChatPreview />
    </main>
  )
}

function DesktopChatPreview() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-slate-50">
      <div className="grid h-full w-full grid-cols-[auto_1fr]">
        <SideNav />

        <div className="flex h-full min-h-0 flex-col overflow-hidden bg-slate-50">
          <div className="flex min-h-0 flex-1 overflow-hidden bg-slate-50">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<DashboardPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
