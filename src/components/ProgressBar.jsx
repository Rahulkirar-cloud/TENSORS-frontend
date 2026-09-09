import React from 'react'

export default function ProgressBar({ value, size = 'md', color = 'indigo' }) {
  const heights = { sm: 'h-1.5', md: 'h-2', lg: 'h-3' }
  const colors = {
    indigo: 'bg-indigo-500',
    violet: 'bg-violet-500',
    amber: 'bg-amber-400',
  }
  return (
    <div className={`w-full bg-slate-100 rounded-full ${heights[size]} overflow-hidden`}>
      <div
        className={`${heights[size]} ${colors[color]} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
