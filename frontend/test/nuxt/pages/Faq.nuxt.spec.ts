import AccordionContent from '~/components/volt/AccordionContent.vue'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
// import { fireEvent, within } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { useFaq } from '~/composables'
import Faq from '~/pages/faq.vue'

describe.only('FAQ Page', () => {
  it('should render page', async () => {
    const renderedEl = await renderSuspended(Faq)
    expect(renderedEl.html()).toContain('Nous répondons à vos questions')

    const questionEl = await renderedEl.findByText('Rendez-Vous & Réservations')
    expect(questionEl).toBeDefined()

    const pageTitleEl = await renderedEl.findByText('Nous répondons à vos questions')
    expect(pageTitleEl).toBeDefined()
  })

  it('should contain required components', async () => {
    const component = await mountSuspended(Faq)

    const requiredComponents = [ 'CardCTA', 'BaseJumbotron' ]

    requiredComponents.forEach((item) => {
      const el = component.findComponent(item)
      expect(el).toBeDefined()
    })
  })

  it('renders expected number of accordion items for each section', async () => {
    const component = await mountSuspended(Faq)
    const { faqList } = useFaq()

    faqList.forEach((section) => {
      const sectionEl = component.find(`#faq-${section.id}`)
      expect(sectionEl.exists()).toBe(true)
      expect(sectionEl.text()).toContain(section.title)
    })
  })

  describe('accordion', () => {
    it('toggles accordion content when trigger is clicked', async () => {
      const component = await mountSuspended(Faq)
      
      const accordionEl = component.findComponent(AccordionContent)
      const firstTriggerEl = accordionEl.find('div:first-child')

      expect(firstTriggerEl.exists()).toBe(true)
      expect(firstTriggerEl.attributes('data-p-active')).toBe('false')
            
      const { faqList } = useFaq()
      
      const elementId = createElementId('action', 'faq', faqList[0]?.id, 0)
      const triggerEl = component.find(`#${elementId}`)

      await triggerEl.trigger('click')
      await component.vm.$nextTick()

      expect(triggerEl.attributes('data-p-active')).toBe('true')
    })
  })

  describe('call to action', () => {
    it('should be clickeable', async () => {
      const component = await mountSuspended(Faq)
      const ctaButton = component.find(`[id="tel-call-us-faq"]`)

      expect(ctaButton.exists()).toBeTruthy()
      expect(ctaButton.attributes('href')).toContain('tel:')

      await ctaButton.trigger('click')
    })
  })
})
