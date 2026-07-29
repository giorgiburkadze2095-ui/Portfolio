import { test, expect } from './fixtures'

const BREAKPOINTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
]

test.describe('Responsive layout', () => {
  for (const bp of BREAKPOINTS) {
    test(`renders without horizontal overflow at ${bp.name} (${bp.width}px)`, async ({
      page,
    }) => {
      await page.setViewportSize(bp)
      await page.goto('/')
      const hasOverflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      )
      expect(hasOverflow).toBe(false)
    })
  }

  test('hamburger menu shows below the md breakpoint, full nav shows above it', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeVisible()

    await page.setViewportSize({ width: 1440, height: 900 })
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeHidden()
    await expect(
      page
        .getByRole('navigation')
        .getByRole('link', { name: 'About', exact: true }),
    ).toBeVisible()
  })

  test('skills cards stack vertically on mobile and sit in a row on desktop', async ({
    page,
  }) => {
    await page.goto('/#skills')
    const frontend = page.getByRole('heading', { name: 'Frontend' })
    const backend = page.getByRole('heading', { name: 'Backend' })

    await page.setViewportSize({ width: 1440, height: 900 })
    const [frontendDesktop, backendDesktop] = await Promise.all([
      frontend.boundingBox(),
      backend.boundingBox(),
    ])
    expect(frontendDesktop).not.toBeNull()
    expect(backendDesktop).not.toBeNull()
    expect(Math.abs(frontendDesktop!.y - backendDesktop!.y)).toBeLessThan(10)

    await page.setViewportSize({ width: 375, height: 812 })
    const [frontendMobile, backendMobile] = await Promise.all([
      frontend.boundingBox(),
      backend.boundingBox(),
    ])
    expect(frontendMobile).not.toBeNull()
    expect(backendMobile).not.toBeNull()
    expect(backendMobile!.y - frontendMobile!.y).toBeGreaterThan(50)
  })
})
