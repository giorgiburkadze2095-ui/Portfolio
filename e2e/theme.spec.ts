import { test, expect } from './fixtures'

test.describe('Theme toggle', () => {
  test('defaults to the system dark preference when no theme is stored', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })

  test('defaults to the system light preference when no theme is stored', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  })

  test('toggling switches the theme, updates the icon, and persists across reload', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')

    const toggle = page.getByRole('button', { name: 'Switch to light mode' })
    await toggle.click()

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(
      page.getByRole('button', { name: 'Switch to dark mode' }),
    ).toBeVisible()

    const stored = await page.evaluate(() => localStorage.getItem('theme'))
    expect(stored).toBe('light')

    await page.reload()
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
    await expect(
      page.getByRole('button', { name: 'Switch to dark mode' }),
    ).toBeVisible()
  })

  test('a stored preference overrides the system preference', async ({
    page,
  }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.addInitScript(() => localStorage.setItem('theme', 'dark'))
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  })
})
