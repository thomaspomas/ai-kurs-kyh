'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/types'

interface QuizCardProps {
  questions: QuizQuestion[]
}

export function QuizCard({ questions }: QuizCardProps) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [done, setDone] = useState(false)

  const question = questions[current]
  const isAnswered = selected !== null

  function handleSelect(index: number) {
    if (isAnswered) return
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
      setDone(true)
    }
  }

  function handleRestart() {
    setCurrent(0)
    setSelected(null)
    setAnswers(Array(questions.length).fill(null))
    setDone(false)
  }

  if (done) {
    const correct = answers.filter((a, i) => a === questions[i].correctIndex).length
    const total = questions.length
    const pct = Math.round((correct / total) * 100)
    return (
      <div className="bg-surface-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg">🧠</span>
          <span className="text-xs font-mono text-content-muted uppercase tracking-wider">Quiz</span>
        </div>
        <div className="text-center py-4">
          <p className="text-3xl font-bold text-content mb-1">
            {correct}/{total}
          </p>
          <p className="text-content-muted text-sm mb-4">
            {pct >= 80
              ? 'Utmärkt! Du har greppat modulens kärna.'
              : pct >= 50
              ? 'Bra jobbat – gå gärna tillbaka och läs igenom avsnitten igen.'
              : 'Läs igenom modulen en gång till – frågorna täcker de viktigaste begreppen.'}
          </p>
          <button
            onClick={handleRestart}
            className="text-sm text-primary hover:underline cursor-pointer"
          >
            Gör om quizet
          </button>
        </div>
        <div className="space-y-3 mt-4 border-t border-border pt-4">
          {questions.map((q, i) => {
            const ans = answers[i]
            const correct = ans === q.correctIndex
            return (
              <div key={i} className="text-sm">
                <p className={`font-medium mb-1 ${correct ? 'text-secondary' : 'text-primary'}`}>
                  {correct ? '✓' : '✗'} {q.question}
                </p>
                {!correct && (
                  <p className="text-content-muted text-xs pl-4">
                    Rätt svar: {q.options[q.correctIndex]} — {q.explanation}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧠</span>
          <span className="text-xs font-mono text-content-muted uppercase tracking-wider">Quiz</span>
        </div>
        <span className="text-xs text-content-muted">
          {current + 1} / {questions.length}
        </span>
      </div>

      <div className="w-full bg-border rounded-full h-1 mb-5">
        <div
          className="h-1 rounded-full transition-all"
          style={{ width: `${((current) / questions.length) * 100}%`, backgroundColor: '#C75000' }}
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
