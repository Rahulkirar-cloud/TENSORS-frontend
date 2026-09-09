import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Clock, Trophy, Flame, Play, Sparkles, ArrowRight } from 'lucide-react'
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'
import StatCard from '../components/StatCard.jsx'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import { EmptyState } from '../components/Loader.jsx'
import { dashboardStats, todayPlan, weeklyProgress, recommended, student } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

const statIcons = { courses: BookOpen, hours: Clock, quiz: Trophy, streak: Flame }
const statAccents = { courses: 'indigo', hours: 'violet', quiz: 'amber', streak: 'indigo' }

export default function Dashboard() {
  const [tasks, setTasks] = useState(todayPlan)
  const { showToast } = useToast()

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t
        if (!t.done) showToast(`Marked "${t.topic}" as complete`)
        return { ...t, done: !t.done }
      })
    )
  }

  const completed = tasks.filter((t) => t.done).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">Good Morning, {student.name.split(' ')[0]} 👋</h1>
        <p className="text-slate-500 mt-1">Let's continue your learning journey.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((s) => (
          <StatCard key={s.id} icon={statIcons[s.id]} label={s.label} value={s.value} delta={s.delta} accent={statAccents[s.id]} />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's plan */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="font-display font-semibold text-ink">Today's Learning Plan</h2>
            <span className="text-xs text-slate-500">{completed}/{tasks.length} done</span>
          </div>
          <ProgressBar value={(completed / tasks.length) * 100} />

          <div className="mt-4 space-y-3">
            {tasks.length === 0 ? (
              <EmptyState icon={BookOpen} title="No tasks yet" description="Generate a plan to see today's tasks here." />
            ) : (
              tasks.map((t) => (
                <div
                  key={t.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    t.done ? 'border-emerald-100 bg-emerald-50/50' : 'border-slate-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={t.done}
                    onChange={() => toggleTask(t.id)}
                    className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-400"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${t.done ? 'text-slate-400 line-through' : 'text-ink'}`}>
                      {t.subject} — {t.topic}
                    </p>
                    <p className="text-xs text-slate-400">{t.duration}</p>
                  </div>
                  {!t.done && (
                    <Button size="sm" variant="secondary" icon={Play}>Start</Button>
                  )}
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Recommended */}
        <Card className="p-5">
          <h2 className="font-display font-semibold text-ink mb-4 flex items-center gap-2">
            <Sparkles size={16} className="text-indigo-500" /> Recommended for you
          </h2>
          <div className="space-y-3">
            {recommended.map((r) => (
              <div key={r.id} className="p-3 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{r.subject}</span>
                <p className="text-sm font-medium text-ink mt-2">{r.title}</p>
                <p className="text-xs text-slate-400 mt-1">{r.reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-5">
          <h2 className="font-display font-semibold text-ink mb-4">Weekly Learning Progress</h2>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyProgress} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="hoursGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4338CA" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#4338CA" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEF2" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #EEEEF2', fontSize: 13 }} />
                <Area type="monotone" dataKey="hours" stroke="#4338CA" strokeWidth={2} fill="url(#hoursGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5 flex flex-col">
          <h2 className="font-display font-semibold text-ink mb-4">Course Progress</h2>
          <div className="space-y-4 flex-1">
            <div>
              <div className="flex justify-between text-sm mb-1.5"><span className="text-slate-600">Modern React & Redux</span><span className="text-slate-400">45%</span></div>
              <ProgressBar value={45} color="violet" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1.5"><span className="text-slate-600">Discrete Mathematics</span><span className="text-slate-400">88%</span></div>
              <ProgressBar value={88} />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1.5"><span className="text-slate-600">Operating Systems</span><span className="text-slate-400">60%</span></div>
              <ProgressBar value={60} color="amber" />
            </div>
          </div>
          <Link to="/dashboard/courses" className="text-sm font-medium text-indigo-600 hover:underline flex items-center gap-1 mt-4">
            View all courses <ArrowRight size={14} />
          </Link>
        </Card>
      </div>
    </div>
  )
}
