import React from 'react'
import { Sparkles, User } from 'lucide-react'
import { TypingDots } from './Loader.jsx'

export default function ChatMessage({ role, content, loading }) {
  const isUser = role === 'user'
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
          isUser ? 'bg-slate-200 text-slate-600' : 'bg-indigo-600 text-white'
        }`}
      >
        {isUser ? <User size={15} /> : <Sparkles size={15} />}
      </span>
      <div
        className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${
          isUser ? 'bg-indigo-600 text-white rounded-tr-sm' : 'bg-slate-50 text-ink rounded-tl-sm border border-slate-100'
        }`}
      >
        {loading ? <TypingDots /> : content}
      </div>
    </div>
  )
}
