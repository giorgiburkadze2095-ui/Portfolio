import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          About
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Turning ideas into fast, fluid web experiences
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          I'm Giorgi Burkadze, a web developer focused on building{' '}
          <span className="text-ink">full-stack web applications</span> that
          feel as good as they look. From React front ends to NestJS-powered
          APIs, I care about performance, clean architecture, and the small
          details that make an interface feel alive &mdash; smooth
          transitions, thoughtful micro-interactions, and animations that
          guide rather than distract. As the creator of{' '}
          <span className="text-ink">Helop</span>, I bring that same
          philosophy to every project: functional, polished, and built to
          last.
        </p>
      </Reveal>
    </section>
  )
}
