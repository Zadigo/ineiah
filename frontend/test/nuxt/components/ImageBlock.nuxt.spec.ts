import { describe, it, expect, beforeEach, vi } from 'vitest'
import type { GalleryImage } from '~/types'
import { galleryImageFixture } from '../../__fixtures__'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ImageBlock from '~/components/gallery/ImageBlock.vue'

type TestCase = {
  title: string
  expectSlider: boolean
  props: {
    image: GalleryImage
  }
}

const { useMediaQuery } = vi.hoisted(() => {
  return {
    useMediaQuery: vi.fn()
  }
})

vi.mock('@vueuse/core', async (originalImport) => {
  const actual = await originalImport<typeof import('@vueuse/core')>()
  return {
    ...actual,
    useMediaQuery: useMediaQuery
  }
})

describe('ImageBlock', () => {
  const testCases: TestCase[] = [
    {
      title: 'renders a single image correctly',
      expectSlider: false,
      props: {
        image: galleryImageFixture
      }
    },
    {
      title: 'renders multiple images correctly',
      expectSlider: true,
      props: {
        image: {
          ...galleryImageFixture,
          image: [
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg'
          ]
        }
      }
    }
  ]

  testCases.forEach(({ title, props, expectSlider }) => {
    it(title, async () => {
      const component = await mountSuspended(ImageBlock, { props })
      
      if (expectSlider) {
        const sliderEl = component.findComponent({ name: 'GallerySlider' })
        expect(sliderEl.exists()).toBe(true)
      } else {
        const imageEl = component.find('img')
        expect(imageEl.exists()).toBe(true)

        await imageEl.trigger('click')

        const buttonEl = component.find('button[id^="link-image-block"]')
        expect(buttonEl.exists()).toBe(true)
        
        // await buttonEl.trigger('click')
      }

      // expect(component.findComponent({ name: 'GalleryMobileInfoBlock' }).exists()).toBe(true)
      
      // useMediaQuery.mockReturnValue(true)
      // expect(component.findComponent({ name: 'LazyBaseTelephoneButton' }).exists()).toBe(false)
    })
  })
})
