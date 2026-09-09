import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Bell, Palette, Globe, Shield, LogOut } from 'lucide-react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import { student } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-11 h-6 rounded-full relative transition-colors ${checked ? 'bg-indigo-600' : 'bg-slate-200'}`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

export default function Settings() {
  const { showToast } = useToast()
  const [notifs, setNotifs] = useState({ email: true, push: true, weekly: false })
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('English')
  const [profileVisible, setProfileVisible] = useState(true)

  const handleToggle = (key) => {
    setNotifs((n) => {
      const next = { ...n, [key]: !n[key] }
      showToast('Notification preferences updated')
      return next
    })
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-display font-semibold text-ink">Settings</h1>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <User size={18} className="text-indigo-600" />
          <h2 className="font-display font-semibold text-ink">Account</h2>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-ink font-medium">{student.name}</p>
            <p className="text-slate-500">{student.email}</p>
          </div>
          <Button as={Link} to="/dashboard/profile" variant="secondary" size="sm">Edit Profile</Button>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Bell size={18} className="text-indigo-600" />
          <h2 className="font-display font-semibold text-ink">Notifications</h2>
        </div>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email notifications' },
            { key: 'push', label: 'Push notifications' },
            { key: 'weekly', label: 'Weekly progress summary' },
          ].map((n) => (
            <div key={n.key} className="flex items-center justify-between">
              <span className="text-sm text-slate-600">{n.label}</span>
              <Toggle checked={notifs[n.key]} onChange={() => handleToggle(n.key)} />
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Palette size={18} className="text-indigo-600" />
          <h2 className="font-display font-semibold text-ink">Appearance</h2>
        </div>
        <div className="flex gap-3">
          {['light', 'dark', 'system'].map((t) => (
            <button
              key={t}
              onClick={() => { setTheme(t); showToast(`Theme set to ${t}`) }}
              className={`flex-1 capitalize text-sm px-3 py-2 rounded-xl border ${
                theme === t ? 'border-indigo-500 bg-indigo-50 text-indigo-600' : 'border-slate-200 text-slate-600'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Globe size={18} className="text-indigo-600" />
          <h2 className="font-display font-semibold text-ink">Language</h2>
        </div>
        <select
          value={language}
          onChange={(e) => { setLanguage(e.target.value); showToast(`Language set to ${e.target.value}`) }}
          className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 bg-white"
        >
          {['English', 'Hindi', 'Spanish', 'French'].map((l) => <option key={l}>{l}</option>)}
        </select>
      </Card>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Shield size={18} className="text-indigo-600" />
          <h2 className="font-display font-semibold text-ink">Privacy</h2>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-600">Make my profile visible to other students</span>
          <Toggle checked={profileVisible} onChange={() => { setProfileVisible((v) => !v); showToast('Privacy setting updated') }} />
        </div>
      </Card>

      <Button as={Link} to="/" variant="danger" icon={LogOut} className="w-full">Logout</Button>
    </div>
  )
}
