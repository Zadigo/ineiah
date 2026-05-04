export * from './privacy'

export interface Policy {
  title: string
  titleEn?: string
  content: {
    type: 'paragraph' | 'list' | 'subtitle'
    text?: string
    textEn?: string
    items?: { text: string; textEn?: string }[]
  }[]
}
