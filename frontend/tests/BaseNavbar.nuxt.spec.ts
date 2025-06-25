import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import { NuxtLinkLocale } from '#components'
import BaseNavbar from '../components/BaseNavbar.vue'

// vi.mock('@vueuse/core', () => ({
//   useScroll: vi.fn(() => ({ y: 0 }))
// }))

describe('Navbar', () => {
  it('should render navbar', async () => {
    const component = await renderSuspended(BaseNavbar)
    const linkEl = component.findByText('Accueil')
    expect(linkEl).not.toBeUndefined()
    
    // const buttonEl = component.findByText('Nous appeller')
    // expect(buttonEl).not.toBeUndefined()
    // expect((await buttonEl).attributes.getNamedItem('disabled')).not.toBeNull()
  })

  it('applies bg-brand-pink-500 if show showBackground is true', async () => {
    const y = ref(0)
    
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

  it.skip('matches snapshot', async () => {
    const component = await mountSuspended(BaseNavbar)
    expect(component.html()).toMatchSnapshot()
  })
})
