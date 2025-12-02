import { defineVitestProject } from '@nuxt/test-utils/config'
import { defineConfig } from 'vitest/config'

import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    testTimeout: 20000,
    setupFiles: ['tests/setup.ts'],
    alias: {
      '~': path.resolve(__dirname, 'app')
    },
    coverage: {
      enabled: true
    },
    projects: [
      await defineVitestProject({
        test: {
          name: 'nuxt-pages',
          include: ['tests/app/**/*.{spec,test}.ts'],
          testTimeout: 20000
        }
      })
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
