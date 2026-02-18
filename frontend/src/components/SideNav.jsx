import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiActivity, FiChevronRight, FiHome, FiSettings } from 'react-icons/fi'

const navItems = [
  { label: 'Dashboard', icon: 'dashboard', to: '/' },
  { label: 'Activity', icon: 'activity', to: '/activity' },
]

const synexisLogoUrl = '/path/to/synexis-logo.png'

function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(true)

  return (
    <aside
      className={`flex h-full flex-col border-r border-teal-200 bg-linear-to-b from-white via-teal-50 to-teal-100 px-3 pb-5 pt-6 text-teal-900 transition-[width] duration-300 ease-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-100 text-teal-700">
            <img
              src={synexisLogoUrl}
              alt="Synexis logo"
              className="h-10 w-10 rounded-xl object-cover"
            />
          </div>
          {!isCollapsed && <span className="text-lg font-semibold tracking-wide">Synexis</span>}
        </div>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg text-teal-600 transition hover:bg-teal-100 hover:text-teal-800"
          onClick={() => setIsCollapsed((prev) => !prev)}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <FiChevronRight className={`h-4 w-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-teal-200 to-transparent" />

      <nav className="mt-6 space-y-2 text-sm">
        {navItems.map((item) => (
          <SidebarItem key={item.label} {...item} collapsed={isCollapsed} />
        ))}
      </nav>

      <div className="mt-auto">
        <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-teal-200 to-transparent" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `mt-4 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
              isActive
                ? 'bg-teal-100 text-teal-900 shadow-[0_0_0_1px_rgba(20,184,166,0.35)]'
                : 'text-teal-700 hover:bg-teal-100 hover:text-teal-800'
            } ${isCollapsed ? 'justify-center' : 'justify-start'}`
          }
          title={isCollapsed ? 'Settings' : undefined}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-100 text-teal-700">
            <FiSettings className="h-5 w-5" />
          </span>
          {!isCollapsed && 'Settings'}
        </NavLink>

        <div
          className={`mt-4 flex items-center gap-3 rounded-xl bg-teal-50 px-3 py-3 ${
            isCollapsed ? 'justify-center' : 'justify-start'
          }`}
        >
          <div className="h-10 w-10 rounded-full bg-radial-[at_top] from-white via-teal-300 to-teal-500" />
          {!isCollapsed && (
            <div className="text-xs">
              <p className="text-sm font-semibold text-teal-900">Nijanth R</p>
              <p className="text-[11px] text-teal-600">njanth.al23@bitsathy.ac.in</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

function SidebarItem({ label, icon, to, collapsed = false }) {
  const hasIcon = Boolean(icon)

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${
          isActive
            ? 'bg-teal-100 text-teal-900 shadow-[0_0_0_1px_rgba(20,184,166,0.35)]'
            : 'text-teal-700 hover:bg-teal-50 hover:text-teal-900'
        } ${collapsed ? 'justify-center' : 'justify-start'}`
      }
      title={collapsed ? label : undefined}
    >
      {hasIcon && (
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-teal-100 text-teal-700">
          <NavIcon type={icon} />
        </span>
      )}
      {(!collapsed || !hasIcon) && <span className="text-sm font-medium">{label}</span>}
    </NavLink>
  )
}

function NavIcon({ type }) {
  switch (type) {
    case 'dashboard':
      return <FiHome className="h-5 w-5" />
    case 'activity':
      return <FiActivity className="h-5 w-5" />
    default:
      return <FiHome className="h-5 w-5" />
  }
}

export default SideNav
