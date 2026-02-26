import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string | ReactNode
  subtitle?: ReactNode
  content?: string | ReactNode
  showButton?: boolean
  buttonText?: string
  bgFrom?: string
  bgTo?: string
  accent?: string
  customSection?: ReactNode
}

export interface SectionProps extends Section {
  isActive: boolean
  index: number
}
