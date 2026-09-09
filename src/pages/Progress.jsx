import React from 'react'
import * as Icons from 'lucide-react'
import { Flame } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line } from 'recharts'
import Card from '../components/Card.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import { weeklyProgress, quizPerformance, achievements, courses, student } from '../data/mockData.js'

export default function Progress() {
  const avgCompletion = Math.round(courses.reduce((s, c) => s + c.progress, 0) / courses.length)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">Your Progress</h1>
        <p className="text-slate-500 mt-1">A closer look at how your learning is trending.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card className="p-5 flex items-center gap-4">
          <span className="w-11 h-11 rounded-xl bg-amber-400/10 text-amber-500 flex items-center justify-center">
            <Flame size={22} />
          </span>
          <div>
            <p className="text-2xl font-display font-semibold text-ink">{student.streak} days</p>
            <p className="text-sm text-slate-500">Current streak</p>
          </div>
        </Card>
        <Card className="p-5">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-slate-600">Avg. course completion</span>
            <span className="text-slate-400">{avgCompletion}%</span>
          </div>
          <ProgressBar value={avgCompletion} />
        </Card>
        <Card className="p-5">
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-slate-600">Overall quiz accuracy</span>
            <span className="text-slate-400">87%</span>
          </div>
          <ProgressBar value={87} color="amber" />
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h2 className="font-display font-semibold text-ink mb-4">Weekly Learning Hours</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weeklyProgress} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEF2" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #EEEEF2', fontSize: 13 }} />
                <Line type="monotone" dataKey="hours" stroke="#7C5CFC" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="font-display font-semibold text-ink mb-4">Subject-wise Quiz Performance</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={quizPerformance} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#EEEEF2" vertical={false} />
                <XAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 12, fill: '#6C6C7E' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #EEEEF2', fontSize: 13 }} />
                <Bar dataKey="score" fill="#4338CA" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="font-display font-semibold text-ink mb-4">Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {achievements.map((a) => {
            const Icon = Icons[a.icon] || Icons.Award
            return (
              <div
                key={a.id}
                className={`rounded-2xl border p-4 text-center ${
                  a.earned ? 'border-indigo-100 bg-indigo-50/40' : 'border-slate-100 opacity-50'
                }`}
              >
                <span className={`w-11 h-11 mx-auto rounded-xl flex items-center justify-center mb-2 ${
                  a.earned ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                  <Icon size={20} />
                </span>
                <p className="text-sm font-medium text-ink">{a.title}</p>
                <p className="text-xs text-slate-500 mt-1">{a.description}</p>
              </div>
            )
          })}
        </div>
      </Card>
    </div>
  )
}
