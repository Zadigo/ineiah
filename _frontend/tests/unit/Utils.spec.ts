import { describe, it, expect } from 'vitest'
import { createElementId, randomMotionDelays } from '../../app/utils'
import { faker } from '@faker-js/faker'

describe('Utils', () => {
  describe('createElementId', () => {
    it('should create an element id with default separator', () => {
      expect(createElementId('Test', null, 'Hello World')).toBe('Test__hello-world')
      expect(createElementId('Test', null, faker.lorem.words())).toBeTypeOf('string')
    })
  })

  describe('randomMotionDelays', () => {
    it('should return a number between 0 and 300', () => {
      const delay = randomMotionDelays()
      expect(delay).toBeGreaterThanOrEqual(0)
      expect(delay).toBeLessThanOrEqual(300)
    })
  })
})
