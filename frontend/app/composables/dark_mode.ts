// import { useColorMode } from '@vueuse/core'


/**
 * Composable to manage dark mode state
 * @param enabled - Whether to enable dark mode support (default: false)
 * @example
 * const { darkMode, toggleDarkMode } = useDarkModeComposable(true)
 * darkMode.value = true // Enable dark mode
 * toggleDarkMode() // Toggle dark mode
 */
export const useDarkModeComposable = createGlobalState((enabled = false) => {
  const [darkMode, toggleDarkMode] = useToggle()

  if (import.meta.client && enabled) {
    const colorMode = useColorMode({
      initialValue: 'light',
      onChanged(mode, defaultHandler) {
        if (mode == 'dark') {
          document.documentElement.classList.add('p-dark')
          defaultHandler(mode)
        } else {
          document.documentElement.classList.remove('p-dark')
          defaultHandler(mode)
        }
      }
    })

    watch(darkMode, (newValue) => {
      colorMode.value = newValue ? 'dark' : 'light'
    })

    onMounted(() => {
      darkMode.value = colorMode.value === 'dark' || (colorMode.value === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    })
  }

  return {
    darkMode,
    toggleDarkMode
  }
})
