import type { Arrayable } from '~/types'
import { galleryImages } from './images'

/**
 * Custom composable to manage the image gallery state and filtering logic.
 * Currently, it returns all images without filtering, but it can be extended to implement search functionality.
 */
export function useImageGallery() {
  const _images = ref(galleryImages)
  const images = refDefault(_images, []) // Ensure images is always an array

  const search = ref<string>('')
  const query = useUrlSearchParams()

  watch(search, (newValue) => {
    query.q = newValue
  })

  const filteredImages = computed(() => {
    // if (search.value === '') return images.value
    return images.value.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
  })

  const keywords = computed(() => {
    return [
      'Shampoing',
      'Coupe',
      'Brushing',
      'Coloration',
      'Soin',
      'Chignon',
      'Styling',
      'Hair contouring'
    ]
  })

  function isVideo(value: string | Arrayable<string>): boolean {
    if (typeof value === 'string') {
      return value.endsWith('.mp4') || value.endsWith('.webm') || value.endsWith('.ogg')
    }
    else if (Array.isArray(value)) {
      return value.some(item => item.endsWith('.mp4') || item.endsWith('.webm') || item.endsWith('.ogg'))
    }
    return false
  }

  return {
    /**
     * A reactive reference to the array of gallery images. Each image has a name, a
     * path (or paths) to the image file(s), and a category indicating whether it's an image or a video.
     * This data can be used to display the gallery and implement filtering based on the search query.
     */
    images,
    /**
     * A reactive reference to the search query entered by the user. This can be used to
     * filter the images in the gallery based on their names.
     * @default '''
     */
    search,
    /**
     * A computed property that filters the images based on the search query. It checks if
     * the image name includes the search term (case-insensitive). Currently, it returns all images, but
     * it can be extended to implement actual filtering logic.
     */
    filteredImages,
    /**
     * A computed property that generates a list of unique keywords from the image names
     * in the gallery. This can be used for filtering or categorization purposes.
     */
    keywords,
    /**
     * Checks if the provided value is a video file based on its extension. It supports both string and array of strings.
     * @param value - The value to check, which can be a string or an array of strings representing image paths.
     */
    isVideo
  }
}
