import React from 'react'

export default function Card({ children, className = '', hover = false, as: As = 'div', ...props }) {
  return (
    <As
      className={`bg-white rounded-2xl border border-slate-100 shadow-card ${
        hover ? 'transition-shadow duration-200 hover:shadow-soft hover:border-slate-200' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}
