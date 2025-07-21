import { HeroBrand, HeroPhotoCall } from '#components'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import Index from '~/pages/index.vue'

describe('Index Page', () => {
  it('should render page', async () => {
    const renderedEl = await renderSuspended(Index)
    const el = await renderedEl.findByText('Sublime ta singularité')

    expect(el).toBeDefined()

  })
  
  it('should have required components', async () => {
    const component = await mountSuspended(Index)
    const components = [HeroBrand, HeroPhotoCall]
    
    components.forEach(item => {
      const el = component.getComponent(item) 
      expect(el).toBeDefined()
    })
  })

  describe('call to actions', () => {
    it('hero should have call two call to actions', async () => {
      const component = await mountSuspended(Index)
      const firstCta = component.find(`[id="link-offer-hero"]`)
      const secondCta = component.find(`[id="tel-hero"]`)
      
      expect(firstCta.exists()).toBeTruthy()
      expect(firstCta.attributes('href')).toContain('/nos-prestations')

      expect(secondCta.exists()).toBeTruthy()
      expect(secondCta.attributes('href')).toContain('tel:')
    })

    it('should all be clickeable', async () => {
      const component = await mountSuspended(Index)
      const telLinks = component.findAll(`[id^="tel-"]`)
      telLinks.forEach(item => {
        expect(item.attributes('disabled')).toBeUndefined()
        expect(item.attributes('href')).toContain('tel:')
      })
    })
  })

  // CTA

  // try {
  //   waitFor(() => expect(renderedEl.findByText('Je veux me faire belle')).toBeDefined())

  //   const hero = document.querySelector('#hero')
    
  //   if (hero) {
  //     const links = await within(hero as HTMLElement).findAllByRole('link')
  //     links.forEach(link => {
  //       expect(link.getAttribute('disabled')).toBeNull()
  //     })
  //   }
  // } catch (e) {
  //   console.log(e)
  // }
  // it('buttons should be clickable', async () => {
  //   const renderedEl = await renderSuspended(Index)
    
  //   renderedEl.queryAllByText('Nous appeller').forEach(el => {
  //     expect(el.tagName).toBe('A')
  //     expect(el.getAttribute('disabled')).toBeNull()
  //     expect(el.getAttribute('href')).toContain('tel:')
  //   })
  // })

  describe('Photocall', () => {
    it('should have four pictures', async () => {
      const component = await mountSuspended(Index)
      const items = component.findAllComponents(HeroPhotoCall)
  
      expect(items.length).to.equal(4)
    })
  })

  it('should match snapshot', async () => {
    const component = await mountSuspended(Index)
    expect(component.html()).toMatchSnapshot()
  })
}, 50000)
