import { test, expect } from './fixtures'

test.describe('Navigation', () => {
  test('desktop nav links scroll to each section', async ({ page }) => {
    test.skip((page.viewportSize()?.width ?? 0) < 768, 'desktop viewport only')
    await page.goto('/')

    const sections = [
      { link: 'About', id: 'about' },
      { link: 'Skills', id: 'skills' },
      { link: 'Projects', id: 'projects' },
      { link: 'Contact', id: 'contact' },
    ]

    for (const { link, id } of sections) {
      await page
        .getByRole('navigation')
        .getByRole('link', { name: link, exact: true })
        .click()
      await expect(page.locator(`#${id}`)).toBeInViewport()
    }
  })

  test('logo link returns to the hero section', async ({ page }) => {
    await page.goto('/#contact')
    await page.getByRole('link', { name: 'Giorgi.' }).click()
    await expect(page.locator('#top')).toBeInViewport()
  })

  test('desktop primary CTA opens the mail client via mailto, distinct from the Contact nav link', async ({
    page,
  }) => {
    test.skip((page.viewportSize()?.width ?? 0) < 768, 'desktop viewport only')
    await page.goto('/')

    const cta = page.getByRole('link', { name: "Let's talk" })
    await expect(cta).toHaveAttribute(
      'href',
      'mailto:giorgiburkadze2095@gmail.com',
    )

    const contactLink = page
      .getByRole('navigation')
      .getByRole('link', { name: 'Contact', exact: true })
    await expect(contactLink).toHaveAttribute('href', '#contact')
  })

  test('mobile menu includes a primary CTA that opens the mail client', async ({
    page,
  }) => {
    test.skip((page.viewportSize()?.width ?? 0) >= 768, 'mobile viewport only')
    await page.goto('/')

    await page.getByRole('button', { name: 'Open menu' }).click()
    await expect(
      page.getByRole('link', { name: "Let's talk" }),
    ).toHaveAttribute('href', 'mailto:giorgiburkadze2095@gmail.com')
  })

  test('mobile menu opens, lists all links, and navigates to a section', async ({
    page,
  }) => {
    test.skip((page.viewportSize()?.width ?? 0) >= 768, 'mobile viewport only')
    await page.goto('/')

    const menuButton = page.getByRole('button', { name: 'Open menu' })
    await expect(menuButton).toBeVisible()
    await menuButton.click()

    for (const link of ['About', 'Skills', 'Projects', 'Contact']) {
      await expect(
        page.getByRole('link', { name: link, exact: true }),
      ).toBeVisible()
    }

    await page.getByRole('link', { name: 'Contact', exact: true }).click()
    await expect(page.locator('#contact')).toBeInViewport()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible()
  })
})
