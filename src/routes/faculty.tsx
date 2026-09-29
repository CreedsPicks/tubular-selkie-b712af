import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/Hero'
import { Reveal } from '@/components/Reveal'
import { faculty } from '@/data/faculty'

export const Route = createFileRoute('/faculty')({
  component: FacultyPage,
})

const GRADIENTS = [
  'linear-gradient(135deg, var(--color-crimson), var(--color-crimson-deep))',
  'linear-gradient(135deg, var(--color-gold), var(--color-crimson))',
  'linear-gradient(135deg, var(--color-ink), var(--color-crimson-deep))',
  'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold))',
]

function FacultyPage() {
  return (
    <div>
      <Hero
        image="/images/hero-about.jpg"
        eyebrow="Faculty & Staff"
        title="Taught by people who still build."
        subtitle="Every full-time faculty member in this department has shipped software, run a research lab, or defended a live network — and brings that experience straight into the classroom."
        height="medium"
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faculty.map((person, i) => (
              <Reveal key={person.id} delay={(i % 3) * 90}>
                <div className="h-full rounded-2xl border border-black/10 bg-white p-7 transition-transform hover:-translate-y-1.5">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full font-[var(--font-display)] text-lg font-semibold text-white"
                    style={{ background: GRADIENTS[i % GRADIENTS.length] }}
                  >
                    {person.initials}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[var(--color-ink)]">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-crimson)]">{person.title}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-gold)]">
                    {person.focus}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)]/75">{person.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
