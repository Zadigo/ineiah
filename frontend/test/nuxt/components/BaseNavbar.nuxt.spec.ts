import { NuxtLinkLocale } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import BaseNavbar from '~/components/base/Navbar.vue'

describe('Navbar', () => {
  it('should contain call to action', async () => {
    const component = await mountSuspended(BaseNavbar)
    const cta = component.find('a[id^="tel-navbar-call-us"]')
    
    expect(cta.exists()).toBeTruthy()

    const value = cta.attributes('href')
    expect(value).toBeDefined()
    expect(value?.startsWith('tel:')).toBeTruthy()
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
    const expectedTexts = [ 'Accueil', 'Prestations', 'Notre histoire' ]

    expectedTexts.forEach((text) => {
      expect(linkTexts).toContain(text)
    })
  })

  it('has accessibility attributes', async () => {
    const component = await mountSuspended(BaseNavbar)

    expect(component.get('button').attributes('aria-controls')).toBe('mobile-menu')
  })
})
