import { describe, expect, it } from 'vitest'
import { renderSuspended, mountSuspended } from '@nuxt/test-utils/runtime'

import MentionsLegales from '~/pages/legal/mentions-legales.vue'

describe.skip('Mentions Légales Page', () => {
  it('should render page', async () => {
    const component = await renderSuspended(MentionsLegales)
    const pageTitle = await component.findByText('Mentions légales')
    expect(pageTitle).toBeDefined()

    const randomTitle = await component.findByText('Contenu multimédia du site')
    expect(randomTitle).toBeDefined()
  })

  it('should match snapshot', async () => {
    const component = await mountSuspended(MentionsLegales)
    expect(component.html()).toMatchSnapshot()
  })
}, 50000)
