import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HeroBottomCta from '../../../app/components/hero/BottomCta.vue'

describe("HeroBottomCta", () => {
  describe('call to actions', () => {
    it('hero should have two call to actions', async () => {
      const component = await mountSuspended(HeroBottomCta, {
        props: {
          image: '/images/hero/hero-ineiah.jpg'
        }
      })
      const firstCta = component.find(`[id="link-offer-hero"]`)
      const secondCta = component.find(`[id^="tel-call-us"]`)

      expect(firstCta.exists()).toBeTruthy()
      expect(firstCta.attributes('href')).toContain('/nos-prestations')

      expect(secondCta.exists()).toBeTruthy()
      expect(secondCta.attributes('href')).toContain('tel:')
    })

    it('should all be clickable', async () => {
      const component = await mountSuspended(HeroBottomCta, {
        props: {
          image: '/images/hero/hero-ineiah.jpg'
        }
      })
      const telLinks = component.findAll('a')

      telLinks.forEach((item) => {
        expect(item.attributes('disabled')).toBeUndefined()
      })
    })

    it('should have ids', async () => {
      const { findAll } = await mountSuspended(HeroBottomCta, {
        props: {
          image: '/images/hero/hero-ineiah.jpg'
        }
      })
      const links = findAll('a')
      links.forEach((item) => {
        expect(item.attributes('id')).toBeDefined()
      })
    })

    it('should have H1 title', async () => {
      const { find } = await mountSuspended(HeroBottomCta, {
        props: {
          image: '/images/hero/hero-ineiah.jpg'
        }
      })
      const h1 = find('h1')
      expect(h1.exists()).toBeTruthy()
      expect(h1.text()).toBeDefined()
    })
  })
})
