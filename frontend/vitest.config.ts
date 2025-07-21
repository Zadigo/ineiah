import path from 'path'
import { defineVitestConfig } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'

export default defineVitestConfig({
  test: {
    globals: true,
    testTimeout: 20000,
    coverage: {
      enabled: true
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'nuxt-pages',
          testTimeout: 20000,
          include: ['**/*.{spec,test}.ts']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'firebase/firestore': path.resolve(__dirname, 'tests/__mocks__/firebase/firestore.ts'),
      'firebase/app': path.resolve(__dirname, 'tests/__mocks__/firebase/app.ts'),
      'firebase/database': path.resolve(__dirname, 'tests/__mocks__/firebase/database.ts')
    }
  }
})
