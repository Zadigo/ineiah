import { describe, expect, it } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import ConditionsGenerales from '~/pages/legal/conditions-generales.vue'

describe.skip('Conditions Générales Page', () => {
  it('should render page', async () => {
    const component = await renderSuspended(ConditionsGenerales)
    const pageLead = await component.findByText('Nuxt')
    expect(pageLead).toBeDefined()
  })
})
