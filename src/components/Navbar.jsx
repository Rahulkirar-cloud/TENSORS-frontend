import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Menu, X } from 'lucide-react'
import Button from './Button.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 bg-paper/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
            <GraduationCap size={18} />
          </span>
          <span className="font-display font-semibold text-ink">SmartSched</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="/#features" className="hover:text-ink">Features</a>
          <a href="" className="hover:text-ink">How It Works</a>
          <a href="/#about" className="hover:text-ink">About</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button as={Link} to="/login" variant="ghost" size="sm">Log in</Button>
          <Button as={Link} to="/signup" variant="primary" size="sm">SignUp</Button>
        </div>

        <button className="md:hidden text-slate-600" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 px-5 py-4 space-y-3 animate-fade-in">
          <a href="/#features" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>How It Works</a>
          <a href="/#about" className="block text-sm text-slate-600" onClick={() => setOpen(false)}>About</a>
          <div className="flex gap-3 pt-2">
            <Button as={Link} to="/login" variant="secondary" size="sm" className="flex-1">Log in</Button>
            <Button as={Link} to="/signup" variant="primary" size="sm" className="flex-1">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
