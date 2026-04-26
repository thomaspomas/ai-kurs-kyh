import type { CourseModule, Track } from '@/types'
import { modules as utbildningsledareModules } from './tracks/utbildningsledare'
import { modules as yhLedningModules } from './tracks/yh-ledning'

export { modules } from './tracks/utbildningsledare'

export function getModulesForTrack(track: Track): CourseModule[] {
  switch (track) {
    case 'yh-ledning':
      return yhLedningModules
    case 'utbildningsledare':
    default:
      return utbildningsledareModules
  }
}

export function getModule(id: number, track?: Track): CourseModule | undefined {
  const mods = track ? getModulesForTrack(track) : utbildningsledareModules
  return mods.find((m) => m.id === id)
}

export function getTotalSections(track?: Track): number {
  const mods = track ? getModulesForTrack(track) : utbildningsledareModules
  return mods.reduce((acc, m) => acc + m.sections.length, 0)
}
