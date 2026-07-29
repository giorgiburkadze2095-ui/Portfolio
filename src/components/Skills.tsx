import { Code2, Server, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Reveal from './Reveal'

interface SkillGroup {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    icon: Code2,
    title: 'Frontend',
    description: 'Building fast, accessible, and responsive interfaces.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    icon: Sparkles,
    title: 'Interactive & Motion',
    description: 'Crafting animations that feel natural and purposeful.',
    tags: ['Web Animations', 'Micro-interactions', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'Backend',
    description: 'Designing reliable APIs and server-side architecture.',
    tags: ['NestJS', 'Node.js', 'API Integration'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-14 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Skills &amp; Expertise
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={0.1 + i * 0.1}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface-hover">
              <div className="mb-5 inline-flex rounded-xl bg-bg p-3 text-accent ring-1 ring-border transition-colors group-hover:text-accent-2">
                <group.icon size={22} />
              </div>
              <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
