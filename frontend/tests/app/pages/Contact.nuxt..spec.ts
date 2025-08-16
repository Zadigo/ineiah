import { mountSuspended } from '@nuxt/test-utils/runtime'
import { fireEvent, waitFor } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import BaseJumbotron from '~/components/BaseJumbotron.vue'
import Contact from '~/pages/contact.vue'

vi.stubGlobal('$fetch', vi.fn(() => Promise.resolve({ success: true })))

describe('Nos Préférences Page', () => {
  it('should render page', async () => {
    const component = await mountSuspended(Contact)
    expect(component.text()).toContain('Toutes nos informations de contact')

    const expectedComponents = [BaseJumbotron]

    expectedComponents.forEach(item => {
      expect(component.findComponent(item).exists()).toBeTruthy()
    })
  })

  describe('submit form', () => {
    it('should submit form', async () => {
      const component = await mountSuspended(Contact)
      const form = component.find(`[id="form-contact-us"]`)
      const button = form.find('button')

      const inputEmail = form.find(`[id="email"]`)
      const inputTelephone = form.find(`[id="telephone"]`)
      const inputMessage = form.find(`[id="message"]`)

      await waitFor(() => expect(button.exists()).toBeTruthy())

      await inputEmail.setValue('test@gmail.com')
      await inputTelephone.setValue('0123456789')
      await inputMessage.setValue('Some message')

      await button.trigger('click')

      expect($fetch).toHaveBeenCalledWith('/contact', expect.objectContaining({
        baseURL: 'https://example.com',
        body: {
          email: 'test@gmail.com',
          telephone: '0123456789',
          message: 'Some message'
        }
      }))
    })
  })
}, 50000)
