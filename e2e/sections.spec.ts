import { test, expect } from './fixtures'

test.describe('About & Skills content', () => {
  test('about section introduces full-stack, interactive work', async ({
    page,
  }) => {
    await page.goto('/#about')
    await expect(
      page.getByRole('heading', {
        name: 'Turning ideas into fast, fluid web experiences',
      }),
    ).toBeVisible()
    await expect(page.getByText('full-stack web applications')).toBeVisible()
  })

  test('skills section lists all three categories with their tags', async ({
    page,
  }) => {
    await page.goto('/#skills')
    await expect(page.getByRole('heading', { name: 'Frontend' })).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Interactive & Motion' }),
    ).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Backend' })).toBeVisible()

    const tags = [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Responsive Design',
      'Web Animations',
      'Micro-interactions',
      'Framer Motion',
      'NestJS',
      'Node.js',
      'API Integration',
    ]
    for (const tag of tags) {
      await expect(page.getByText(tag, { exact: true }).first()).toBeVisible()
    }
  })
})
