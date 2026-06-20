import { mountSuspended, mockNuxtImport } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import ImageBlock from '../../../app/components/gallery/ImageBlock.vue'
import GallerySlider from '../../../app/components/gallery/Slider.vue'
import type { GalleryImage } from '../../../app/types'
import BaseTelephoneButton from '../../../app/components/base/TelephoneButton.vue'

const image: GalleryImage = {
  author: {
    name: 'John Doe',
    instagram: 'https://instagram.com/johndoe',
    username: 'johndoe',
    website: 'https://johndoe.com'
  },
  alt: 'A beautiful landscape',
  isVisible: true,
  brands: [],
  model: {
    instagram: ''

  },
  category: 'image',
  image: '/images/landscape.jpg',
  name: 'Landscape',
  url: '/images/landscape.jpg'
}

// const { toggleSelectedMock } = vi.hoisted(() => ({ toggleSelectedMock: vi.fn() }))

// mockNuxtImport('useToggle', () => {
//   return () => [ref(true), toggleSelectedMock]
// })

describe('Gallery Image Block', () => {
  it('should render image component', async () => {
    const component = await mountSuspended(ImageBlock, {
      props: {
        image
      }
    })

    console.log(component.html())

    const imageEl = component.get('img')
    expect(imageEl).toBeDefined()
    expect(imageEl.attributes('src')).toBe(image.image)
    expect(imageEl.attributes('alt')).toBeDefined()
  })
  
  it.skip('should render telephone button when selected', async () => {
    const component = await mountSuspended(ImageBlock, {
      props: {
        image
      }
    })

    // Image Click
    const img = component.get('img')
    void img.trigger('click')
    
    const button = component.getComponent(BaseTelephoneButton)
    expect(button).toBeDefined()
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
