import { paperDay, paperNight } from '../theme/colors'
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const { theme, isDark, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(isDark ? paperDay : paperNight)
  }

  return (
    <section className="flex flex-col items-center pt-24 pb-16 px-4 text-center">
      <div className="relative mb-6">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="w-20 h-20"
        >
          <rect x="16" y="8" width="48" height="64" rx="4" stroke={theme.orange} strokeWidth="3" fill="none" />
          <path d="M24 20h32M24 28h32M24 36h24M24 44h28M24 52h20" stroke={theme.fg} strokeWidth="2" strokeLinecap="round" />
          <circle cx="56" cy="60" r="12" fill={theme.orange} />
          <path d="M52 60h8M56 56v8" stroke={theme.bg} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <h1 className="text-5xl font-bold tracking-tight mb-3" style={{ color: theme.fg }}>
        paperboy
      </h1>

      <p className="text-lg mb-6 max-w-md" style={{ color: theme.muted }}>
        Minimal, opinionated, keyboard-first, local-first RSS reader and podcast player — as your browser&apos;s new tab.
      </p>

      <div className="flex gap-4 mb-8">
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/paperboy/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{ backgroundColor: theme.accent, color: theme.bg }}
        >
          Add to Firefox
        </a>
        <a
          href="#install"
          className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.bg1,
            color: theme.fg,
            border: `1px solid ${theme.bg2}`,
          }}
        >
          Other installs
        </a>
        <a
          href="https://github.com/harbefas/paperboy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.bg1,
            color: theme.fg,
            border: `1px solid ${theme.bg2}`,
          }}
        >
          GitHub
        </a>
      </div>

      <button
        onClick={toggleTheme}
        className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105 mb-6"
        style={{
          backgroundColor: theme.bg1,
          color: theme.muted,
          border: `1px solid ${theme.bg2}`,
        }}
      >
        {isDark ? '◐ Light mode' : '◑ Dark mode'}
      </button>

      <div className="flex gap-2">
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{ backgroundColor: theme.bg1, color: theme.muted }}
        >
          RSS 2.0 & Atom
        </span>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{ backgroundColor: theme.bg1, color: theme.muted }}
        >
          Podcast Player
        </span>
        <span
          className="text-xs font-mono px-3 py-1 rounded-full"
          style={{ backgroundColor: theme.bg1, color: theme.muted }}
        >
          Vim Keys
        </span>
      </div>
    </section>
  )
}