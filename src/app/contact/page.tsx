// src/app/contact/page.tsx
import type { Metadata } from 'next'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildContactPageSchema } from '@/lib/seo'
import ContactForm from '@/components/ContactForm'
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'react-feather'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Elynor Tours : Reservation Voiture Hotel Israel 24/7',
  description: 'Contactez Elynor Tours pour location voiture et hotel Israel. WhatsApp +972-58-414-0489, Tel +33-1-82-83-67-29. Service client reactif 7j/7, devis gratuit immediat.',
  canonical: '/contact',
  keywords: [
    'contact elynor tours',
    'reservation voiture israel',
    'reservation hotel israel',
    'whatsapp elynor tours',
    'service client israel',
    'assistance voyage israel'
  ],
  images: [{
    url: '/images/og/contact-elynor-tours.jpg',
    width: 1200,
    height: 630,
    alt: 'Contactez Elynor Tours - Service client 7j/7'
  }],
  alternates: {
    languages: buildI18nAlternates('/contact')
  }
})

export default function ContactPage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Contact', url: '/contact' },
  ])

  // Contact Page Schema
  const contactSchema = buildContactPageSchema('/contact')

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={contactSchema} />
      
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          {/* Header optimisé SEO avec h1 */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800">
              Contactez Elynor Tours
            </h1>
            <p className="text-gray-600 mt-2">
              Notre équipe est à votre disposition pour répondre à vos questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Colonne gauche - Informations de contact */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Nos coordonnées</h2>
              
              <div className="space-y-4">
                {/* Téléphone */}
                <div className="flex items-start" itemScope itemType="https://schema.org/ContactPoint">
                  <Phone className="text-orange-500 mt-1 mr-3" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">
                      <a 
                        href="tel:+33182836729" 
                        className="hover:text-orange-500 transition-colors"
                        itemProp="telephone"
                      >
                        +33 1 82 83 67 29
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a 
                        href="tel:+972584140489" 
                        className="hover:text-orange-500 transition-colors"
                        itemProp="telephone"
                      >
                        +972 58 414 0489
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <Mail className="text-orange-500 mt-1 mr-3" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">
                      <a 
                        href="mailto:contact@elynortours.com"
                        className="hover:text-orange-500 transition-colors"
                        itemProp="email"
                      >
                        contact@elynortours.com
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* Adresse */}
                <div className="flex items-start" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="text-orange-500 mt-1 mr-3" size={20} aria-hidden="true" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600" itemProp="addressLocality">
                      Tel Aviv, Israël
                    </p>
                  </div>
                </div>
                
                {/* WhatsApp Button avec meilleur contraste */}
                <a
                  href="https://api.whatsapp.com/send/?phone=972584140489&text=Bonjour%20Elynor%20Tours&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-bold py-3 px-6 rounded-full inline-flex items-center hover:bg-green-600 transition-colors mt-4 shadow-md hover:shadow-lg"
                  aria-label="Contactez-nous sur WhatsApp"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="mr-2"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contactez-nous sur WhatsApp
                </a>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="mt-8 mb-8">
                <h2 className="text-xl font-semibold mb-4">Suivez-nous</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/elynor.tours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-rose-500 p-3 rounded-full hover:bg-rose-100 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Suivez-nous sur Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://x.com/ElynorTours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-400 p-3 rounded-full hover:bg-blue-100 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Suivez-nous sur Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/Elynortoursltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-blue-100 transition-colors shadow-md hover:shadow-lg"
                    aria-label="Suivez-nous sur Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>

              {/* Horaires d'ouverture avec Schema.org */}
              <div itemScope itemType="https://schema.org/OpeningHoursSpecification">
                <h2 className="text-xl font-semibold mb-4">Horaires d'ouverture</h2>
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4 font-medium">Lundi - Jeudi</td>
                      <td className="py-2">
                        <time itemProp="opens" content="09:00">9h00</time> - <time itemProp="closes" content="18:00">18h00</time>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-4 font-medium">Vendredi</td>
                      <td className="py-2">
                        <time itemProp="opens" content="09:00">9h00</time> - <time itemProp="closes" content="15:00">15h00</time>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-medium">Dimanche</td>
                      <td className="py-2">
                        <time itemProp="opens" content="09:00">9h00</time> - <time itemProp="closes" content="18:00">18h00</time>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Colonne droite - Formulaire (composant client) */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Envoyez-nous un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}