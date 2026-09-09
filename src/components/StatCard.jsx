import React from 'react'
import Card from './Card.jsx'

export default function StatCard({ icon: Icon, label, value, delta, accent = 'indigo' }) {
  const accents = {
    indigo: 'bg-indigo-50 text-indigo-600',
    violet: 'bg-violet-400/10 text-violet-500',
    amber: 'bg-amber-400/10 text-amber-500',
  }
  return (
    <Card className="p-5 flex items-start justify-between">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-2xl font-display font-semibold text-ink mt-1">{value}</p>
        {delta && <p className="text-xs text-slate-400 mt-1">{delta}</p>}
      </div>
      {Icon && (
        <span className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${accents[accent]}`}>
          <Icon size={20} strokeWidth={2} />
        </span>
      )}
    </Card>
  )
}
