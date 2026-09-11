import { expect, test } from '@playwright/test'

test.describe('customer wants to see proposed services', async () => {
  test.describe.configure({ timeout: 60000 })

  test('Customer wants to see the proposed services', async ({ page }) => {
    await page.goto('/')
    await page.waitForSelector('nav', { state: 'visible' })
    await page.waitForSelector('h1', { state: 'visible' })

    await page.waitForLoadState('networkidle')
    
    const link = page.getByRole('link', { name: 'Services', exact: true })
    await expect(link).toBeEnabled()
    
    await link.click()
    await page.waitForLoadState('networkidle')

    await page.evaluate(() => {
      window.scrollTo({ top: 250, left: 0, behavior: 'smooth' })
    })

    // const serviceCardClass = '#service-content-Mixte__Coupe__Court'
    // const firstServiceCard = page.locator(serviceCardClass)
    // await expect(firstServiceCard).toBeVisible()

    // await firstServiceCard.click()

    // // Scroll the service card into view to ensure it's fully visible
    // await page.evaluate(() => {
    //   document.querySelector(serviceCardClass)?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    // })

    // // Check for the CTA and that it can be actionnable
    // const ctaButton = page.locator('#tel-service-1')
    // await expect(ctaButton).toBeVisible()
    // await expect(ctaButton).toBeEnabled()
  })

  test('Customer should be able to go from home page to services section', async ({ page }) => {
    await page.goto('/')
  })
})
