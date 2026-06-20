import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { config } from '@vue/test-utils'
import { describe, expect, it, vi, beforeAll, afterAll } from 'vitest'
import { createI18n } from 'vue-i18n'

import HeroBrand from '../../../app/components/hero/Brand.vue'
import HeroPhotoCall from '../../../app/components/hero/PhotoCall.vue'
import Index from '../../../app/pages/index.vue'
import HeroSectionBrands from '../../../app/components/hero/SectionBrands.vue'
import HeroSectionPhotocall from '../../../app/components/hero/SectionPhotocall.vue'
import HerSectionProducts from '../../../app/components/hero/SectionProducts.vue'
import HeroSectionReviews from '../../../app/components/hero/SectionReviews.vue'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  missing: (_: unknown, key: string) => key
})

config.global.plugins.push(i18n)
i18n.global.setLocale = vi.fn()

// vi.mock('../../../app/utils/index', async () => {
//   const actual = await vi.importActual('../../../app/utils/index')

//   return {
//     ...actual,
//     randomMotionDelays: vi.fn().mockReturnValue(0)
//   }
// })

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
