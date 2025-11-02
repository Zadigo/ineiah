export type Undefineable <T> = T | undefined

export type Nullable <T> = T | null

export type Arrayable<T> = T[]

export type StringInterface<T extends string> = { [K in T]: string }

export type BaseRoute = StringInterface<'id' | 'title' | 'path'>
