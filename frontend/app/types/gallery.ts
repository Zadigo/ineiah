import type { Arrayable } from '.'

type BaseUserInfo = {
  name: string
  website: string | null
  instagram: string
}

type GalleryImageAuthor = BaseUserInfo & {
  username: string | null
}

type GalleryImageModel = Pick<BaseUserInfo, 'instagram'>

type GalleryImageBrands = Pick<BaseUserInfo, 'name' | 'website'>

export interface GalleryImage {
  /**
   * The name of the image, used for display and search purposes.
   * This should be a descriptive name that accurately represents the content of the image.
   * @example 'Coupe styling mi-long'
   */
  name: string
  /**
   * The names of the image files, which can be a single string or an array of strings.
   * This allows for multiple images to be associated with a single gallery entry.
   * @example '/images/gallery/customer1.jpg' or ['/images/gallery/customer1.jpg', '/images/gallery/customer2.jpg']
   */
  image: Arrayable<string>
  /**
   * The category of the media, indicating whether it is an image or a video.
   * This helps in differentiating between different types of media content in the gallery.
   * @example 'image' or 'video'
   */
  category: 'image' | 'video'
  /**
   * The URL associated with the image, which can be used for linking to external resources or additional information.
   * This can be null if there is no associated URL.
   * @example 'https://example.com/more-info' or null
   */
  url: string | null
  /**
   * The alternative text for the image, used for accessibility purposes and SEO.
   * This should be a concise description of the image content.
   * @example 'A person getting a haircut'
   */
  alt: string | null
  /**
   * A boolean indicating whether the image is visible in the gallery.
   * This can be used to control the display of images based on certain conditions or user preferences.
   * @example true or false
   */
  isVisible: boolean
  /**
   * The author of the image, containing information about the person who created or owns the image.
   * This includes their name, username, website, and Instagram handle.
   * @example { name: 'John Doe', username: 'johndoe', website: 'https://johndoe.com', instagram: '@johndoe' }
   */
  author: GalleryImageAuthor
  /**
   * The model associated with the image, containing information about the person featured in the image.
   * This includes their Instagram handle, which can be used for social media linking and promotion.
   * @example { instagram: '@modelname' }
   */
  model: GalleryImageModel
  /**
   * An array of brands associated with the image, containing information about the brands featured or used in the image.
   * Each brand includes its name and website, which can be used for promotional purposes or linking to brand pages.
   * @example [{ name: 'Brand A', website: 'https://brand-a.com' }, { name: 'Brand B', website: 'https://brand-b.com' }]
   */
  brands: Arrayable<GalleryImageBrands>
}
