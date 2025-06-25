import { describe, expect, it } from 'vitest'
import { screen, fireEvent, waitFor } from '@testing-library/vue'
import { renderSuspended } from '@nuxt/test-utils/runtime'

import Index from '../pages/index.vue'

describe('Should render home page', () => {
  it('render home page', async () => {
    const component = await renderSuspended(Index, {})
    const el = component.findByText('Sublime ta singularité')
    expect(el).not.toBeUndefined()

    const discoverLink = await component.findByText('Découvrir')
    await fireEvent.click(discoverLink)
    const pageTitle = component.findByText('Notre histoire')
    expect(pageTitle).not.toBeUndefined()
  })
})
