// @ts-check
const { test, expect } = require('@playwright/test')

test('has title', async ({ page }) => {
  await page.goto('https://www.google.co.nz/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/)
})

test('about link', async ({ page }) => {
  await page.goto('https://www.google.co.nz/')

  // Click the about link.
  await page.getByRole('link', { name: 'About' }).click()

  // Expects page to contain the mission statement.
  await expect(page.getByText(/Our mission/)).toBeVisible()
})
