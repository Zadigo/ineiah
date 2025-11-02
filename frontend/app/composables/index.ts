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
