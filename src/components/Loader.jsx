import React from 'react'
import { Loader2 } from 'lucide-react'

export function Loader({ label = 'Loading...', size = 20 }) {
  return (
    <div className="flex items-center justify-center gap-2 text-slate-500 py-10">
      <Loader2 size={size} className="animate-spin" />
      <span className="text-sm">{label}</span>
    </div>
  )
}

export function TypingDots() {
  return (
    <div className="dot-pulse flex items-center gap-1 px-1">
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 inline-block" />
    </div>
  )
}

export function EmptyState({ icon: Icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6">
      {Icon && (
        <span className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-4">
          <Icon size={26} strokeWidth={1.75} />
        </span>
      )}
      <h3 className="font-display font-semibold text-ink">{title}</h3>
      {description && <p className="text-sm text-slate-500 mt-1 max-w-xs">{description}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  )
}
