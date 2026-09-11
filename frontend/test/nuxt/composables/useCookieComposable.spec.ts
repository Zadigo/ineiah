import { describe, it, expect, vi } from 'vitest'
import { useCookieComposable } from '~/composables'


vi.mock('@vueuse/core', async (original) => {
  const actual = await original<typeof import('@vueuse/core')>()
  return {
    ...actual,
    useSessionStorage: vi.fn((_name: string, _value: unknown) => ref(false))
  } 
})

describe('useCookieComposable', () => {
  it('should initialize with default values and accept', () => {
    const result = useCookieComposable()

    expect(toValue(result.cookieAccepted)).toBe(false)
    expect(toValue(result.showBanner)).toBe(true)
    expect(toValue(result.showOptions)).toBe(false)

    const callback = vi.fn()

    const callbacks = [
      undefined,
      callback
    ]

    callbacks.forEach((callback) => {
      result.accept(callback)
      if (callback) {
        expect(callback).toHaveBeenCalled()
      }
    })

    expect(toValue(result.cookieAccepted)).toBe(true)
    expect(toValue(result.showBanner)).toBe(false)
  })
})
