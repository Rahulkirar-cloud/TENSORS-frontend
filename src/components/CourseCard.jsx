import React from 'react'
import * as Icons from 'lucide-react'
import Card from './Card.jsx'
import ProgressBar from './ProgressBar.jsx'
import Button from './Button.jsx'

export default function CourseCard({ course, onContinue }) {
  const Icon = Icons[course.icon] || Icons.BookOpen
  return (
    <Card hover className="p-5 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <span className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
          <Icon size={22} strokeWidth={2} />
        </span>
        <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{course.category}</span>
      </div>
      <div>
        <h3 className="font-display font-semibold text-ink leading-snug">{course.name}</h3>
        <p className="text-sm text-slate-500 mt-1">by {course.instructor} · {course.hours}</p>
      </div>
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1.5">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <ProgressBar value={course.progress} />
      </div>
      <Button variant="secondary" size="sm" className="w-full" onClick={() => onContinue?.(course)}>
        Continue Learning
      </Button>
    </Card>
  )
}
