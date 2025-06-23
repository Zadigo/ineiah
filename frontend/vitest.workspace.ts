import { fileURLToPath } from 'node:url'
import { defineWorkspace } from 'vitest/config'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineWorkspace([
  // {
  //   test: {
  //     name: 'unit',
  //     include: ['tests/unit/**/*.{test,spec}.ts'],
  //     environment: 'jsdom'
  //   }
  // },
  {
    test: {
      name: 'nuxt',
      include: ['tests/nuxt/**/*.{test,spec}.ts'],
      environment: 'nuxt',
      // environmentOptions: {
      //   nuxt: {
      //     rootDir
      //   }
      // }
    }
  }
])
