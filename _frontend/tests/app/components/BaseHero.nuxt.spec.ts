import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

import BaseHero from '~/components/BaseHero.vue'

describe.concurrent.skip('Base Hero', () => {
  it.skip('renders correctly with default props', async () => {
    await renderSuspended(BaseHero, {
      props: {
        lead: 'Default Title',
        subtitle: 'Default Subtitle',
        src: '/default.jpg'
      }
    })
    
    expect(screen.getByText('Default Title')).toBeDefined()
    expect(screen.getByText('Default Subtitle')).toBeDefined()
  })

  const cases: Array<[string, string, string]> = [
    ['My title', 'My subtitle', '/image1.jpg']
  ]

  cases.forEach(([lead, subtitle, src]) => {
    it(`renders correctly with props: ${lead} ${subtitle} ${src}`, async () => {
      await renderSuspended(BaseHero, {
        props: {
          lead,
          subtitle,
          src
        }
      })

      expect(screen.getByText(lead)).toBeDefined()
      expect(screen.getByText(subtitle)).toBeDefined()

      // FIXME:
      // const heroEl = screen.getByRole('heading', { level: 1 }).closest('div')
      // expect(heroEl).toBeDefined()
      // expect(heroEl?.getAttribute('style')).toContain(src)
    })
  })
})
