// i18n configuration
export const i18n = {
  defaultLocale: 'fr',
  locales: ['fr', 'en', 'he'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  he: 'עברית',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  he: '🇮🇱',
}
