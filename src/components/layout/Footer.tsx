import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Elynor Tours</h3>
            <p className="text-gray-300 mb-4">
              Votre spécialiste de la location de voiture et réservation d'hôtel en Israël depuis 2015.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/elynortours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com/elynortours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://twitter.com/elynortours" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Hotels Israel */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hotels Israel</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hotels/tel-aviv" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Tel Aviv
                </Link>
              </li>
              <li>
                <Link href="/hotels/jerusalem" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Jérusalem
                </Link>
              </li>
              <li>
                <Link href="/hotels/mer-morte" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Mer Morte
                </Link>
              </li>
              <li>
                <Link href="/hotels/eilat" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Eilat
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Hotels International */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hotels Monde</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hotels/tokyo" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Tokyo 🇯🇵
                </Link>
              </li>
              <li>
                <Link href="/hotels/dubai" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Dubai 🇦🇪
                </Link>
              </li>
              <li>
                <Link href="/hotels/paris" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Paris 🇫🇷
                </Link>
              </li>
              <li>
                <Link href="/hotels/bangkok" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Bangkok 🇹🇭
                </Link>
              </li>
              <li>
                <Link href="/hotels/londres" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Londres 🇬🇧
                </Link>
              </li>
              <li>
                <Link href="/hotels/new-york" className="text-gray-300 hover:text-orange-500 transition-colors">
                  New York 🇺🇸
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Tel Aviv, Israël</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <div>
                  <a href="tel:+33182836729" className="text-gray-300 hover:text-orange-500 transition-colors">
                    +33 1 82 83 67 29
                  </a>
                  <br />
                  <a href="tel:+972584140489" className="text-gray-300 hover:text-orange-500 transition-colors">
                    +972 58 414 04 89
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="text-orange-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <a href="mailto:contact@elynortours.com" className="text-gray-300 hover:text-orange-500 transition-colors">
                  contact@elynortours.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 5 : Blog & Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Blog & Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Blog Voyage
                </Link>
              </li>
              <li>
                <Link href="/plages/mediterranee" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Plages Méditerranée
                </Link>
              </li>
              <li>
                <Link href="/plages/mer-morte" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Plages Mer Morte
                </Link>
              </li>
              <li>
                <Link href="/location-voiture" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Location Voiture
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Elynor Tours. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer