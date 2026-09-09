import React, { useMemo, useState } from 'react'
import { Search, FileText, Bookmark, Download, StickyNote } from 'lucide-react'
import Card from '../components/Card.jsx'
import { EmptyState } from '../components/Loader.jsx'
import { notesLibrary, noteSubjects } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

export default function Notes() {
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('All')
  const [bookmarks, setBookmarks] = useState(() => new Set(notesLibrary.filter((n) => n.bookmarked).map((n) => n.id)))
  const { showToast } = useToast()

  const toggleBookmark = (id, title) => {
    setBookmarks((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
        showToast(`Removed "${title}" from bookmarks`)
      } else {
        next.add(id)
        showToast(`Bookmarked "${title}"`)
      }
      return next
    })
  }

  const filtered = useMemo(() => {
    return notesLibrary.filter((n) => {
      const matchesSubject = subject === 'All' || n.subject === subject
      const matchesQuery = n.title.toLowerCase().includes(query.toLowerCase()) || n.topic.toLowerCase().includes(query.toLowerCase())
      return matchesSubject && matchesQuery
    })
  }, [query, subject])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">Notes & Resources</h1>
        <p className="text-slate-500 mt-1">Search across your subject notes and reference material.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes by title or topic..."
            className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400"
          />
        </div>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="px-3 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-indigo-400 bg-white"
        >
          {noteSubjects.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={StickyNote} title="No matching resources" description="Try a different search term or subject filter." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((n) => (
            <Card key={n.id} hover className="p-5 flex flex-col gap-3">
              <div className="flex items-start justify-between">
                <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <FileText size={18} />
                </span>
                <button onClick={() => toggleBookmark(n.id, n.title)} aria-label="Toggle bookmark">
                  <Bookmark
                    size={18}
                    className={bookmarks.has(n.id) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                  />
                </button>
              </div>
              <div>
                <h3 className="font-display font-semibold text-ink text-sm leading-snug">{n.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{n.subject} · {n.topic} · {n.pages} pages</p>
              </div>
              <button className="mt-auto flex items-center justify-center gap-1.5 text-sm font-medium text-indigo-600 border border-indigo-100 bg-indigo-50 rounded-xl py-2 hover:bg-indigo-100">
                <Download size={14} /> View / Download
              </button>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
