import { defineVitestConfig } from '@nuxt/test-utils/config'

import vue from '@vitejs/plugin-vue'

export default defineVitestConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'nuxt',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  },
  resolve: {
    alias: {
      '~': new URL('./', import.meta.url).pathname
    }
  }
})
