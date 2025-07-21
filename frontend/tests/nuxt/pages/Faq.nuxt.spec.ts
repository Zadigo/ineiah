import { ShadAccordionContent } from '#components'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent, within } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { faqList } from '~/app/data'

import Faq from '~/pages/faq.vue'

describe('FAQ Page', () => {
  it('should render page', async () => {
    const renderedEl = await renderSuspended(Faq)
    expect(renderedEl.html()).toContain('Nous répondons à vos questions')

    const questionEl = await renderedEl.findByText('Rendez-Vous & Réservations')
    expect(questionEl).toBeDefined()

    const pageTitleEl = await renderedEl.findByText('Nous répondons à vos questions')
    expect(pageTitleEl).toBeDefined()
  })

  it('should contain required components', async() => {
    const component = await mountSuspended(Faq)

    const requiredComponents = ['CardCTA', 'BaseJumbotron']
    
    requiredComponents.forEach(item => {
      const el = component.findComponent(item)
      expect(el).toBeDefined()
    })
  })

  it('renders expected number of accordion items for each section', async () => {
    const wrapper = await mountSuspended(Faq)

    faqList.forEach(section => {
      const sectionEl = wrapper.find(`#faq-${section.id}`)
      expect(sectionEl.exists()).toBe(true)
      expect(sectionEl.text()).toContain(section.title)

      const accordionItems = wrapper.findAll(`[id^="faq-${section.id}-"]`)
      expect(accordionItems).toHaveLength(section.questions.length)
    })
  })
  
  it('should match snapshot', async () => {
    const component = await mountSuspended(Faq)
    expect(component.html()).toMatchSnapshot()
  })

  describe('accordion', async () => {
    it.todo('toggles accordion content when trigger is clicked', async () => {
      const wrapper = await mountSuspended(Faq)
      const firstTrigger = wrapper.find(`[id="faq-${faqList[0].id}-0"]`)
      const firstContent = wrapper.findComponent(ShadAccordionContent)
      expect(firstContent.isVisible()).toBe(false)

      // await firstTrigger.trigger('click')
      // expect(firstContent.isVisible()).toBe(true)

      // await firstTrigger.trigger('click')
      // expect(firstContent.isVisible()).toBe(false)
    })
  })

  describe('call to action', () => {
    it('should be clickeable', async () => {
      const component = await mountSuspended(Faq)
      const ctaButton = component.find(`[id="tel-faq-section"]`)

      expect(ctaButton.exists()).toBeTruthy()
      expect(ctaButton.attributes('href')).toContain('tel:')
      
      await ctaButton.trigger('click')
    })
  })
}, 50000)
