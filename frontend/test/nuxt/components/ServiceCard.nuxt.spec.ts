import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import type { Service } from '~/types'
import { serviceFixture, serviceSectionFixture } from '../../__fixtures__'
import { serviceSectionKey } from '~/constants/symbols'

import ServicesCard from '~/components/services/Card.vue'
import ServicesCardInfo from '~/components/services/CardInfo.vue'

type TestCase = {
  title: string
  props: {
    index: number
    service: Service
  },
  expectText: string | undefined
}

describe('Services Card', () => {
  const testCases: TestCase[] = [
    {
      title: 'renders the service card with correct props',
      props: {
        index: 0,
        service: serviceFixture
      },
      expectText: undefined
    },
    {
      title: 'renders the sevice with text "Coupe sur cheveux"',
      props: {
        index: 0,
        service: {
          ...serviceFixture,
          category: 'Coupe',
        }
      },
      expectText: 'Coupe sur cheveux'
    },
    {
      title: 'renders the sevice with text "Soin sur cheveux"',
      props: {
        index: 0,
        service: {
          ...serviceFixture,
          category: 'Soin',
        }
      },
      expectText: 'Soin sur cheveux'
    },
    {
      title: 'renders the sevice with text "Coloration sur cheveux"',
      props: {
        index: 0,
        service: {
          ...serviceFixture,
          category: 'Coloration',
        }
      },
      expectText: 'Coloration sur cheveux'
    },
    {
      title: 'renders the sevice when there is no name',
      props: {
        index: 0,
        service: {
          ...serviceFixture,
          name: null
        }
      },
      expectText: undefined
    }
  ]

  testCases.forEach(({ title, props, expectText }) => {
    it(title, async () => {
      const component = await mountSuspended(ServicesCard, { props })

      const imageEl = component.find('img')
      expect(imageEl.exists()).toBe(true)
      expect(imageEl.attributes('src')).toBe(props.service.image)
      expect(component.findComponent(ServicesCardInfo).exists()).toBe(false)

      if (expectText) {
        const wrapper = await renderSuspended(ServicesCard, { props })
        const el = wrapper.getAllByText(expectText)
        expect(el).toBeDefined()
      }
    })
  })
})

describe('Services Card click and hover', () => {
  // it('renders the service card info on hover', async () => {
  //   const component = await mountSuspended(ServicesCard, {
  //     props: {
  //       index: 0,
  //       service: serviceFixture
  //     }
  //   })

  //   const cardEl = component.find('article')
  //   await cardEl.trigger('mouseenter')
  //   component.vm.$nextTick(() => {
  //     const paragraph = component.find('p[text="En savoir plus"]')
  //     expect(paragraph.exists()).toBe(true)
  //     // expect(component.findComponent(ServicesCardInfo).exists()).toBe(true)
  //   })
  // })

  it('should show details on click', async () => {
    const component = await mountSuspended(ServicesCard, {
      props: {
        index: 0,
        service: serviceFixture
      },
      global: {
        provide: {
          [serviceSectionKey]: serviceSectionFixture
        }
      }
    })

    await component.trigger('click')
    expect(component.findComponent(ServicesCardInfo).exists()).toBe(true)

    // Remove the serviceSectionKey from the component's injection to simulate the absence of the provided value
    component.vm.$options.provide = {}
    await component.trigger('click')
    expect(component.findComponent(ServicesCardInfo).exists()).toBe(false)
  })
})
