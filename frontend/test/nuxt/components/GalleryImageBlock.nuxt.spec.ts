import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import ImageBlock from '~/components/gallery/ImageBlock.vue'
import GallerySlider from '~/components/gallery/Slider.vue'
import BaseTelephoneButton from '~/components/base/TelephoneButton.vue'
import { galleryImageFixture } from '../../__fixtures__'
import type { GalleryImage } from '~/types'

type TestCase = {
  title: string
  props: {
    image: GalleryImage
  }
}

describe('Gallery Image Block', () => {
  const testCases: TestCase[] = [
    {
      title: 'should render image component with single image',
      props: {
        image: galleryImageFixture
      }
    },
    {
      title: 'should render image component with multiple images',
      props: {
        image: {
          ...galleryImageFixture,
          image: [
            'https://example.com/google.jpg',
            'https://example.com/google.jpg'
          ]
        }
      }
    }
  ]

  testCases.forEach(({ title, props }) => {
    it(title, async () => {
      const component = await mountSuspended(ImageBlock, { props })
      
      if (props.image.image.length > 1) {
        const sliderEl = component.getComponent(GallerySlider)
        expect(sliderEl).toBeDefined()
      } else {
        const imageEl = component.get('img')
        expect(imageEl).toBeDefined()
        expect(imageEl.attributes('src')).toBe(props.image.image[0])
        expect(imageEl.attributes('alt')).toBeDefined()
      }
    })
  })
  
  it.skip('should render telephone button when selected', async () => {
    const component = await mountSuspended(ImageBlock, {
      props: {
        image: galleryImageFixture
      }
    })

    // Image Click
    const img = component.get('img')
    void img.trigger('click')
    
    const button = component.getComponent(BaseTelephoneButton)
    expect(button).toBeDefined()
  })
})
