import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import StoryCard from '../../../app/components/story/Card.vue'

describe.concurrent('Story Card', () => {
  it('should render card', async () => {
    const content = await mountSuspended(StoryCard, {
      props: {
        invert: false,
        image: '/images/story-1.jpg'
      }
    })

    expect(content.text()).toEqual('')
    expect(content.get('h3')).toBeDefined()

    const img = content.get('img')
    expect(img).toBeDefined()
    expect(img.attributes('src')).toBe('/images/story-1.jpg')
  })

  it('should render inverted card', async () => {
    const content = await mountSuspended(StoryCard, {
      props: {
        invert: true,
        image: '/images/story-1.jpg'
      }
    })
    
    const invertedImage = content.get('#inverted-image')
    expect(invertedImage).toBeDefined()
  })
})
