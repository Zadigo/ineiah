import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it } from 'vitest'

import NotreHistoire from '~/pages/notre-histoire.vue'
import BaseJumbotron from '~/components/base/Jumbotron.vue'
import StoryCard from '~/components/story/Card.vue'
import BaseQuote from '~/components/base/Quote.vue'

describe('Notre Histoire Page', () => {
  it('should render page', async () => {
    const component = await renderSuspended(NotreHistoire)
    const pageLead = await component.findByText('Notre histoire')
    expect(pageLead).not.toBeUndefined()
  })

  it('should have the required components', async () => {
    const component = await mountSuspended(NotreHistoire)
    component.findComponent(BaseJumbotron)

    const storyCards = component.findAllComponents(StoryCard)
    expect(storyCards.length).toBeGreaterThan(0)

    const baseQuote = component.findComponent(BaseQuote)
    expect(baseQuote).not.toBeUndefined()
  })
})
