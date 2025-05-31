import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Ubuntu', 'Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          DEFAULT: 'oklch(var(--bg-brand) / <alpha-value>)',
          200: 'oklch(var(--bg-brand-200) / <alpha-value>)',
          300: 'oklch(var(--bg-brand-300) / <alpha-value>)',
          400: 'oklch(var(--bg-brand-400) / <alpha-value>)',
          500: 'oklch(var(--bg-brand-500) / <alpha-value>)',
        },
        secondary: 'oklch(var(--color-secondary) / <alpha-value>)'
      },
      screens: {},
    },
  },
  darkMode: 'class',
}

export default config
