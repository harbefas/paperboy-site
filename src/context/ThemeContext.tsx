import { useState, createContext, useContext, useEffect, type ReactNode } from 'react'
import { paperDay, paperNight, type ThemeColors } from '../theme/colors'

interface ThemeContextValue {
  theme: ThemeColors
  setTheme: (theme: ThemeColors) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

interface Props {
  children: ReactNode
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<ThemeColors>(paperNight)
  const isDark = theme.name === 'paper-night'

  useEffect(() => {
    document.body.style.backgroundColor = theme.bg
    document.body.style.color = theme.fg
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { paperDay, paperNight }