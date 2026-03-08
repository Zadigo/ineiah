import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'
import ImageBlock from '../../../app/components/gallery/ImageBlock.vue'
import GallerySlider from '../../../app/components/gallery/Slider.vue'
import { GalleryImage } from '../../../app/types'

const image: GalleryImage = {
  author: {
    name: 'John Doe',
    instagram: 'https://instagram.com/johndoe',
    username: 'johndoe',
    website: 'https://johndoe.com',
  },
  category: 'image',
  image: '/images/landscape.jpg',
  name: 'Landscape',
  url: '/images/landscape.jpg',
}

describe('Gallery Image Block', () => {
    it('should render image component', async () => {
      const component = await mountSuspended(ImageBlock, {
        props: {
          image
        }
      })

      expect(component.get('img')).toBeDefined()

      // Image Click
      const img = component.get('img')
      await img.trigger('click')
    })

    it('should render image slider', async () => {
      const multipleImages = { ...image }
      multipleImages.image = [
        'https://example.com/google.jpg',
        'https://example.com/google.jpg'
      ]
      const el = await mountSuspended(ImageBlock, { props: { image: multipleImages } })
      expect(el.getComponent(GallerySlider)).toBeDefined()
    })
})
