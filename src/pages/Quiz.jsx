import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Trophy, CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import QuizCard from '../components/QuizCard.jsx'
import { quizBank } from '../data/mockData.js'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [finished, setFinished] = useState(false)

  const question = quizBank[current]
  const total = quizBank.length
  const answered = answers[question.id] !== undefined

  const selectAnswer = (i) => setAnswers((a) => ({ ...a, [question.id]: i }))

  const next = () => {
    if (current < total - 1) setCurrent((c) => c + 1)
    else setFinished(true)
  }
  const prev = () => current > 0 && setCurrent((c) => c - 1)

  const restart = () => {
    setAnswers({})
    setCurrent(0)
    setFinished(false)
  }

  if (finished) {
    const correctCount = quizBank.filter((q) => answers[q.id] === q.correctIndex).length
    const wrongCount = total - correctCount
    const accuracy = Math.round((correctCount / total) * 100)
    const weakTopics = quizBank.filter((q) => answers[q.id] !== q.correctIndex).map((q) => q.question)

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="p-8 text-center">
          <span className="w-16 h-16 rounded-2xl bg-amber-400/10 text-amber-500 flex items-center justify-center mx-auto mb-4">
            <Trophy size={30} />
          </span>
          <h1 className="text-2xl font-display font-semibold text-ink">Quiz Complete!</h1>
          <p className="text-slate-500 mt-1">Here's how you did.</p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div>
              <p className="text-2xl font-display font-semibold text-ink">{accuracy}%</p>
              <p className="text-xs text-slate-500 mt-1">Accuracy</p>
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-emerald-500">{correctCount}</p>
              <p className="text-xs text-slate-500 mt-1">Correct</p>
            </div>
            <div>
              <p className="text-2xl font-display font-semibold text-red-500">{wrongCount}</p>
              <p className="text-xs text-slate-500 mt-1">Wrong</p>
            </div>
          </div>
        </Card>

        {weakTopics.length > 0 && (
          <Card className="p-6">
            <h2 className="font-display font-semibold text-ink mb-3">Recommended topics to revise</h2>
            <ul className="space-y-2">
              {weakTopics.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-slate-600">
                  <XCircle size={15} className="text-red-400 shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </Card>
        )}

        {weakTopics.length === 0 && (
          <Card className="p-6 flex items-center gap-3">
            <CheckCircle2 size={20} className="text-emerald-500" />
            <p className="text-sm text-slate-600">Perfect score! No revision needed for this set.</p>
          </Card>
        )}

        <Button onClick={restart} icon={RotateCcw} className="w-full" size="lg">Retake Quiz</Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-display font-semibold text-ink">Quick Quiz</h1>
        <p className="text-slate-500 mt-1 text-sm">Question {current + 1} of {total}</p>
      </div>

      <div className="flex gap-1.5">
        {quizBank.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i <= current ? 'bg-indigo-500' : 'bg-slate-100'}`}
          />
        ))}
      </div>

      <Card className="p-6">
        <QuizCard
          question={question}
          selected={answers[question.id]}
          revealed={answered}
          onSelect={selectAnswer}
        />
      </Card>

      <div className="flex justify-between">
        <Button variant="secondary" icon={ChevronLeft} onClick={prev} disabled={current === 0}>Previous</Button>
        <Button icon={ChevronRight} iconPosition="right" onClick={next} disabled={!answered}>
          {current === total - 1 ? 'Finish Quiz' : 'Next'}
        </Button>
      </div>
    </div>
  )
}
