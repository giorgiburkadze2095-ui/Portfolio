import { test, expect } from './fixtures'

test.describe('Contact section', () => {
  test('email button opens a mailto link', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:giorgiburkadze2095@gmail.com',
    )
  })

  test('GitHub and LinkedIn buttons are present', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByRole('link', { name: 'GitHub' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible()
  })

  test('footer credit and copyright are visible', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByText(/All rights reserved/)).toBeVisible()
    await expect(
      page.getByText('Built with React, Tailwind CSS & Framer Motion.'),
    ).toBeVisible()
  })
})
