import { Mail } from 'lucide-react'
import { EMAIL } from '../constants'
import { GithubIcon, LinkedinIcon } from './icons'
import Reveal from './Reveal'

const linkedInProfile = 'https://www.linkedin.com/in/giorgi-burkadze-61b341406/'
const githubProfile = 'https://github.com/giorgiburkadze2095-ui/'

const SOCIAL_LINKS = [
  { label: 'Email', icon: Mail, href: `mailto:${EMAIL}` },
  { label: 'GitHub', icon: GithubIcon, href: githubProfile },
  { label: 'LinkedIn', icon: LinkedinIcon, href: linkedInProfile },
]

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="animate-blob absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-2/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Let's build something great together
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Have a project in mind or just want to say hi? My inbox is
            always open.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-col items-center gap-2 border-t border-border pt-8 text-sm text-muted">
            <p>&copy; {new Date().getFullYear()} Giorgi Burkadze. All rights reserved.</p>
            <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
