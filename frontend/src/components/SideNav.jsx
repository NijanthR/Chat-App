function SideNav() {
  return (
    <aside className="border-r border-teal-300 bg-teal-700 px-4 py-5 text-teal-50">
      <h1 className="mb-6 text-lg font-semibold">AI Workspace</h1>
      <nav className="space-y-2 text-sm">
        <SidebarItem label="Active Chats" active />
        <SidebarItem label="Projects" />
        <SidebarItem label="Recents" />
        <SidebarItem label="Favorites" />
      </nav>
      <div className="mt-8 space-y-3 border-t border-teal-500/40 pt-5 text-sm text-teal-100">
        <p>Settings</p>
        <p className="text-xs text-teal-200">Alex Rivera · Pro Account</p>
      </div>
    </aside>
  )
}

function SidebarItem({ label, active = false }) {
  return (
    <button
      className={`w-full rounded-lg px-3 py-2 text-left transition ${
        active ? 'bg-teal-500/30 text-white' : 'text-teal-100 hover:bg-teal-600/40 hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}

export default SideNav
