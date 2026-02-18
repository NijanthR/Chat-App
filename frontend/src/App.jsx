import ChatBody from './components/ChatBody.jsx'
import ChatInput from './components/ChatInput.jsx'
import SideNav from './components/SideNav.jsx'

const desktopQuickActions = ['Generate Summary', 'Create Flashcards', 'Extract Data Table']
const mobileQuickActions = ['Generate Summary', 'Create Flashcards']

function App() {
  return (
    <main className="fixed inset-0 h-screen w-screen overflow-hidden bg-gray-200 text-gray-800">
      <section className="md:hidden">
        <MobileChatPreview />
      </section>

      <section className="hidden md:block">
        <DesktopChatPreview />
      </section>
    </main>
  )
}

function DesktopChatPreview() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="grid h-full w-full grid-cols-[200px_1fr] sm:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] xl:grid-cols-[260px_1fr]">
        <SideNav />

        <div className="flex h-full flex-col bg-gray-200">
          <header className="flex items-center justify-between border-b border-teal-200 bg-gray-100 px-4 py-4 lg:px-6">
            <h2 className="text-sm font-semibold md:text-base">Market Analysis · Sustainable Packaging</h2>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search in chat..."
                className="hidden rounded-lg border border-teal-200 bg-gray-100 px-3 py-1.5 text-xs text-gray-700 outline-none placeholder:text-gray-500 sm:block"
              />
              <button className="text-teal-700 hover:text-teal-900">⋮</button>
            </div>
          </header>

          <ChatBody />

          <footer className="border-t border-teal-200 bg-gray-100 px-4 py-4 lg:px-6">
            <div className="mb-3 flex flex-wrap gap-2">
              {desktopQuickActions.map((action) => (
                <button
                  key={action}
                  className="rounded-full border border-teal-300 bg-teal-100 px-3 py-1.5 text-xs font-medium text-teal-700"
                >
                  {action}
                </button>
              ))}
            </div>
            <ChatInput placeholder="Ask anything about your workspace..." showAddButton />
          </footer>
        </div>
      </div>
    </div>
  )
}

function MobileChatPreview() {
  return (
    <div className="flex h-screen w-screen flex-col bg-gray-200">
      <header className="flex items-center justify-between border-b border-teal-200 bg-gray-100 px-4 py-3">
        <button className="text-teal-700">←</button>
        <div>
          <h2 className="text-sm font-semibold">Research Analysis</h2>
          <p className="text-[11px] text-teal-700">4 collaborators active</p>
        </div>
        <button className="text-teal-700">⋯</button>
      </header>

      <div className="flex gap-2 border-b border-teal-200 bg-gray-100 px-3 py-2">
        <Chip label="Market_Report.pdf" />
        <Chip label="User_Interviews.docx" />
      </div>

      <ChatBody variant="mobile" actions={mobileQuickActions} />

      <div className="fixed inset-x-0 bottom-12 border-t border-teal-200 bg-gray-200 px-3 py-3">
        <ChatInput placeholder="Ask anything..." />
      </div>

      <nav className="fixed inset-x-0 bottom-0 grid grid-cols-4 border-t border-teal-200 bg-gray-100 px-2 py-2 text-[11px] text-gray-600">
        <BottomTab label="Chat" active />
        <BottomTab label="Files" />
        <BottomTab label="Insights" />
        <BottomTab label="Config" />
      </nav>
    </div>
  )
}

function Chip({ label }) {
  return <span className="rounded-md border border-teal-300 bg-teal-100 px-2.5 py-1 text-xs text-teal-700">{label}</span>
}

function BottomTab({ label, active = false }) {
  return (
    <button className={`rounded-md py-1 text-center ${active ? 'text-teal-700' : 'text-gray-500'}`}>
      {label}
    </button>
  )
}

export default App
