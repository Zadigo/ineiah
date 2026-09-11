import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi, beforeAll, afterAll } from 'vitest'

import HeroBrand from '~/components/hero/Brand.vue'
import HeroPhotoCall from '~//components/hero/PhotoCall.vue'
import Index from '~/pages/index.vue'
import HeroSectionBrands from '~/components/hero/SectionBrands.vue'
import HeroSectionPhotocall from '~/components/hero/SectionPhotocall.vue'
import HerSectionProducts from '~/components/hero/SectionProducts.vue'
import HeroSectionReviews from '~/components/hero/SectionReviews.vue'

describe('Index Page', () => {
  beforeAll(() => {
    vi.stubEnv('NODE_ENV', 'test')
  })
  
  afterAll(() => {
    vi.unstubAllEnvs()
  })

  it('should render page', async () => {
    const renderedEl = await renderSuspended(Index)
    const el = await renderedEl.findByText("L'art de coiffer toutes les textures")
    expect(el).toBeDefined()
  })

  it('should have required components', async () => {
    const component = await mountSuspended(Index)
    const components = [ HeroBrand, HeroPhotoCall, HeroSectionBrands, HeroSectionPhotocall, HerSectionProducts, HeroSectionReviews ]

    components.forEach((item) => {
      const el = component.getComponent(item)
      expect(el).toBeDefined()
    })
  })

  describe('Photocall', () => {
    it('should have four pictures', async () => {
      const component = await mountSuspended(Index)
      const items = component.findAllComponents(HeroPhotoCall)

      expect(items.length).toBeGreaterThanOrEqual(4)
    })
  })

  // randomMotionDelays changes the delay of the motion-group, 
  // so we need to mock it to have a consistent snapshot
  it.todo('should match snapshot', async () => {
    const component = await mountSuspended(Index)
    expect(component.html()).toMatchSnapshot()
  })
}, 5000)
