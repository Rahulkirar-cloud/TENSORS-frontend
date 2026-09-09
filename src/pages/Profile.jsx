import React, { useState } from 'react'
import { Pencil, Save, X } from 'lucide-react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import StatCard from '../components/StatCard.jsx'
import { BookOpen, Clock, Trophy } from 'lucide-react'
import { student } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

export default function Profile() {
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({ ...student })
  const { showToast } = useToast()

  const save = () => {
    setEditing(false)
    showToast('Profile updated')
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-semibold text-ink">Profile</h1>
        {!editing ? (
          <Button variant="secondary" size="sm" icon={Pencil} onClick={() => setEditing(true)}>Edit Profile</Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" icon={X} onClick={() => { setForm({ ...student }); setEditing(false) }}>Cancel</Button>
            <Button size="sm" icon={Save} onClick={save}>Save</Button>
          </div>
        )}
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-display font-semibold">
            {student.avatarInitials}
          </span>
          <div>
            <h2 className="font-display font-semibold text-ink text-lg">{form.name}</h2>
            <p className="text-sm text-slate-500">{form.email}</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1.5">Full name</label>
            {editing ? (
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
              />
            ) : (
              <p className="text-sm text-ink">{form.name}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-medium text-slate-500 block mb-1.5">Email</label>
            {editing ? (
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
              />
            ) : (
              <p className="text-sm text-ink">{form.email}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-500 block mb-1.5">Education</label>
            {editing ? (
              <input
                value={form.education}
                onChange={(e) => setForm({ ...form, education: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
              />
            ) : (
              <p className="text-sm text-ink">{form.education}</p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-slate-500 block mb-1.5">Learning goals</label>
            {editing ? (
              <textarea
                value={form.goals}
                onChange={(e) => setForm({ ...form, goals: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 resize-none"
              />
            ) : (
              <p className="text-sm text-ink">{form.goals}</p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <label className="text-xs font-medium text-slate-500 block mb-2">Skills</label>
          <div className="flex flex-wrap gap-2">
            {form.skills.map((s) => (
              <span key={s} className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4">
        <StatCard icon={BookOpen} label="Courses Enrolled" value="6" accent="indigo" />
        <StatCard icon={Clock} label="Total Learning Hours" value="144h" accent="violet" />
        <StatCard icon={Trophy} label="Avg Quiz Score" value="87%" accent="amber" />
      </div>
    </div>
  )
}
