import type { Arrayable, GalleryImage } from '~/types'

const galleryImages: Arrayable<GalleryImage> = [
  {
    name: 'Coupe styling mi-long',
    alt: 'Coupe styling mi-long',
    image: [
      '/images/gallery/customer1.jpg',
      '/images/gallery/customer2.jpg'
    ],
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Brushing volumineux',
    alt: 'Brushing volumineux',
    image: '/images/gallery/customer18.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Hair contouring cheveux longs',
    alt: 'Hair contouring cheveux longs',
    image: [
      '/images/gallery/customer32.jpg',
      '/images/gallery/customer33.jpg'
    ],
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Soin à la Kératine et couleur',
    alt: 'Soin à la Kératine et couleur',
    image: '/images/gallery/customer3.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Coupe dégradée',
    alt: 'Coupe dégradée',
    image: '/images/gallery/customer6.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Coupe homme',
    alt: 'Coupe homme',
    image: '/images/gallery/customer7.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Coupe homme',
    alt: 'Coupe homme',
    image: '/images/gallery/customer8.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Chignon élégant',
    alt: 'Chignon élégant',
    image: '/images/gallery/customer9.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Nom de la coupe',
    alt: 'Nom de la coupe',
    image: '/images/gallery/customer19.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Shampoing coupe styling',
    alt: 'Shampoing coupe styling',
    image: '/images/gallery/customer23.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Coupe afro',
    alt: 'Coupe afro',
    image: '/images/gallery/customer11.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Coupe undercut',
    alt: 'Coupe undercut',
    image: [
      '/images/gallery/customer13.jpg',
      '/images/gallery/customer14.jpg',
      '/images/gallery/customer17.jpg'
    ],
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: ''
    }
  },
  {
    name: 'Styling XL',
    alt: 'Styling XL',
    image: [
      '/images/gallery/customer29.jpg',
      '/images/gallery/customer30.jpg',
    ],
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: 'kira-lopez'
    }
  },
  {
    name: 'Coloration repousse longueur cheveux mi-longs',
    alt: 'Coloration repousse longueur cheveux mi-longs',
    image: [
      '/images/gallery/customer24.jpg',
      '/images/gallery/customer25.jpg',
    ],
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: 'kira-lopez'
    },
  },
  {
    name: 'Tresses',
    alt: 'Tresses',
    image: '/images/gallery/customer34.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: 'kira-lopez'
    }
  },
  {
    name: 'Coupe chignon',
    alt: 'Coupe chignon',
    image: '/images/gallery/customer35.jpg',
    category: 'image',
    url: null,
    author: {
      name: '',
      username: '',
      website: '',
      instagram: 'kira-lopez'
    }
  }
]

/**
 * Custom composable to manage the image gallery state and filtering logic.
 * Currently, it returns all images without filtering, but it can be extended to implement search functionality.
 */
export function useImageGallery() {
  const images = ref(galleryImages)

  const search = ref<string>('')
  const query = useUrlSearchParams() as { q: string }

  watch(search, (newValue) => { query.q = newValue })

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
