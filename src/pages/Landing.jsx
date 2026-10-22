import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles, MessageCircleQuestion, Fingerprint, ListChecks, LineChart, StickyNote,
  CheckCircle2, ArrowRight, Target, Calendar, Rocket,
} from 'lucide-react'


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
         

          <div className="flex flex-wrap gap-8 mt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-display font-semibold text-ink">{s.value}</p>
                <p className="text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Features */}
      <section id="features" className="bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-5 py-20">
          <div className="max-w-xl mb-12">
            <h2 className="text-3xl font-display font-semibold text-ink">Everything you need to study with intent</h2>
            <p className="text-slate-500 mt-3">Six tools that work together, so plans, doubts and progress stay in sync.</p>
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
        
        </div>
      </section>
    </div>
  )
}
