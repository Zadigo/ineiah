// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt({
  files: ['**/*.{ts,vue}'],
  plugins: {
    '@stylistic': stylistic
  },
  ignores: [
    '**/*.d.ts',
    '**/coverage/**',
    '**/dist/**',
    '**/volt/**',
    '**/components/ui/**'
  ],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 20
      },
      'multiline': {
        'max': 1
      }
    }],
    'vue/multi-word-component-names': ['warn'],
    'vue/no-v-html': ['warn'],

    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/related-getter-setter-pairs': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-template-expression': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-misused-spread': 'warn',
    '@typescript-eslint/no-extraneous-class': 'warn',

    '@stylistic/no-trailing-spaces': ['warn'],
    '@stylistic/comma-dangle': ['warn', 'never'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/no-confusing-arrow': ['warn'],
    '@stylistic/switch-colon-spacing': [
      'error', { 'after': true, 'before': false }
    ]
  }
})
