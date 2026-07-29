import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const TECH_TAGS = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js']

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Featured Work
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Featured Projects
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <a
          href="https://helop-opal.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-accent/50 hover:bg-surface-hover md:grid-cols-2"
        >
          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-bg md:aspect-auto">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_60%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--color-accent-2)_18%,transparent),transparent_60%)]"
            />
            <div className="relative w-4/5 overflow-hidden rounded-lg border border-border/80 bg-surface shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
              <div className="flex items-center gap-1.5 border-b border-border bg-bg px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="flex aspect-[16/10] items-center justify-center">
                <span className="text-3xl font-semibold tracking-tight text-gradient">
                  Helop
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="text-2xl font-semibold text-ink">Helop</h3>
              <ArrowUpRight
                size={20}
                className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
            <p className="text-muted">
              A modern web application developed and created by Giorgi
              Burkadze.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TECH_TAGS.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent">
              Visit live site
              <ArrowUpRight size={14} />
            </span>
          </div>
        </a>
      </Reveal>
    </section>
  )
}
