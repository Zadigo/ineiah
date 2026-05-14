export * from './business'
export * from './dark_mode'
export * from './faq'
export * from './gallery'
export * from './socials'
export * from './reviews'
export * from './services'
export * from './google_search'
export * from './legal'

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

  const showVideoBlock = ref(false)

  return {
    showImage,
    showVideo,
    showCarousel,
    showVideoBlock
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

  function accept(callback?: () => void) {
    cookieAccepted.value = true
    showBanner.value = false

    if (isDefined(callback)) {
      callback()
    }
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
