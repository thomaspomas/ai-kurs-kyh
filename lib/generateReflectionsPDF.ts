'use client'

import { jsPDF } from 'jspdf'
import type { CourseModule } from '@/types'

export interface ReflectionRow {
  module_id: number
  section_id: string
  reflection_text: string
  ai_feedback: string
}

export function generateReflectionsPDF(
  userName: string,
  trackLabel: string,
  modules: CourseModule[],
  reflections: ReflectionRow[]
) {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()
  const margin = 18
  const contentW = pageW - margin * 2
  let y = margin

  const accent = [199, 80, 0] as [number, number, number]
  const teal = [45, 128, 124] as [number, number, number]
  const dark = [30, 30, 30] as [number, number, number]
  const muted = [110, 110, 110] as [number, number, number]

  function checkPage(needed = 10) {
    if (y + needed > pageH - margin) {
      doc.addPage()
      y = margin
    }
  }

  function addText(
    text: string,
    x: number,
    fontSize: number,
    color: [number, number, number],
    maxW: number,
    bold = false
  ): number {
    doc.setFontSize(fontSize)
    doc.setTextColor(...color)
    doc.setFont('helvetica', bold ? 'bold' : 'normal')
    const lines = doc.splitTextToSize(text, maxW)
    checkPage(lines.length * fontSize * 0.4 + 4)
    doc.text(lines, x, y)
    y += lines.length * fontSize * 0.4 + 2
    return y
  }

  // Header
  doc.setFillColor(...accent)
  doc.rect(0, 0, pageW, 14, 'F')
  doc.setFontSize(10)
  doc.setTextColor(255, 255, 255)
  doc.setFont('helvetica', 'bold')
  doc.text('AI-kurs · Mina reflektioner', margin, 9)

  y = 22

  // Title block
  addText('Mina reflektioner', margin, 22, dark, contentW, true)
  y += 1
  addText(trackLabel, margin, 11, muted, contentW)
  addText(userName, margin, 11, muted, contentW)
  addText(new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' }), margin, 11, muted, contentW)

  y += 6
  doc.setDrawColor(...teal)
  doc.setLineWidth(0.5)
  doc.line(margin, y, pageW - margin, y)
  y += 8

  const reflMap = new Map<string, ReflectionRow>()
  for (const r of reflections) {
    reflMap.set(`${r.module_id}-${r.section_id}`, r)
  }

  let hasAny = false

  for (const mod of modules) {
    const reflSections = mod.sections.filter((s) => s.type === 'reflection')
    const modReflections = reflSections
      .map((s) => reflMap.get(`${mod.id}-${s.id}`))
      .filter(Boolean) as ReflectionRow[]

    if (modReflections.length === 0) continue
    hasAny = true

    checkPage(20)

    // Module header
    doc.setFillColor(245, 245, 245)
    doc.roundedRect(margin, y, contentW, 10, 2, 2, 'F')
    doc.setFontSize(9)
    doc.setTextColor(...muted)
    doc.setFont('helvetica', 'normal')
    doc.text(`Modul ${mod.id}`, margin + 3, y + 4)
    doc.setFontSize(11)
    doc.setTextColor(...dark)
    doc.setFont('helvetica', 'bold')
    doc.text(mod.title, margin + 3, y + 8.5)
    y += 14

    for (const section of reflSections) {
      const row = reflMap.get(`${mod.id}-${section.id}`)
      if (!row || !row.reflection_text) continue

      checkPage(30)

      // Question
      addText(section.title, margin, 10, teal, contentW, true)
      y += 2

      // User's reflection
      doc.setFontSize(9)
      doc.setTextColor(...muted)
      doc.setFont('helvetica', 'bold')
      doc.text('Min reflektion', margin, y)
      y += 4
      addText(row.reflection_text, margin, 9.5, dark, contentW)

      // AI feedback
      if (row.ai_feedback) {
        y += 2
        doc.setFillColor(240, 248, 248)
        const feedbackLines = doc.splitTextToSize(row.ai_feedback, contentW - 6)
        const boxH = feedbackLines.length * 3.8 + 10
        checkPage(boxH + 6)
        doc.roundedRect(margin, y, contentW, boxH, 2, 2, 'F')
        doc.setFontSize(9)
        doc.setTextColor(...teal)
        doc.setFont('helvetica', 'bold')
        doc.text('Återkoppling från kursassistenten', margin + 3, y + 5)
        doc.setTextColor(...dark)
        doc.setFont('helvetica', 'normal')
        doc.text(feedbackLines, margin + 3, y + 9)
        y += boxH + 4
      }

      y += 6
      doc.setDrawColor(220, 220, 220)
      doc.setLineWidth(0.3)
      doc.line(margin, y, pageW - margin, y)
      y += 6
    }
  }

  if (!hasAny) {
    addText('Inga sparade reflektioner hittades.', margin, 11, muted, contentW)
  }

  // Footer on each page
  const totalPages = (doc.internal as { getNumberOfPages?: () => number }).getNumberOfPages?.() ?? 1
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(...muted)
    doc.setFont('helvetica', 'normal')
    doc.text(`Sida ${i} av ${totalPages}`, pageW - margin, pageH - 8, { align: 'right' })
  }

  const safeName = userName.replace(/[^a-z0-9åäö]/gi, '_').toLowerCase()
  doc.save(`reflektioner_${safeName}.pdf`)
}
