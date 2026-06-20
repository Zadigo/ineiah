import { describe, expect, it, vi } from 'vitest'
import { useBusinessDetails, useWorkingDaysComposable } from '../../app/composables/business'
import type { Days, WorkingDay, WorkingDaysOptions } from '../../app/composables/business'
import type { ComputedRef } from 'vue'

vi.mock('@vueuse/core', () => {
  const actual = vi.importActual<typeof import('@vueuse/core')>('@vueuse/core')
  return {
    ...actual,
    reactify: (fn: unknown) => {
      return fn
    },
    createGlobalState: (fn: (options: WorkingDaysOptions) => { workingDays: ComputedRef<WorkingDay[]>, days: ComputedRef<Days[]>, getDay: (day: Days) => WorkingDay | undefined }) => {
      return fn()
    }
  }
})

describe('useBusinessDetails', async () => {
  it('should return the correct business details', () => {
    const { businessDetails } = useBusinessDetails()
    expect(businessDetails).toBeTypeOf('object')
  })

  it('should return selected key', () => {
    const { get } = useBusinessDetails()
    expect(get('legalName')).toBeTypeOf('string')
    expect(get('address')).toBeTypeOf('object')

  })
  
  it('should return reactive value', () => {
    const { reactiveGet } = useBusinessDetails()
    expect(reactiveGet('legalName')).toBeTypeOf('string')
    expect(reactiveGet('address')).toBeTypeOf('object')
  })

  it('should return active socials', () => {
    const { getSocial, getSocialIcon } = useBusinessDetails()
    expect(getSocial('instagram')).toBeTypeOf('object')
    expect(getSocialIcon('instagram')).toBeTypeOf('string')
  })
})

describe.skip('useWorkingDaysComposable', async () => {
  it('should return working days based on options', () => {
    const options: WorkingDaysOptions = {
      only: 'Weekdays',
      startTime: '09:00',
      endTime: '17:00'
    }
    const { workingDays } = useWorkingDaysComposable(options)
    expect(workingDays.value).toHaveLength(5)
    expect(workingDays.value[0].day).toBe('Monday')
    expect(workingDays.value[0].startTime).toBe('09:00')
    expect(workingDays.value[0].endTime).toBe('17:00')
  })
})
