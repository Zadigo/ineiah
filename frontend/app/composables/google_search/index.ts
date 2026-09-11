export * from './utils'

export interface SearchItem {
  id: string
  title: string
  description?: string | null
  slug: string
  type: 'product' | 'page' | 'content'
  to: string
  tags?: string[] | null
}
