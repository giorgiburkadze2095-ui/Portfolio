import { test, expect } from './fixtures'

test('no console errors while browsing the entire page', async ({
  page,
  consoleErrors,
}) => {
  await page.goto('/')

  for (const id of ['about', 'skills', 'projects', 'contact']) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded()
    await page.waitForTimeout(150)
  }

  expect(
    consoleErrors,
    `Unexpected console errors:\n${consoleErrors.join('\n')}`,
  ).toEqual([])
})
