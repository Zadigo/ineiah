import { InferSeoMetaPlugin } from '@unhead/bundler'
import { injectHead } from '#imports'

export default defineNuxtPlugin(() => {
  const head = injectHead()
  const { get } = useBusinessDetails()

  /**
   * Generate Open Graph title by removing the legal name from the end of the page title.
   * This is because the legal name is already included in the og:site_name meta tag, and including
   * it in the og:title would be redundant.
   */
  head.use(
    InferSeoMetaPlugin({
      ogTitle: title => title?.replace(` - ${get('legalName')}`, '') || ''
    })
  )
})
