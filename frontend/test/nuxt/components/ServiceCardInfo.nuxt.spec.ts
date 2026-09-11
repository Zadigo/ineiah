import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import type { Service, ServiceSection } from '~/types'
import { serviceFixture, serviceSectionFixture } from '../../__fixtures__'
import BaseTelephoneButton from '~/components/base/TelephoneButton.vue'

import ServicesCardInfo from '~/components/services/CardInfo.vue'

type TestCase = {
  title: string
  index: number
  service: Service
  serviceSection: ServiceSection
}

describe('ServicesCardInfo', () => {
  const testCases: TestCase[] = [
    {
      index: 0,
      title: 'renders correctly with all props',
      service: serviceFixture,
      serviceSection: serviceSectionFixture
    }
  ]

  testCases.forEach(({ title, index, service, serviceSection }) => {
    it(title, async () => {
      const component = await renderSuspended(ServicesCardInfo, {
        props: {
          service,
          serviceSection,
          index
        }
      })

      expect(component.findByText('Contenu de la prestation')).toBeDefined()

      const wrapper = await mountSuspended(ServicesCardInfo, {
        props: {
          service,
          serviceSection,
          index
        }
      })

      expect(wrapper.findComponent(BaseTelephoneButton).exists()).toBe(true)
      
      const links = wrapper.findAll('a')
      expect(links.length).toBeGreaterThan(0)
      links.forEach(link => {
        expect(link.attributes('href')).toBeDefined()
      })
    })
  })
})
