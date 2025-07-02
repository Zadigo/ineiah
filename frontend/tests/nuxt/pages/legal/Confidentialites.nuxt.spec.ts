import { describe, expect, it } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'

import Confidentialites from '~/pages/legal/confidentialite.vue'

describe('Confidentialité Page', () => {
  it('should render page', async () => {
    const component = await renderSuspended(Confidentialites)
    const pageLead = await component.findByText('Nuxt')
    expect(pageLead).toBeDefined()
  })
})
