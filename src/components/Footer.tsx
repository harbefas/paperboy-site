import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="w-full py-8 px-4 text-center" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-2xl mx-auto">
        <p className="text-sm mb-4" style={{ color: theme.muted }}>
          No accounts. No cloud sync. No tracking.
        </p>
        <p className="text-xs" style={{ color: theme.muted }}>
          Your feeds, articles, and episodes live on your machine as plain files.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/harbefas/paperboy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-80"
            style={{ color: theme.link }}
          >
            GitHub
          </a>
          <a
            href="https://github.com/harbefas/paperboy/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-opacity hover:opacity-80"
            style={{ color: theme.link }}
          >
            Docs
          </a>
        </div>
        <p className="text-xs mt-6" style={{ color: theme.muted }}>
          © 2024 paperboy
        </p>
      </div>
    </footer>
  )
}