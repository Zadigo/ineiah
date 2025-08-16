import { InferSeoMetaPlugin } from '@unhead/addons'
import { businessDetails } from '~/constants/business'
import { injectHead } from '#imports'

export default defineNuxtPlugin(() => {
  const head = injectHead()

  head.use(InferSeoMetaPlugin({
    ogTitle: title => title?.replace(` - ${businessDetails.legalName}`, '') || ''
  }))
})
