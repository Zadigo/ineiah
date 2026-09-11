import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import StoryCard from '~/components/story/Card.vue'

type TestCase = {
  title: string
  inverted: boolean
}

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

  const testCases: TestCase[] = [
    {
      title: 'should render card without inversion',
      inverted: false
    },
    {
      title: 'should render card with inversion',
      inverted: true
    }
  ]

  testCases.forEach(({ title, inverted }) => {
    it(title, async () => {
      const content = await mountSuspended(StoryCard, {
        props: {
          invert: inverted,
          image: '/images/story-1.jpg'
        }
      })

      if (inverted) {
        const invertedImage = content.get('#inverted-image')
        expect(invertedImage).toBeDefined()
      }
    })
  })
})
