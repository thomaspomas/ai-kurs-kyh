export type Track = 'utbildningsledare' | 'yh-ledning' | 'yh-larare' | 'yh-studerande' | 'yh-affarsutvecklare' | 'ai-grundkurs'

export interface ModuleSection {
  id: string
  type: 'intro' | 'concept' | 'example' | 'misconceptions' | 'warning' | 'reflection'
  title: string
  content: string
  items?: string[]
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface CourseModule {
  id: number
  title: string
  subtitle: string
  duration: string
  icon: string
  sections: ModuleSection[]
  quiz?: QuizQuestion[]
}

export interface UserProfile {
  id: string
  full_name: string
  created_at: string
}

export interface ModuleProgress {
  id: string
  user_id: string
  module_id: number
  section_id: string
  completed_at: string
}

export interface ExamSubmission {
  id: string
  user_id: string
  part1: string
  part2: string
  part3: string
  part4: string
  submitted_at: string
  approved: boolean
}

export interface Diploma {
  id: string
  user_id: string
  user_name: string
  issued_at: string
  verification_code: string
}
