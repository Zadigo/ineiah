import { describe, expect, it, vi } from 'vitest'
import { useBusinessDetails, useWorkingDaysComposable } from '~/composables/business'

import type { Days, WorkingDay, WorkingDaysOptions } from '~/composables/business'

vi.mock('@vueuse/core', async (original) => {
  const actual = await original<typeof import('@vueuse/core')>()
  return {
    ...actual,
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
    expect(toValue(reactiveGet('legalName'))).toBeTypeOf('string')
    expect(toValue(reactiveGet('address'))).toBeTypeOf('object')
  })

  it('should return active socials', () => {
    const { getSocial, getSocialIcon } = useBusinessDetails()
    expect(getSocial('instagram')).toBeTypeOf('object')
    expect(getSocialIcon('instagram')).toBeTypeOf('string')
  })

  it('composables should return default values', () => {
    const { activeSocials, address, geoLocation, founderImage, organizationLogo, organizationImages, suffixLegalName } = useBusinessDetails()
    expect(toValue(activeSocials)).toBeTypeOf('object')
    expect(toValue(address)).toBeTypeOf('string')
    expect(toValue(geoLocation)).toBeTypeOf('string')
    expect(toValue(founderImage)).toBeTypeOf('string')
    expect(toValue(organizationLogo)).toBeTypeOf('string')
    expect(toValue(organizationImages)).toBeTypeOf('object')

    const result = suffixLegalName('Test Name')
    expect(result).toBeTypeOf('string')
    expect(result).toContain('Test Name')
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
