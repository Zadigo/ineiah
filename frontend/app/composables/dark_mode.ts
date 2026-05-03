/**
 * Composable to manage dark mode state
 * @param enabled - Whether to enable dark mode support (default: false)
 * @example
 * const { darkMode, toggleDarkMode } = useDarkModeComposable(true)
 * darkMode.value = true // Enable dark mode
 * toggleDarkMode() // Toggle dark mode
 */
export const useDarkModeComposable = createGlobalState((enabled = false) => {
  const darkMode = useDark()

  if (import.meta.client && enabled) {
    const toggleDarkMode = useToggle(darkMode)

    return {
      darkMode,
      toggleDarkMode
    }
  } else {
    return {
      darkMode,
      toggleDarkMode: () => { }
    }
  }
})
