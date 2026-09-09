import React, { useState } from 'react'
import { Sparkles, RefreshCw } from 'lucide-react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import StudyPlanCard from '../components/StudyPlanCard.jsx'
import Modal from '../components/Modal.jsx'
import { Loader, EmptyState } from '../components/Loader.jsx'
import { subjectOptions } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

const difficulties = ['Beginner', 'Intermediate', 'Advanced']
const goals = ['Exam Preparation', 'Concept Mastery', 'Interview Prep', 'Revision Only']

function generateMockPlan({ subjects, dailyTime, goal }) {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']
  const topicsBySubject = {
    DBMS: ['ER Modeling', 'Normalization', 'Indexing', 'Transactions', 'Query Optimization'],
    React: ['Component Design', 'Hooks Deep Dive', 'State Management', 'Performance', 'Testing'],
    'Data Structures': ['Arrays & Strings', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting'],
    Java: ['OOP Basics', 'Collections', 'Exception Handling', 'Multithreading', 'Streams API'],
    'Operating Systems': ['Processes', 'Scheduling', 'Memory Management', 'Deadlocks', 'File Systems'],
    Aptitude: ['Time & Work', 'Percentages', 'Logical Reasoning', 'Probability', 'Data Interpretation'],
    'AI/ML': ['Linear Regression', 'Classification', 'Neural Nets Intro', 'Model Evaluation', 'Feature Engineering'],
  }
  const chosen = subjects.length ? subjects : ['DBMS']
  return days.map((day, i) => {
    const subject = chosen[i % chosen.length]
    const topic = (topicsBySubject[subject] || ['Core Concepts'])[i % 5]
    return {
      id: `plan-${i}`,
      day,
      subject,
      topic,
      duration: `${dailyTime} min`,
      practiceTask: `Solve 10 practice questions on ${topic}`,
      revisionTask: `Flash-review ${subject} notes for 10 min`,
      done: false,
    }
  })
}

export default function StudyPlanner() {
  const { showToast } = useToast()
  const [form, setForm] = useState({ subjects: ['DBMS', 'React'], dailyTime: 60, examDate: '', difficulty: 'Intermediate', goal: 'Exam Preparation' })
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState(null)
  const [editItem, setEditItem] = useState(null)

  const toggleSubject = (subject) => {
    setForm((f) => ({
      ...f,
      subjects: f.subjects.includes(subject) ? f.subjects.filter((s) => s !== subject) : [...f.subjects, subject],
    }))
  }

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setPlan(generateMockPlan(form))
      setLoading(false)
      showToast('Your AI study plan is ready!')
    }, 1100)
  }

  const toggleTask = (id) => {
    setPlan((p) => p.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">AI Study Planner</h1>
        <p className="text-slate-500 mt-1">Tell us your goal, and we'll build a day-by-day plan around it.</p>
      </div>

      <Card className="p-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-2">
            <label className="text-sm font-medium text-ink block mb-2">Select subjects</label>
            <div className="flex flex-wrap gap-2">
              {subjectOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSubject(s)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-colors ${
                    form.subjects.includes(s)
                      ? 'bg-indigo-600 border-indigo-600 text-white'
                      : 'border-slate-200 text-slate-600 hover:border-indigo-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-2">Daily study time (min)</label>
            <input
              type="number"
              min={15}
              step={15}
              value={form.dailyTime}
              onChange={(e) => setForm({ ...form, dailyTime: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-2">Exam date</label>
            <input
              type="date"
              value={form.examDate}
              onChange={(e) => setForm({ ...form, examDate: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-2">Difficulty level</label>
            <select
              value={form.difficulty}
              onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 bg-white"
            >
              {difficulties.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-2">Learning goal</label>
            <select
              value={form.goal}
              onChange={(e) => setForm({ ...form, goal: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 bg-white"
            >
              {goals.map((g) => <option key={g}>{g}</option>)}
            </select>
          </div>
        </div>

        <Button className="mt-5" icon={Sparkles} onClick={handleGenerate} disabled={loading || form.subjects.length === 0}>
          Generate AI Study Plan
        </Button>
        {form.subjects.length === 0 && <p className="text-xs text-red-500 mt-2">Select at least one subject.</p>}
      </Card>

      {loading && <Loader label="Generating your personalized plan..." />}

      {!loading && plan && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-ink">Your 5-Day Plan</h2>
            <Button variant="secondary" size="sm" icon={RefreshCw} onClick={handleGenerate}>Regenerate plan</Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {plan.map((item) => (
              <StudyPlanCard key={item.id} item={item} onToggle={toggleTask} onEdit={setEditItem} />
            ))}
          </div>
        </div>
      )}

      {!loading && !plan && (
        <EmptyState
          icon={Sparkles}
          title="No plan generated yet"
          description="Fill in your subjects and goals above, then generate your first AI study plan."
        />
      )}

      <Modal open={!!editItem} onClose={() => setEditItem(null)} title="Edit task" footer={
        <Button onClick={() => { showToast('Task updated'); setEditItem(null) }}>Save changes</Button>
      }>
        {editItem && (
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">Topic</label>
              <input
                defaultValue={editItem.topic}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink block mb-1.5">Duration</label>
              <input
                defaultValue={editItem.duration}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
              />
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
