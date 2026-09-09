import React, { useState } from 'react'
import { BookOpen } from 'lucide-react'
import CourseCard from '../components/CourseCard.jsx'
import { EmptyState } from '../components/Loader.jsx'
import { courses, courseCategories } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

export default function Courses() {
  const [category, setCategory] = useState('All')
  const { showToast } = useToast()

  const filtered = category === 'All' ? courses : courses.filter((c) => c.category === category)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">My Courses</h1>
        <p className="text-slate-500 mt-1">Pick up where you left off.</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {courseCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
              category === c
                ? 'bg-indigo-600 border-indigo-600 text-white'
                : 'border-slate-200 text-slate-600 hover:border-indigo-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={BookOpen} title="No courses in this category" description="Try a different category or explore all courses." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} onContinue={() => showToast(`Resuming "${c.name}"`)} />
          ))}
        </div>
      )}
    </div>
  )
}
