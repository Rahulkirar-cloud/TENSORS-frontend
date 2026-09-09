import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, CalendarClock, MessageCircleQuestion, BookOpen,
  StickyNote, ListChecks, LineChart, User, Settings, LogOut, GraduationCap, X,
} from 'lucide-react'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/dashboard/planner', label: 'AI Study Planner', icon: CalendarClock },
  { to: '/dashboard/doubt-solver', label: 'AI Doubt Solver', icon: MessageCircleQuestion },
  { to: '/dashboard/courses', label: 'My Courses', icon: BookOpen },
  { to: '/dashboard/notes', label: 'Notes', icon: StickyNote },
  { to: '/dashboard/quiz', label: 'Quizzes', icon: ListChecks },
  { to: '/dashboard/progress', label: 'Progress', icon: LineChart },
  { to: '/dashboard/profile', label: 'Profile', icon: User },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-ink/40 z-30 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-64 bg-white border-r border-slate-100 z-40 flex flex-col
        transition-transform duration-200 lg:translate-x-0
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
              <GraduationCap size={18} />
            </span>
            <span className="font-display font-semibold text-ink">EduSmart AI</span>
          </div>
          <button className="lg:hidden text-slate-400" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto scroll-thin px-3 py-4 space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-ink'
                }`
              }
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-slate-100">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={18} strokeWidth={2} />
            Logout
          </NavLink>
        </div>
      </aside>
    </>
  )
}
