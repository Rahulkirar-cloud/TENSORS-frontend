import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, GraduationCap, Eye, EyeOff } from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import { useToast } from '../components/Toast.jsx'

export default function Login() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.email) next.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.password) next.password = 'Password is required.'
    else if (form.password.length < 6) next.password = 'Password must be at least 6 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      showToast(`Welcome back!`)
      navigate('/dashboard')
    }, 700)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-12">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center text-center mb-7">
          <span className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3">
            <GraduationCap size={22} />
          </span>
          <h1 className="text-2xl font-display font-semibold text-ink">Welcome back</h1>
          <p className="text-sm text-slate-500 mt-1">Log in to continue your learning journey.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none focus:border-indigo-400 ${
                  errors.email ? 'border-red-300' : 'border-slate-200'
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-ink block mb-1.5">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className={`w-full pl-9 pr-9 py-2.5 rounded-xl border text-sm outline-none focus:border-indigo-400 ${
                  errors.password ? 'border-red-300' : 'border-slate-200'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-400"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-600 font-medium hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={submitting}>
            {submitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Don't have an account? <Link to="/signup" className="text-indigo-600 font-medium hover:underline">Sign up</Link>
        </p>
      </Card>
    </div>
  )
}
