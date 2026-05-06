import { vi } from 'vitest'

vi.mock('@vueuse/core', async () => {
  const actual = await vi.importActual<typeof import('@vueuse/core')>('@vueuse/core')
  return {
    ...actual,
    useScroll: vi.fn().mockReturnValue({ y: 0 }),
    useIntersectionObserver: vi.fn()
  }
})

vi.mock('#app', async () => {
  const actual = await vi.importActual<typeof import('#app')>('#app')

  return {
    ...actual,
    useCookie: vi.fn().mockReturnValue({
      value: 'mocked-cookie',
      set: vi.fn(),
      remove: vi.fn()
    })
  }
})

vi.mock('#app/composables/head', async () => {
  const actual = await vi.importActual<typeof import('#app/composables/head')>('#app/composables/head')

  return {
    ...actual,
    
    useSeoMeta: vi.fn(),
    useHead: vi.fn()
  }
})

vi.mock('nuxt-schema-org', () => {
  return {
    useSchemaOrg: vi.fn()
  }
})
