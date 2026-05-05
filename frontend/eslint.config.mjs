// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
// import linkCheckerPlugin from 'nuxt-link-checker/eslint'

export default withNuxt({
  rules: {
    'vue/max-attributes-per-line': 'off'
  }
  // plugins: [
  //   linkCheckerPlugin
  // ]
})
