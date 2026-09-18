import { useCallback, useEffect, useState } from 'react'
import {
  applyTheme,
  DEFAULT_THEME,
  getStoredTheme,
  themes,
  type ThemeId,
} from '@/lib/theme'

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof document === 'undefined') return DEFAULT_THEME
    const attr = document.documentElement.getAttribute('data-theme')
    return getStoredTheme() || (attr as ThemeId) || DEFAULT_THEME
  })

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setTheme = useCallback((next: ThemeId) => {
    setThemeState(next)
  }, [])

  return { theme, setTheme, themes }
}
