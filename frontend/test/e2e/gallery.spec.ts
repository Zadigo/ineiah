import { test, expect } from '@playwright/test'

test.describe('gallery actions', () => {
  test('customer should be able to make the image bigger', async ({ page }) => {
    await page.goto('/galerie')
    await page.waitForSelector('section#gallery', { state: 'visible' })
  })

  test('customer should be able to call from the gallery', async ({ page }) => {
    await page.goto('/galerie')
  })
})
