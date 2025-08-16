import { NuxtLinkLocale } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import BaseNavbar from '~/components/BaseNavbar.vue'

describe.skip('Navbar', () => {
  describe('call to action', async () => {
    it('should contain call to action', async () => {
      const component = await mountSuspended(BaseNavbar)
      const cta = component.find(`[id="tel-navbar"]`)

      expect(cta.exists()).toBeTruthy()
      expect(cta.attributes('href')).toContain('tel:')
    })
  })

  describe('fixed when scrolled', () => {
    // TODO: Renders only the navbar so when scrolled nothing happens. This
    // has to be tested on a page
    it.skip('applies bg-brand-pink-500 if show showBackground is true', async () => {
      const y = ref(100)
      
      const component = await mountSuspended(BaseNavbar, {
        global: {
          mocks: {
            useScroll: () => ({ y })
          }
        }
      })
      
      y.value = 800
      await nextTick()
  
      expect(component.classes()).toContain('bg-brand-pink-500')
      expect(component.classes()).not.toContain('bg-transparent')
    })
  
    it('applises bg-brand-transparent if show showBackground is false', async () => {
      const component = await mountSuspended(BaseNavbar, {
        global: {
          mocks: {
            useScroll: () => ({ y: ref(0) })
          }
        }
      })

      await nextTick()
  
      expect(component.classes()).toContain('bg-transparent')
      expect(component.classes()).not.toContain('bg-brand-pink-500')
    })
  })

  it('emits when mobile button is clicked', async () => {
    const component = await mountSuspended(BaseNavbar)
    const button = component.get('button[aria-controls="mobile-menu"]')
    
    await button.trigger('click')
    expect(component.emitted('mobile-menu')).toBeTruthy()
  })

  it('has all expected links', async () => {
    const component = await mountSuspended(BaseNavbar)
    const links = component.findAllComponents(NuxtLinkLocale)

    const linkTexts = links.map(link => link.text())
    const expectedTexts = ['Accueil', 'Prestations', 'Notre histoire']

    expectedTexts.forEach(text => {
      expect(linkTexts).toContain(text)
    })
  })

  it('has accessibility attributes', async () => {
    const component = await mountSuspended(BaseNavbar)
    expect(component.element.tagName).toBe('NAV')
    expect(component.html()).toContain('sr-only')
    expect(component.get('button').attributes('aria-controls')).toBe('mobile-menu')
  })

  it('matches snapshot', async () => {
    const component = await mountSuspended(BaseNavbar)
    expect(component.html()).toMatchSnapshot()
  })
})
