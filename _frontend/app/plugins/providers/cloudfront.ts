import { defineProvider, createOperationsGenerator } from '@nuxt/image/runtime'
import { joinURL } from 'ufo'

const ops = createOperationsGenerator()

export default defineProvider<{ baseURL: string | undefined }>({
  defaults: { baseURL: process.env.CLOUD_FRONT_URL },
  getImage(src, { modifiers, baseURL }) {
    const query = ops(modifiers)
    return { url: joinURL(baseURL || '', src) + (query ? `?${query}` : '') }
  }
})
