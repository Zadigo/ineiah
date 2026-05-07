import { vi } from 'vitest'

vi.mock('@vueuse/core', async () => {
  const actual = await vi.importActual<typeof import('@vueuse/core')>('@vueuse/core')
  return {
    ...actual,
    useScroll: vi.fn().mockReturnValue({ y: 0 }),
    useIntersectionObserver: vi.fn(),
  }
})

// vi.mock('#imports', async () => {
//   return {
//     toValue: vi.fn().mockImplementation((value) => {
//       if (typeof value === 'function') {
//         return value()
//       }
//       return value
//     })
//   }
// })

vi.mock('#imports', async () => {
  const vue = await vi.importActual<typeof import('vue')>('vue')
  return {
    ...vue,
    toValue: vi.fn().mockImplementation((value) => {
      return typeof value === 'function' ? value() : value
    })
  }
})

vi.mock('#app', async () => {
  return {
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
