import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import Confidentialites from '~/pages/legal/confidentialite.vue'

describe('Confidentialité Page', () => {
  it('should render page', async () => {
    const component = await mountSuspended(Confidentialites)
    
    const titleEls = component.findAll('h1')
    titleEls.forEach(titleEl => {
      expect(titleEl).toBeDefined()
      expect(titleEl.attributes('id')).toBeDefined()
    })
  })
})
