import { InferSeoMetaPlugin } from '@unhead/addons'
import { injectHead } from '@unhead/vue'

export default defineNuxtPlugin(() => {
  const head = injectHead()

  head.use(InferSeoMetaPlugin({
    ogTitle: title => title.replace(' - My Site', '')
  }))
})
