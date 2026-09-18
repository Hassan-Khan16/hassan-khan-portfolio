export const THEME_STORAGE_KEY = 'hk-theme'

export const themes = [
  { id: 'mint', label: 'Mint Night', swatch: '#65f5bd', group: 'dark' },
  { id: 'bloom', label: 'Azure Night', swatch: '#60A5FA', group: 'dark' },
  { id: 'dawn', label: 'Soft Dawn', swatch: '#3B82F6', group: 'light' },
  { id: 'paper', label: 'Warm Paper', swatch: '#0D9488', group: 'light' },
] as const

export type ThemeId = (typeof themes)[number]['id']
export type ThemeGroup = (typeof themes)[number]['group']

export const themeGroups = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
] as const

export const DEFAULT_THEME: ThemeId = 'mint'

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return themes.some((theme) => theme.id === value)
}

export function applyTheme(theme: ThemeId) {
  document.documentElement.setAttribute('data-theme', theme)
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // ignore storage failures
  }
}

export function getStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (isThemeId(stored)) return stored
  } catch {
    // ignore storage failures
  }
  return DEFAULT_THEME
}
