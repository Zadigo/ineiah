import { InferSeoMetaPlugin } from '@unhead/addons'
import { injectHead } from '#imports'

export default defineNuxtPlugin(() => {
  const head = injectHead()
  const { get } = useBusinessDetails()
  
  head.use(InferSeoMetaPlugin({
    ogTitle: title => title?.replace(` - ${get('legalName')}`, '') || ''
  }))
})
