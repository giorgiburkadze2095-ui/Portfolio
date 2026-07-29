import { test, expect } from './fixtures'

test.describe('Hero section', () => {
  test('renders name, role, and tagline', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('#top')
    await expect(
      hero.getByRole('heading', { name: /Giorgi Burkadze/ }),
    ).toBeVisible()
    await expect(
      hero.getByText('Web Developer & Animation Specialist'),
    ).toBeVisible()
    await expect(hero.getByText('Web Development')).toBeVisible()
    await expect(hero.getByText('Creator of Helop', { exact: true })).toBeVisible()
  })

  test('"View Projects" CTA scrolls to the projects section', async ({
    page,
  }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'View Projects' }).click()
    await expect(page.locator('#projects')).toBeInViewport()
  })

  test('"Contact Me" CTA scrolls to the contact section', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Contact Me' }).click()
    await expect(page.locator('#contact')).toBeInViewport()
  })
})
