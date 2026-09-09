import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, GraduationCap } from 'lucide-react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import { useToast } from '../components/Toast.jsx'

export default function Signup() {
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email) next.email = 'Email is required.'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.password) next.password = 'Password is required.'
    else if (form.password.length < 6) next.password = 'Password must be at least 6 characters.'
    if (form.confirm !== form.password) next.confirm = 'Passwords do not match.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      showToast('Account created. Let\'s set up your first plan!')
      navigate('/dashboard')
    }, 700)
  }

  const field = (key, label, type, Icon, placeholder) => (
    <div>
      <label className="text-sm font-medium text-ink block mb-1.5">{label}</label>
      <div className="relative">
        <Icon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type={type}
          value={form[key]}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          placeholder={placeholder}
          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none focus:border-indigo-400 ${
            errors[key] ? 'border-red-300' : 'border-slate-200'
          }`}
        />
      </div>
      {errors[key] && <p className="text-xs text-red-500 mt-1">{errors[key]}</p>}
    </div>
  )

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 py-12">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center text-center mb-7">
          <span className="w-11 h-11 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3">
            <GraduationCap size={22} />
          </span>
          <h1 className="text-2xl font-display font-semibold text-ink">Create your account</h1>
          <p className="text-sm text-slate-500 mt-1">Start your personalized learning plan today.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {field('name', 'Full name', 'text', User, 'Your name')}
          {field('email', 'Email', 'email', Mail, 'you@example.com')}
          {field('password', 'Password', 'password', Lock, '••••••••')}
          {field('confirm', 'Confirm password', 'password', Lock, '••••••••')}

          <Button type="submit" className="w-full" size="lg" disabled={submitting}>
            {submitting ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account? <Link to="/login" className="text-indigo-600 font-medium hover:underline">Log in</Link>
        </p>
      </Card>
    </div>
  )
}
