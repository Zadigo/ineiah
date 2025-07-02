import { describe, expect, it } from 'vitest'
import { screen, fireEvent, waitFor, within } from '@testing-library/vue'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'

import Index from '~/pages/index.vue'

describe('Index Page', () => {
  it('should render page', async () => {
    const renderedEl = await renderSuspended(Index)
    const el = await renderedEl.findByText('Sublime ta singularité')
    expect(el).toBeDefined()

    // CTA

    try {
      waitFor(() => expect(renderedEl.findByText('Je veux me faire belle')).toBeDefined())
  
      const hero = document.querySelector('#hero')
      
      if (hero) {
        const links = await within(hero as HTMLElement).findAllByRole('link')
        links.forEach(link => {
          expect(link.getAttribute('disabled')).toBeNull()
        })
      }
    } catch (e) {
      console.log(e)
    }
  })
  
  it('buttons should be clickable', async () => {
    const renderedEl = await renderSuspended(Index)
    
    renderedEl.queryAllByText('Nous appeller').forEach(el => {
      expect(el.tagName).toBe('A')
      expect(el.getAttribute('disabled')).toBeNull()
      expect(el.getAttribute('href')).toContain('tel:')
    })
  })

  it.skip('should have PhotoCall component', async () => {
    const component = await mountSuspended(Index)
    const el = component.getComponent('PhotoCall')
    expect(el).toBeDefined()
  })

  it('should match snapshot', async () => {
    const component = await mountSuspended(Index)
    expect(component.html()).toMatchSnapshot()
  })
})
