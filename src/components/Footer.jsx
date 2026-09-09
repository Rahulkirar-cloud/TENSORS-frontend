import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="max-w-6xl mx-auto px-5 py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center">
              <GraduationCap size={18} />
            </span>
            <span className="font-display font-semibold text-white">EduSmart AI</span>
          </div>
          <p className="text-sm text-slate-400 max-w-xs">
            An AI-powered learning companion that adapts to how you study — built for students who want results, not busywork.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/#features" className="hover:text-white">Features</a></li>
            <li><a href="/#about" className="hover:text-white">About</a></li>
            <li><Link to="/login" className="hover:text-white">Log in</Link></li>
            <li><Link to="/signup" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white mb-3">Follow us</p>
          <div className="flex gap-3">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} EduSmart AI. All rights reserved.
      </div>
    </footer>
  )
}
