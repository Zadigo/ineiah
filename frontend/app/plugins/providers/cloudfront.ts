import { defineProvider, createOperationsGenerator } from '#image'
import { joinURL } from 'ufo'

const ops = createOperationsGenerator()

export default defineProvider<{ baseURL: string }>({
  defaults: { baseURL: process.env.CLOUD_FRONT_URL },
  getImage(src: string, { modifiers, baseURL }) {
    const query = ops(modifiers)
    return { url: joinURL(baseURL || '', src) + (query ? `?${query}` : '') }
  }
})
