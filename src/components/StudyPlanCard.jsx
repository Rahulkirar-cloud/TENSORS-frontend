import React from 'react'
import { CheckCircle2, Circle, Pencil, Clock } from 'lucide-react'

export default function StudyPlanCard({ item, onToggle, onEdit }) {
  return (
    <div className={`rounded-2xl border p-4 flex flex-col gap-3 transition-colors ${
      item.done ? 'border-emerald-200 bg-emerald-50/40' : 'border-slate-100 bg-white'
    }`}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{item.day}</span>
          <h4 className="font-display font-semibold text-ink mt-2">{item.subject}</h4>
          <p className="text-sm text-slate-500">{item.topic}</p>
        </div>
        <button onClick={() => onToggle(item.id)} aria-label="Toggle complete">
          {item.done ? (
            <CheckCircle2 size={22} className="text-emerald-500" />
          ) : (
            <Circle size={22} className="text-slate-300 hover:text-indigo-400" />
          )}
        </button>
      </div>

      <div className="text-xs text-slate-500 space-y-1">
        <p className="flex items-center gap-1.5"><Clock size={13} /> {item.duration}</p>
        <p><span className="text-slate-400">Practice:</span> {item.practiceTask}</p>
        <p><span className="text-slate-400">Revision:</span> {item.revisionTask}</p>
      </div>

      <button
        onClick={() => onEdit(item)}
        className="self-start text-xs font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1"
      >
        <Pencil size={12} /> Edit task
      </button>
    </div>
  )
}
