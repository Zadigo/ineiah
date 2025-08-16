import { describe, expect, it, vi } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/vue'
import { renderSuspended, mountSuspended } from '@nuxt/test-utils/runtime'

import StoryCard from '~/components/story/Card.vue'

describe.concurrent.skip('Story Card', () => {
  it('should render card', async () => {
    const html = await mountSuspended(StoryCard, {
      props: {
        invert: true
      }
    })

    expect(html.text()).toContain('Quand Anissa découvre la coiffure')
  })
})
