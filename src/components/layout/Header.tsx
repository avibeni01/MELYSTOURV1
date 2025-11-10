'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ChevronDown, Globe } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  {
    name: 'Location de voiture',
    href: '/location-voiture',
    submenu: [
      { name: 'Tel Aviv', href: '/location-voiture/tel-aviv' },
      { name: 'Jérusalem', href: '/location-voiture/jerusalem' },
      { name: 'Aéroport Ben Gourion', href: '/location-voiture/aeroport-ben-gourion' },
    ]
  },
  {
    name: 'Hôtels',
    href: '/hotels',
    submenu: [
      { name: '🇮🇱 Israel', href: '#', isCategory: true },
      { name: 'Tel Aviv', href: '/hotels/tel-aviv' },
      { name: 'Jérusalem', href: '/hotels/jerusalem' },
      { name: 'Mer Morte', href: '/hotels/mer-morte' },
      { name: 'Eilat', href: '/hotels/eilat' },
      { name: '🌍 International', href: '#', isCategory: true },
      { name: 'Tokyo 🇯🇵', href: '/hotels/tokyo' },
      { name: 'Dubai 🇦🇪', href: '/hotels/dubai' },
      { name: 'Paris 🇫🇷', href: '/hotels/paris' },
      { name: 'Bangkok 🇹🇭', href: '/hotels/bangkok' },
      { name: 'Londres 🇬🇧', href: '/hotels/londres' },
      { name: 'Istanbul 🇹🇷', href: '/hotels/istanbul' },
      { name: 'New York 🇺🇸', href: '/hotels/new-york' },
    ]
  },
  {
    name: 'Blog',
    href: '/blog',
    submenu: [
      { name: 'Guide Hotel Tokyo 2025', href: '/blog/guide-complet-hotel-tokyo-2025' },
      { name: 'Top 10 Dubai Familles', href: '/blog/top-10-hotels-luxe-dubai-familles' },
      { name: 'Palaces Parisiens', href: '/blog/palaces-parisiens-lequel-choisir' },
      { name: 'Top 10 Mer Morte', href: '/blog/top-10-hotels-luxe-mer-morte' },
    ]
  },
  {
    name: 'Plages',
    href: '/plages',
    submenu: [
      { name: 'Méditerranée', href: '/plages/mediterranee' },
      { name: 'Mer Morte', href: '/plages/mer-morte' },
      { name: 'Bienfaits Mer Morte', href: '/bienfaits-mer-morte' },
    ]
  },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' }
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Détecter la langue actuelle depuis l'URL
  const currentLang = pathname?.startsWith('/en') ? 'en' : pathname?.startsWith('/he') ? 'he' : 'fr'
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  const switchLanguage = (langCode: string) => {
    // Pour l'instant, redirige vers /fr car seule cette version existe
    if (langCode === 'fr') {
      const newPath = pathname?.replace(/^\/(en|he)/, '') || '/'
      router.push(newPath === '' ? '/' : newPath)
    } else {
      // Affiche un message que la langue n'est pas encore disponible
      alert(`La version ${langCode.toUpperCase()} sera bientôt disponible. Pour l'instant, seule la version française est active.`)
    }
    setLangMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/LOGO.webp"
                alt="Elynor Tours"
                width={160}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.submenu.map((subItem: any) => (
                        subItem.isCategory ? (
                          <div
                            key={subItem.name}
                            className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-50 border-b border-gray-200"
                          >
                            {subItem.name}
                          </div>
                        ) : (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Sélecteur de langue */}
            <div className="relative group">
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors border border-gray-300 rounded-md hover:border-orange-600"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                <Globe className="mr-2 h-4 w-4" />
                <span className="mr-1">{currentLanguage.flag}</span>
                <span>{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 flex items-center ${
                          lang.code === currentLang ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bouton menu mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((subItem: any) => (
                        subItem.isCategory ? (
                          <div
                            key={subItem.name}
                            className="py-2 pl-3 pr-4 text-xs font-bold text-gray-500 uppercase tracking-wide bg-gray-50"
                          >
                            {subItem.name}
                          </div>
                        ) : (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 pl-3 pr-4 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Sélecteur de langue mobile */}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="px-3 pb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Langue / Language</p>
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      switchLanguage(lang.code)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left py-2 pl-3 pr-4 text-base font-medium flex items-center ${
                      lang.code === currentLang
                        ? 'bg-orange-50 text-orange-600'
                        : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    <span className="mr-3 text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {lang.code === currentLang && (
                      <span className="ml-auto text-orange-600">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}