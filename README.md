# Giorgi Burkadze — Portfolio

Single-page portfolio for Giorgi Burkadze, Web Developer & Animation Specialist (creator of [Helop](https://helop-opal.vercel.app)). Built with React 19, Vite, TypeScript, and Tailwind CSS v4, with scroll-reveal animations via Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — typecheck and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run Oxlint
- `npm run test:e2e` — run the Playwright end-to-end suite
- `npm run test:e2e:ui` — run the suite in Playwright's UI mode
- `npm run test:e2e:report` — open the last HTML test report

## Testing

End-to-end tests live in [e2e/](e2e/) and cover navigation, hero CTAs, the Helop project card, the contact section, responsive layout, and console-error regressions. Update the relevant spec whenever a corresponding UI change is made, then run `npm run test:e2e` before considering the change complete.
