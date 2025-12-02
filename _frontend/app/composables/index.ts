import { useColorMode } from '@vueuse/core'

/**
 * Composable to generate dynamic IDs from string values
 */
export function useDynamicId() {
  function create(value: string | null, prefix?: string): string {
    if (!value) {
      return ''
    }

    const noSpace = value.toLowerCase().replace(/\s+/g, '-')
    const noAccents = noSpace.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const noSpecialChars = noAccents.replace(/[^a-z0-9-]/g, '')

    if (prefix) {
      return `${prefix}-${noSpecialChars}`
    }

    return noSpecialChars
  }

  return {
    /**
     * Creates a dynamic ID from a string value
     * @param {string | null} value - The string to convert into an ID
     * @param {string} [prefix] - An optional prefix to prepend to the ID
     * @returns {string} The generated dynamic ID
     */
    create
  }
}

export const useDevComposable = createGlobalState(() => {
  const showImage = ref<boolean>(true)
  const showVideo = ref<boolean>(false)
  const showCarousel = ref<boolean>(false)

  watch(showImage, (newImage) => {
    if (newImage) {
      showImage.value = newImage
      showVideo.value = false
      showCarousel.value = false
    }
  })

  watch(showVideo, (newVideo) => {
    if (newVideo) {
      showVideo.value = newVideo
      showImage.value = false
      showCarousel.value = false
    }
  })

  watch(showCarousel, (newCarousel) => {
    if (newCarousel) {
      showCarousel.value = newCarousel
      showImage.value = false
      showVideo.value = false
    }
  })

  return {
    showImage,
    showVideo,
    showCarousel
  }
})

/**
 * Composable to manage dark mode state
 */
export const useDarkModeComposable = createGlobalState(() => {
  const [darkMode, toggleDarkMode] = useToggle()

  if (import.meta.client) {
    const colorMode = useColorMode({
      initialValue: 'system',
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
      darkMode.value = colorMode.value === 'dark' || (colorMode.value === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    })
  }

  return {
    darkMode,
    toggleDarkMode
  }
})

/**
 * Composable to manage cookie banner state
 */
export const useCookieComposable = createGlobalState(() => {
  const cookieAccepted = useSessionStorage('cookieAccepted', () => false)
  const showBanner = useState('showCookieBanner', () => !cookieAccepted.value)
  const showOptions = useState('showCookieOptions', () => false)

  const toggleShowBanner = useToggle(showBanner)
  const toggleShowOptions = useToggle(showOptions)

  function accept() {
    cookieAccepted.value = true
    showBanner.value = false
  }

  return {
    /**
     * Whether the user has accepted cookies
     * @default false
     */
    cookieAccepted,
    /**
     * Whether to show the cookie banner
     * @default true
     */
    showBanner,
    /**
     * Whether to show the cookie options modal
     * @default false
     */
    showOptions,
    /**
     * Toggles the visibility of the cookie banner
     */
    toggleShowBanner,
    /**
     * Toggles the visibility of the cookie options modal
     */
    toggleShowOptions,
    /**
     * Accepts the cookie policy and hides the banner
     */
    accept
  }
})
