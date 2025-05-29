import { mount, type VueWrapper } from '@vue/test-utils'
import { afterEach, beforeEach, describe, it, vi, expect } from 'vitest'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

import Index from '../../pages/index.vue'

vi.mock('#app', () => {
  return {
    useHead: vi.fn()
  }
})

describe('Index page', () => {
  let wrapper: VueWrapper
  let router

  beforeEach(() => {
    router = createRouterMock()
    injectRouterMock(router)

    vi.clearAllMocks()
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('render the page correctly', async () => {
    wrapper = mount(Index)
    expect(wrapper.find('p').text()).toBe('Nuxt')
  })
})
