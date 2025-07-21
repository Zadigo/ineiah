import { renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import NotreHistoire from '~/pages/notre-histoire.vue'

describe('Notre Histoire Page', () => {
  it('should render page', async () => {
    const component = await renderSuspended(NotreHistoire)
    const pageLead = await component.findByText('Notre histoire')
    expect(pageLead).not.toBeUndefined()
  })
})
