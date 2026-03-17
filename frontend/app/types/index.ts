export type * from './services'

export type Undefineable <T> = T | undefined

export type Nullable <T> = T | null

export type Emptyable <T> = T | '' | null | undefined

export type Arrayable<T> = T[]

export type StringInterface<T extends string> = { [K in T]: string }

export type BaseRoute = StringInterface<'id' | 'title' | 'path'>

export interface GalleryImage {
  name: string
  image: string | Arrayable<string>
  category: 'image' | 'video'
  url: string | null
  alt: string | null
  author: {
    name: string 
    username: string | null
    website: string | null
    instagram: string | null
  }
}

export type Locale = 'fr' | 'en'

export type PageTitleOrDescription<T extends string> = Record<T, string>

export type Photocall = {
  src: string
  alt: string
  subtitle: 'Coupe' | 'Soin'
  title: string
}

export type CookieValue = {
  name: string
  description: string
  required: boolean
}
