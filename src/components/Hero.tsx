import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      <div
        aria-hidden
        className="animate-blob absolute -left-32 top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-blob absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-accent-2/20 blur-3xl"
        style={{ animationDelay: '4s' }}
      />
      <div aria-hidden className="grid-backdrop absolute inset-0" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
        >
          <span className="h-2 w-2 rounded-full bg-accent" />
          Web Developer &amp; Animation Specialist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">Giorgi Burkadze</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
        >
          Web Development&nbsp;
          <span className="text-ink">|</span>&nbsp;Interactive UI&nbsp;
          <span className="text-ink">|</span>&nbsp;Animations
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-2 max-w-xl text-sm text-muted"
        >
          Creator of <span className="font-medium text-ink"> Helop</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_-5px_var(--color-accent)]"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
