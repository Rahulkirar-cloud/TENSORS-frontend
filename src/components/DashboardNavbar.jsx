import React, { useState } from 'react'
import { Menu, Search, Bell } from 'lucide-react'
import { student } from '../data/mockData.js'

export default function DashboardNavbar({ onMenuClick }) {
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 h-16 bg-white/90 backdrop-blur border-b border-slate-100 flex items-center gap-3 px-4 lg:px-6">
      <button className="lg:hidden text-slate-500" onClick={onMenuClick} aria-label="Open menu">
        <Menu size={22} />
      </button>

      <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 w-full max-w-sm">
        <Search size={16} className="text-slate-400" />
        <input
          type="text"
          placeholder="Search courses, notes, topics..."
          className="bg-transparent text-sm outline-none w-full placeholder:text-slate-400"
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <div className="relative">
          <button
            className="relative text-slate-500 hover:text-ink"
            onClick={() => setNotifOpen((o) => !o)}
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-100 rounded-xl shadow-soft p-3 animate-fade-in">
              <p className="text-sm font-medium text-ink mb-2">Notifications</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="p-2 rounded-lg hover:bg-slate-50">Your DBMS quiz results are ready.</p>
                <p className="p-2 rounded-lg hover:bg-slate-50">New recommended topic: Graph Traversal.</p>
                <p className="p-2 rounded-lg hover:bg-slate-50">You're on a 12-day streak. Keep going!</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
            {student.avatarInitials}
          </span>
          <span className="hidden sm:block text-sm font-medium text-ink">{student.name.split(' ')[0]}</span>
        </div>
      </div>
    </header>
  )
}
