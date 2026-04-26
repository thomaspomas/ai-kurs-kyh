'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/types'

interface QuizCardProps {
  questions: QuizQuestion[]
  onPassed?: () => void
  alreadyPassed?: boolean
}

export function QuizCard({ questions, onPassed, alreadyPassed }: QuizCardProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [done, setDone] = useState(false)
  const [passed, setPassed] = useState(alreadyPassed ?? false)

  function handleSelect(index: number) {
    if (selected !== null) return
    setSelected(index)
    setAnswers((prev) => {
      const next = [...prev]
      next[current] = index
      return next
    })
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(answers[current + 1])
    } else {
      const allCorrect = answers.every((a, i) => a === questions[i].correctIndex)
      setDone(true)
      if (allCorrect) {
        setPassed(true)
        onPassed?.()
      }
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setAnswers(Array(questions.length).fill(null))
    setDone(false)
  }

  if (passed) {
    return (
      <div className="bg-surface-card border border-secondary/40 rounded-xl p-5 flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#2D807C' }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 7l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex-1">
          <span className="text-xs font-mono text-content-muted uppercase tracking-wider">Quiz</span>
          <p className="text-sm font-medium text-secondary">Alla frågor besvarade rätt – reflektionen är upplåst.</p>
        </div>
        <button
          onClick={() => { setPassed(false); handleRestart() }}
          className="text-xs text-content-muted hover:text-primary transition-colors cursor-pointer shrink-0"
        >
          Gör om
        </button>
      </div>
    )
  }

  if (done) {
    const correctCount = answers.filter((a, i) => a === questions[i].correctIndex).length
    const total = questions.length
    return (
      <div className="bg-surface-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🧠</span>
          <span className="text-xs font-mono text-content-muted uppercase tracking-wider">Quiz</span>
        </div>
        <div className="text-center py-2 mb-4">
          <p className="text-3xl font-bold text-content mb-1">{correctCount}/{total}</p>
          <p className="text-content-muted text-sm">
            Du behöver svara rätt på alla frågor för att låsa upp reflektionen.
          </p>
        </div>
        <div className="space-y-3 border-t border-border pt-4 mb-5">
          {questions.map((q, i) => {
            const isCorrect = answers[i] === q.correctIndex
            return (
              <div key={i} className="text-sm">
                <p className={`font-medium mb-0.5 ${isCorrect ? 'text-secondary' : 'text-primary'}`}>
                  {isCorrect ? '✓' : '✗'} {q.question}
                </p>
                {!isCorrect && (
                  <p className="text-content-muted text-xs pl-4">
                    Rätt svar: {q.options[q.correctIndex]} — {q.explanation}
                  </p>
                )}
              </div>
            )
          })}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleRestart}
            className="px-5 py-2 rounded-lg text-sm font-medium text-white cursor-pointer"
            style={{ backgroundColor: '#C75000' }}
          >
            Försök igen
          </button>
        </div>
      </div>
    )
  }

  const question = questions[current]
  const isAnswered = selected !== null

  return (
    <div className="bg-surface-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧠</span>
          <span className="text-xs font-mono text-content-muted uppercase tracking-wider">Quiz</span>
        </div>
        <span className="text-xs text-content-muted">{current + 1} / {questions.length}</span>
      </div>

      <div className="w-full bg-border rounded-full h-1 mb-5">
        <div
          className="h-1 rounded-full transition-all"
          style={{ width: `${(current / questions.length) * 100}%`, backgroundColor: '#C75000' }}
        />
      </div>

      <p className="font-semibold text-content mb-4 leading-snug">{question.question}</p>

      <div className="space-y-2 mb-4">
        {question.options.map((option, i) => {
          let style = 'border border-border text-content hover:border-primary/60'
          if (isAnswered) {
            if (i === question.correctIndex) {
              style = 'border-2 border-secondary bg-secondary/10 text-secondary font-medium'
            } else if (i === selected) {
              style = 'border-2 border-primary bg-primary/10 text-primary font-medium'
            } else {
              style = 'border border-border text-content-muted opacity-60'
            }
          }
          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left rounded-lg px-4 py-2.5 text-sm transition-colors ${style} ${!isAnswered ? 'cursor-pointer' : 'cursor-default'}`}
            >
              {option}
            </button>
          )
        })}
      </div>

      {isAnswered && (
        <div
          className={`rounded-lg px-4 py-3 text-sm mb-4 ${
            selected === question.correctIndex
              ? 'bg-secondary/10 text-secondary border border-secondary/30'
              : 'bg-primary/5 text-content border border-primary/20'
          }`}
        >
          <span className="font-medium">
            {selected === question.correctIndex ? 'Rätt! ' : 'Inte riktigt. '}
          </span>
          {question.explanation}
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="px-4 py-2 rounded-lg text-sm font-medium text-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{ backgroundColor: '#C75000' }}
        >
          {current < questions.length - 1 ? 'Nästa fråga →' : 'Se resultat'}
        </button>
      </div>
    </div>
  )
}
