import { useEffect, useState } from 'react'
import { experience } from '@/data/content'
import { totalTenure, type Tenure } from '@/lib/tenure'

const units = [
  { key: 'years', singular: 'Year' },
  { key: 'months', singular: 'Month' },
  { key: 'days', singular: 'Day' },
  { key: 'hours', singular: 'Hour' },
] as const

function labelFor(value: number, singular: string) {
  return value === 1 ? singular : `${singular}s`
}

export function useTotalTenure(): Tenure {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])

  return totalTenure(experience, now)
}

export function TenureCounter() {
  const tenure = useTotalTenure()
  const spoken = units
    .map((unit) => `${tenure[unit.key]} ${labelFor(tenure[unit.key], unit.singular)}`)
    .join(', ')

  return (
    <div className="mb-16 max-w-[760px] max-[900px]:mb-12">
      <p className="mb-2.5 inline-flex items-center gap-2 font-mono text-[10px] font-normal tracking-[0.12em] text-muted-foreground uppercase">
        <span className="size-[6px] animate-[pulse-dot_2s_ease_infinite] rounded-full bg-primary shadow-[0_0_0_4px_var(--pulse-ring)]" />
        Total experience
      </p>
      <div className="grid grid-cols-4 gap-2 max-[640px]:grid-cols-2" aria-label={spoken}>
        {units.map((unit) => (
          <div className="rounded-xl border border-border bg-card px-3 py-4" key={unit.key}>
            <strong className="block font-mono text-[clamp(1.6rem,3vw,2.4rem)] font-medium tracking-[-0.05em] text-primary tabular-nums">
              {String(tenure[unit.key]).padStart(2, '0')}
            </strong>
            <span className="mt-1 block font-mono text-[10px] font-normal tracking-[0.12em] text-muted-foreground uppercase">
              {labelFor(tenure[unit.key], unit.singular)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
