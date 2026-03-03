import type { Arrayable, GalleryImage } from '~/types'

const galleryImages: Arrayable<GalleryImage> = [
  {
    name: 'Lissage brésilien',
    image: '/hero/hair6.jpg',
    category: 'image'
  },
  {
    name: 'Boucles naturelles',
    image: '/testimages/jpeg/customer10.jpg',
    category: 'image'
  },
  {
    name: 'Coupe pixie moderne',
    image: '/hero/hair10.jpg',
    category: 'image'
  },
  {
    name: 'Brushing volumineux',
    image: '/testimages/jpeg/customer18.jpg',
    category: 'image'
  },
  {
    name: 'Coupe dégradée',
    image: '/testimages/jpeg/customer6.jpg',
    category: 'image'
  },
  {
    name: 'Chignon élégant',
    image: '/hero/hair12.jpg',
    category: 'image'
  },
  {
    name: 'Nom de la coupe',
    image: '/hero/hair6.jpg',
    category: 'image'
  },
  {
    name: 'Coupe chignon',
    image: '/testimages/jpeg/customer15.jpg',
    category: 'image'
  },
  {
    name: 'Coupe afro',
    image: '/testimages/jpeg/customer11.jpg',
    category: 'image'
  },
  {
    name: 'Coupe undercut',
    image: [
      '/testimages/jpeg/customer13.jpg',
      '/testimages/jpeg/customer14.jpg',
      '/testimages/jpeg/customer17.jpg'
    ],
    category: 'image'
  },
  {
    name: 'Coupe bob asymétrique',
    image: '/hero/hair10.jpg',
    category: 'image'
  },
  {
    name: 'Coupe tresse',
    image: [
      '/testimages/jpeg/customer4.jpg',
      '/testimages/jpeg/customer5.jpg',
    ],
    category: 'image'
  }
]

/**
 * Custom composable to manage the image gallery state and filtering logic.
 * Currently, it returns all images without filtering, but it can be extended to implement search functionality.
 */
export function useImageGallery() {
  const images = ref(galleryImages)

  const search = ref<string>('')

  const filteredImages = computed(() => {
    return images.value.filter(img => img.name.toLowerCase().includes(search.value.toLowerCase())) // Currently returns all images
  })

  const keywords = computed(() => {
    const allKeywords = images.value.map(image => image.name)
    return Array.from(new Set(allKeywords)) // Return unique keywords
  })

  function isVideo(value: string | Arrayable<string>): boolean {
    if (typeof value === 'string') {
      return value.endsWith('.mp4') || value.endsWith('.webm') || value.endsWith('.ogg')
    } else if (Array.isArray(value)) {
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
