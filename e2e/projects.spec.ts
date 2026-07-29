import { test, expect } from './fixtures'

test.describe('Featured Projects — Helop', () => {
  test('links to the live Helop deployment, safely, in a new tab', async ({
    page,
  }) => {
    await page.goto('/#projects')
    const helopLink = page.getByRole('link', { name: /Helop/ })
    await expect(helopLink).toHaveAttribute(
      'href',
      'https://helop-opal.vercel.app',
    )
    await expect(helopLink).toHaveAttribute('target', '_blank')
    await expect(helopLink).toHaveAttribute('rel', /noopener/)
  })

  test('shows the project description and tech stack tags', async ({
    page,
  }) => {
    await page.goto('/#projects')
    const card = page.getByRole('link', { name: /Helop/ })
    await expect(
      card.getByText(
        'A modern web application developed and created by Giorgi Burkadze.',
      ),
    ).toBeVisible()

    for (const tag of ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']) {
      await expect(card.getByText(tag, { exact: true })).toBeVisible()
    }
  })
})
