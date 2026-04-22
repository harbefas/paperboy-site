import { useEffect, useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../context/ThemeContext'

interface StatDef {
  value: number
  suffix?: string
  label: string
  delay: number
  colorKey: 'accent' | 'link' | 'muted'
}

const STATS: StatDef[] = [
  { value: 2, label: 'Platforms', suffix: '+', delay: 0, colorKey: 'accent' },
  { value: 15, label: 'Min refresh', suffix: 'm', delay: 150, colorKey: 'link' },
  { value: 100, label: 'Git-friendly', suffix: '%', delay: 300, colorKey: 'muted' },
]

function StatCard({ value, suffix = '', label, delay, colorKey }: StatDef) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)
  const { theme } = useTheme()
  const color = theme[colorKey]

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        observer.disconnect()

        const duration = 1000
        const intervalMs = duration / value

        const timer = setTimeout(() => {
          let current = 0
          const step = setInterval(() => {
            current++
            setCount(current)
            if (current >= value) clearInterval(step)
          }, intervalMs)
        }, delay)

        return () => clearTimeout(timer)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <span className="text-5xl font-bold font-mono tabular-nums" style={{ color }}>
        {count}{count >= value ? suffix : ''}
      </span>
      <span className="text-xs font-medium tracking-widest uppercase" style={{ color: theme.muted }}>
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const ref = useScrollReveal<HTMLElement>()
  const { theme } = useTheme()

  return (
    <section ref={ref} className="w-full py-14 px-4" style={{ backgroundColor: theme.bg1 }}>
      <div className="max-w-2xl mx-auto grid grid-cols-3 gap-8">
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>
    </section>
  )
}