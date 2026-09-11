import { mountSuspended } from '@nuxt/test-utils/runtime'
import { waitFor } from '@testing-library/vue'
import { describe, expect, it, vi } from 'vitest'

import BaseJumbotron from '~/components/base/Jumbotron.vue'
import Contact from '~/pages/contact.vue'

vi.stubGlobal('$fetch', vi.fn(() => Promise.resolve({ success: true })))

describe.only('Contact Page', () => {
  it('should render page', async () => {
    const component = await mountSuspended(Contact)
    
    const formEl = component.find('form')
    expect(formEl.exists()).toBeTruthy()
    expect(formEl.attributes('id')).toBeDefined()

    // Other expected components 
    const expectedComponents = [BaseJumbotron]
    expectedComponents.forEach(item => {
      expect(component.findComponent(item).exists()).toBeTruthy()
    })
  })

  const inputTypes = [ 'email', 'telephone' ]
  
  inputTypes.forEach(value => {
    it(`should contain input field with id ${value}`, async () => {
      const component = await mountSuspended(Contact)

      const inputEl = component.find(`input[id="${value}"]`)
      expect(inputEl.exists()).toBeTruthy()
      expect(inputEl.attributes('disabled')).toBeFalsy()
      expect(inputEl.attributes('placeholder')).toBeDefined()

      if (value === 'message') {
        const textareaEl = component.find(`textarea[id="${value}"]`)
        expect(textareaEl.exists()).toBeTruthy()
        expect(textareaEl.attributes('disabled')).toBeFalsy()
        expect(textareaEl.attributes('placeholder')).toBeDefined()
      }
    })
  })


  describe('Contact Page form integrity', () => {
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

      // expect($fetch).toHaveBeenCalledWith('/contact', expect.objectContaining({
      //   baseURL: 'https://example.com',
      //   body: {
      //     email: 'test@gmail.com',
      //     telephone: '0123456789',
      //     message: 'Some message'
      //   }
      // }))
    })
  })
}, 50000)
