import { renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import BaseHero from '../../../app/components/base/Hero.vue'

describe('Base Hero', () => {
  it('renders correctly with default props', async () => {
    const { container } = await renderSuspended(BaseHero, {
      props: {
        lead: 'Default Title',
        subtitle: 'Default Subtitle',
        src: '/default.jpg'
      }
    })

    expect(screen.getByText('Default Title')).toBeDefined()
    expect(screen.getByText('Default Subtitle')).toBeDefined()

    const div = container.firstElementChild as HTMLElement
    expect(div).toBeDefined()
    
    // expect(div.style.backgroundImage).toBe('url(/default.jpg)')
  })

  const cases: Array<[ string, string, string ]> = [
    [ 'My title', 'My subtitle', '/image1.jpg' ]
  ]

  cases.forEach(([ lead, subtitle, src ]) => {
    it(`renders correctly with props: "${lead}" "${subtitle}" "${src}"`, async () => {
      await renderSuspended(BaseHero, {
        props: {
          lead,
          subtitle,
          src
        }
      })

      expect(screen.getByText(lead)).toBeDefined()
      expect(screen.getByText(subtitle)).toBeDefined()

      const heroEl = screen.getByRole('heading', { level: 1 }).closest('div')
      expect(heroEl).toBeDefined()
    })
  })
})
