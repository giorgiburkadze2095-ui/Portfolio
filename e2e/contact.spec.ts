import { test, expect } from './fixtures'

test.describe('Contact section', () => {
  test('email button opens a mailto link', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:giorgiburkadze2095@gmail.com',
    )
  })

  test('GitHub and LinkedIn buttons link to the real profiles', async ({
    page,
  }) => {
    await page.goto('/#contact')

    const github = page.getByRole('link', { name: 'GitHub' })
    await expect(github).toHaveAttribute(
      'href',
      'https://github.com/giorgiburkadze2095-ui/',
    )
    await expect(github).toHaveAttribute('target', '_blank')

    const linkedin = page.getByRole('link', { name: 'LinkedIn' })
    await expect(linkedin).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/giorgi-burkadze-61b341406/',
    )
    await expect(linkedin).toHaveAttribute('target', '_blank')
  })

  test('footer credit and copyright are visible', async ({ page }) => {
    await page.goto('/#contact')
    await expect(page.getByText(/All rights reserved/)).toBeVisible()
    await expect(
      page.getByText('Built with React, Tailwind CSS & Framer Motion.'),
    ).toBeVisible()
  })
})
