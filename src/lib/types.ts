export interface Project {
  title: string
  slug: string
  date: string
  summary: string
  roles: string[]
  stack: string[]
  tags: string[]
  repo?: string
  live?: string
  cover: string
  kpis: Array<{ label: string; value: string }>
  timeline: Array<{ phase: string; desc: string }>
  highlights: string[]
  gallery?: string[]
  readingTime: number
  content: string
}

export interface BlogPost {
  title: string
  slug: string
  date: string
  summary: string
  tags: string[]
  cover?: string
  readingTime: number
  content: string
}

export interface Experience {
  company: string
  role: string
  startDate: string
  endDate?: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  gpa?: string
  honors?: string[]
  relevantCourses?: string[]
}

export interface Skill {
  category: string
  skills: Array<{
    name: string
    proficiency: number
    icon?: string
  }>
}