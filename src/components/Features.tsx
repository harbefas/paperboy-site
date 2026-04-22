import { useTheme } from '../context/ThemeContext'
import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    title: 'RSS 2.0 & Atom',
    description: '15-minute background refresh, categories, starred articles. All your feeds in one place.',
    icon: '📰',
  },
  {
    title: 'Podcast Player',
    description: 'Auto-detects podcast feeds, persistent playback bar, speed control, skip ±15s/30s.',
    icon: '🎧',
  },
  {
    title: 'Article Reader',
    description: 'Readability-based extraction, no tracking pixels. Clean reading experience.',
    icon: '📖',
  },
  {
    title: 'Keyboard-First',
    description: 'vim-style navigation throughout. j/k, gg/G, h/l — no mouse required.',
    icon: '⌨️',
  },
]

export default function Features() {
  const { theme } = useTheme()
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section ref={ref} className="w-full py-16 px-4" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight mb-10 text-center" style={{ color: theme.fg }}>
          What it does
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: theme.bg1 }}
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: theme.fg }}>
                {feature.title}
              </h3>
              <p className="text-sm" style={{ color: theme.muted }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}