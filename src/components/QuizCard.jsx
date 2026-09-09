import React from 'react'
import { Check, X } from 'lucide-react'

export default function QuizCard({ question, selected, revealed, onSelect }) {
  return (
    <div>
      <h3 className="font-display text-lg font-semibold text-ink leading-snug mb-6">{question.question}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex
          const isSelected = selected === i
          let stateClasses = 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/50'
          if (revealed) {
            if (isCorrect) stateClasses = 'border-emerald-400 bg-emerald-50 text-emerald-700'
            else if (isSelected && !isCorrect) stateClasses = 'border-red-300 bg-red-50 text-red-600'
            else stateClasses = 'border-slate-200 opacity-60'
          } else if (isSelected) {
            stateClasses = 'border-indigo-500 bg-indigo-50 text-indigo-700'
          }
          return (
            <button
              key={i}
              onClick={() => !revealed && onSelect(i)}
              disabled={revealed}
              className={`flex items-center justify-between text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${stateClasses}`}
            >
              {option}
              {revealed && isCorrect && <Check size={16} className="text-emerald-500 shrink-0" />}
              {revealed && isSelected && !isCorrect && <X size={16} className="text-red-500 shrink-0" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
