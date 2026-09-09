import React, { useEffect, useRef, useState } from 'react'
import { Send, Paperclip, Trash2, Sparkles } from 'lucide-react'
import Card from '../components/Card.jsx'
import ChatMessage from '../components/ChatMessage.jsx'
import { suggestedQuestions, mockAiResponses } from '../data/mockData.js'
import { useToast } from '../components/Toast.jsx'

const initialMessages = [
  { id: 'm0', role: 'ai', content: 'Hi! I\'m your AI Doubt Solver. Ask me anything from your syllabus — concepts, math problems, or code.' },
]

export default function DoubtSolver() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  const send = (text) => {
    const question = text.trim()
    if (!question) return
    setMessages((m) => [...m, { id: Date.now(), role: 'user', content: question }])
    setInput('')
    setLoading(true)
    setTimeout(() => {
      const key = question.toLowerCase()
      const response = mockAiResponses[key] || mockAiResponses.default
      setMessages((m) => [...m, { id: Date.now() + 1, role: 'ai', content: response }])
      setLoading(false)
    }, 1000)
  }

  const clearChat = () => {
    setMessages(initialMessages)
    showToast('Chat cleared')
  }

  return (
    <div className="flex flex-col h-[calc(100vh-7.5rem)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-display font-semibold text-ink">AI Doubt Solver</h1>
          <p className="text-slate-500 mt-1 text-sm">Ask a question the way you'd ask a tutor.</p>
        </div>
        <button
          onClick={clearChat}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-red-600"
        >
          <Trash2 size={15} /> Clear chat
        </button>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto scroll-thin p-5 space-y-5">
          {messages.map((m) => (
            <ChatMessage key={m.id} role={m.role === 'ai' ? 'ai' : 'user'} content={m.content} />
          ))}
          {loading && <ChatMessage role="ai" loading />}
        </div>

        {messages.length <= 1 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100"
              >
                <Sparkles size={12} /> {q}
              </button>
            ))}
          </div>
        )}

        <form
          onSubmit={(e) => { e.preventDefault(); send(input) }}
          className="border-t border-slate-100 p-3 flex items-center gap-2"
        >
          <button type="button" className="text-slate-400 hover:text-ink p-2" aria-label="Attach file">
            <Paperclip size={18} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your doubt..."
            className="flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-indigo-300"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-indigo-600 text-white rounded-xl p-2.5 disabled:opacity-40 hover:bg-indigo-700"
            aria-label="Send"
          >
            <Send size={18} />
          </button>
        </form>
      </Card>
    </div>
  )
}
