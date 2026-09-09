import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles, MessageCircleQuestion, Fingerprint, ListChecks, LineChart, StickyNote,
  CheckCircle2, ArrowRight, Target, Calendar, Rocket,
} from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'

const features = [
  { icon: Calendar, title: 'AI Study Planner', desc: 'A daily plan built around your exam date, subjects and pace — regenerated the moment your goals change.' },
  { icon: MessageCircleQuestion, title: 'AI Doubt Solver', desc: 'Ask a question in plain language and get a worked explanation, not just a final answer.' },
  { icon: Fingerprint, title: 'Personalized Learning', desc: 'Recommendations shift based on what you actually struggle with, not a fixed syllabus order.' },
  { icon: ListChecks, title: 'Smart Quizzes', desc: 'Short, targeted quizzes that surface the exact topics worth revising before an exam.' },
  { icon: LineChart, title: 'Progress Tracking', desc: 'See learning hours, quiz accuracy and streaks in one place, updated as you study.' },
  { icon: StickyNote, title: 'Notes & Resources', desc: 'A searchable library of notes and references, organized by subject and topic.' },
]

const steps = [
  { icon: Target, title: 'Choose your subjects', desc: 'Tell EduSmart AI what you\u2019re studying right now.' },
  { icon: Rocket, title: 'Set your learning goals', desc: 'Pick an exam date, difficulty and daily time budget.' },
  { icon: Sparkles, title: 'Get your personalized AI plan', desc: 'A day-by-day plan is generated instantly.' },
  { icon: CheckCircle2, title: 'Learn and practice', desc: 'Work through topics, practice tasks and quizzes.' },
  { icon: LineChart, title: 'Track your progress', desc: 'Watch your accuracy and streak improve week over week.' },
]

const stats = [
  { value: '10K+', label: 'Students' },
  { value: '500+', label: 'Courses' },
  { value: '50K+', label: 'Questions Solved' },
]

export default function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full mb-5">
            <Sparkles size={13} /> Built for how students actually study
          </span>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-ink leading-[1.1]">
            Learn Smarter. Achieve More.
          </h1>
          <p className="text-slate-500 text-lg mt-5 max-w-md">
            Your AI-powered personal learning companion for smarter, personalized and effective education.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button as={Link} to="/signup" size="lg" icon={ArrowRight} iconPosition="right">Start Learning</Button>
            <Button as="a" href="#features" variant="secondary" size="lg">Explore Features</Button>
          </div>

          <div className="flex flex-wrap gap-8 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-display font-semibold text-ink">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <Card className="p-6 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl" />
          <p className="text-xs font-medium text-slate-400 mb-3">Today's AI Study Plan</p>
          <div className="space-y-3">
            {[
              { subject: 'DBMS', topic: 'Normalization (1NF\u20133NF)', done: true },
              { subject: 'React', topic: 'Custom Hooks Deep Dive', done: false },
              { subject: 'DSA', topic: 'Binary Search Trees', done: false },
            ].map((t) => (
              <div key={t.subject} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 size={20} className={t.done ? 'text-emerald-500' : 'text-slate-200'} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">{t.subject}</p>
                  <p className="text-xs text-slate-500">{t.topic}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-indigo-600 bg-indigo-50 rounded-xl px-3 py-2.5">
            <Sparkles size={14} />
            "Focus 15 extra minutes on Binary Search Trees today \u2014 it came up twice in your last quiz."
          </div>
        </Card>
      </section>

      {/* Features */}
      <section id="features" className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-display font-semibold text-ink">Everything you need to study with intent</h2>
            <p className="text-slate-500 mt-3">Six tools that work together, so plans, doubts and progress stay in sync.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <Card key={f.title} hover className="p-6">
                <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <f.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="font-display font-semibold text-ink">{f.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-5 py-20">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-display font-semibold text-ink">How it works</h2>
          <p className="text-slate-500 mt-3">Five steps from signing up to your first tracked study session.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl bg-ink text-white flex items-center justify-center font-display font-semibold text-sm">
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-slate-200" />
                )}
              </div>
              <h3 className="font-medium text-ink text-sm">{s.title}</h3>
              <p className="text-sm text-slate-500 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="about" className="max-w-6xl mx-auto px-5 pb-20">
        <div className="bg-ink rounded-3xl px-8 py-14 text-center relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
          <h2 className="relative text-3xl font-display font-semibold text-white">Ready to make learning smarter?</h2>
          <p className="relative text-slate-400 mt-3 max-w-md mx-auto">
            Set up your first AI study plan in under two minutes. No credit card required.
          </p>
          <Button as={Link} to="/signup" size="lg" className="relative mt-7">Get Started</Button>
        </div>
      </section>
    </div>
  )
}
