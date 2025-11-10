// src/app/hotels/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import HotelsWithFilters from '@/components/hotels/HotelsWithFilters'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo'
import { Globe, Star, Shield, Phone } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Luxe Monde : Israel Tokyo Dubai Paris Londres Bangkok 2025',
  description: 'Reservez les meilleurs hotels au monde : Israel (Tel Aviv, Jerusalem, Mer Morte), Dubai (Burj Al Arab), Tokyo (Aman), Paris (Bristol), Londres (Savoy), Bangkok. Luxe 5*, tarifs negocies, annulation flexible.',
  canonical: '/hotels',
  keywords: [
    'hotel israel',
    'reservation hotel tel aviv',
    'hotel jerusalem',
    'hotel mer morte',
    'hotel eilat',
    'hotel luxe israel',
    'hotel dubai burj al arab',
    'hotel tokyo',
    'hotel paris luxe',
    'hotel londres',
    'hotel bangkok',
    'hotel singapour',
    'hotel istanbul',
    'hotel new york',
    'reservation hotel luxe',
    'hotel 5 etoiles monde',
    'palace hotel',
    'spa hotel mer morte',
    'hotel all inclusive eilat'
  ],
  images: [{
    url: '/images/og/hotels-israel.jpg',
    width: 1200,
    height: 630,
    alt: 'Reservation d\'hotels en Israel - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/hotels')
  }
})

export default function HotelsPage() {
  // Breadcrumbs JSON-LD
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Hotels', url: '/hotels' },
  ])

  // Schema ItemList (destinations hotelieres)
  const hotelsListSchema = buildItemListSchema([
    { name: 'Hotels Tel Aviv', url: '/hotels/tel-aviv', description: 'Front de mer, Rothschild, centre-ville' },
    { name: 'Hotels Jerusalem', url: '/hotels/jerusalem', description: 'Quartier juif, centre, Est' },
    { name: 'Hotels Mer Morte', url: '/hotels/mer-morte', description: 'Spa, wellness, proprietes therapeutiques' },
    { name: 'Hotels Eilat', url: '/hotels/eilat', description: 'Mer Rouge, plongee, tout compris' },
  ], 'Destinations hotelieres en Israel')

  // FAQ Schema pour rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels sont les meilleurs hotels en Israel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs hotels en Israel incluent le King David et Waldorf Astoria à Jerusalem, le Dan Tel Aviv et The Setai à Tel Aviv, et le David Dead Sea Resort à la Mer Morte. Ces etablissements 5 etoiles offrent un service d\'exception, des spas luxueux et des emplacements privilegies.'
        }
      },
      {
        '@type': 'Question',
        name: 'Pourquoi reserver un hotel avec Elynor Tours ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Elynor Tours offre une selection premium d\'hotels, des tarifs negocies avantageux, une assistance francophone 24/7, et des conditions d\'annulation flexibles. Notre expertise locale depuis 2015 garantit les meilleurs hotels au meilleur prix en Israel et dans le monde.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quand reserver un hotel en Israel pour avoir le meilleur prix ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour les meilleurs tarifs, reservez 2-3 mois a l\'avance pour la haute saison (avril-octobre) et 1 mois pour la basse saison. Les periodes les moins cheres sont novembre-fevrier (hors fetes juives). Evitez Pessah, Rosh Hashana et Souccot pour des prix plus avantageux.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quels hotels sont ideaux pour les familles en Israel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour les familles, nous recommandons le Dan Panorama Tel Aviv avec son kids club, les hotels Isrotel a Eilat avec parcs aquatiques (Lagoona, Agamim), et le Leonardo Club Dead Sea en formule all-inclusive. Ces etablissements offrent animations enfants, piscines et chambres familiales spacieuses.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quels sont les hotels avec les meilleurs spas en Israel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Les meilleurs spas se trouvent a la Mer Morte : David Dead Sea Resort avec soins aux mineraux, Leonardo Club Dead Sea, et Nevo by Isrotel. A Jerusalem, le Waldorf Astoria dispose d\'un spa Guerlain. A Tel Aviv, l\'InterContinental offre le spa Aqua de renommee mondiale.'
        }
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des hotels dans d\'autres pays que l\'Israel ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Elynor Tours propose une selection mondiale d\'hotels de luxe : Dubai (Burj Al Arab, Atlantis), Tokyo (Aman, Peninsula), Paris (Bristol, Plaza Athenee), New York (The Plaza), Londres (Savoy, Claridge\'s), Bangkok, Singapour, et plus de 60 destinations internationales.'
        }
      },
      {
        '@type': 'Question',
        name: 'Les hotels en Israel sont-ils kasher ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La majorite des hotels en Israel proposent des restaurants kasher, notamment tous les hotels Dan, Fattal (Herods, Leonardo), et Isrotel. A Jerusalem, presque tous les hotels sont strictement kasher. Les hotels de Tel Aviv offrent generalement des options kasher et non-kasher.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quelle est la politique d\'annulation pour les reservations d\'hotels ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La plupart de nos hotels offrent une annulation flexible jusqu\'a 24-48h avant l\'arrivee sans frais. Certains tarifs non-remboursables offrent des reductions importantes. Nous proposons aussi une assurance annulation optionnelle pour plus de flexibilite.'
        }
      }
    ]
  }

  // Données des hôtels en Israël
  const hotelsIsrael = [
    // TEL AVIV
    {
      id: 1,
      name: "Dan Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel emblématique en front de mer, l'un des plus prestigieux de Tel Aviv, offrant luxe et élégance.",
      imageUrl: "/images/hotels/tel-aviv/DANTLV.webp",
      amenities: ["Plage privée", "Spa", "Restaurant gastronomique", "Piscine", "Wifi gratuit"],
      highlights: [
        "Emplacement privilégié face à la mer",
        "Service d'excellence reconnu",
        "Proximité du centre-ville"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 2,
      name: "Carlton Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe sur la promenade, vue mer exceptionnelle, service raffiné.",
      imageUrl: "/images/hotels/tel-aviv/carltontlv.webp",
      amenities: ["Front de mer", "Spa", "Restaurant", "Bar rooftop", "Wifi gratuit"],
      highlights: [
        "Vue panoramique sur la Méditerranée",
        "Architecture moderne élégante",
        "Accès direct à la plage"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 3,
      name: "Hilton Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Complexe hôtelier emblématique en bord de mer avec plage privée et installations premium.",
      imageUrl: "/images/hotels/tel-aviv/HiltonTLV.webp",
      amenities: ["Plage privée", "Piscines", "Spa", "Restaurants", "Centre de conférences"],
      highlights: [
        "Plus grande plage privée de Tel Aviv",
        "Vue mer depuis toutes les chambres",
        "Installations sportives complètes"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 4,
      name: "InterContinental David Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe face à la mer, design contemporain, service d'exception.",
      imageUrl: "/images/hotels/tel-aviv/intercontinental.webp",
      amenities: ["Plage", "Spa", "Piscine rooftop", "Restaurants gastronomiques", "Club enfants"],
      highlights: [
        "Emplacement privilégié sur la promenade",
        "Spa Aqua de renommée internationale",
        "Cuisine fusion méditerranéenne"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 5,
      name: "The Setai Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel boutique ultra-luxueux dans un bâtiment historique rénové, élégance intemporelle.",
      imageUrl: "/images/hotels/tel-aviv/setaiTLV.webp",
      amenities: ["Spa", "Restaurant gastronomique", "Rooftop bar", "Conciergerie", "Wifi"],
      highlights: [
        "Design Art Déco exceptionnel",
        "Service personnalisé haut de gamme",
        "Emplacement central premium"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 6,
      name: "The Norman Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel boutique de luxe dans deux bâtiments Bauhaus restaurés, élégance historique.",
      imageUrl: "/images/hotels/tel-aviv/normand.webp",
      amenities: ["Piscine rooftop", "Spa", "Restaurant gastronomique", "Bibliothèque", "Service majordome"],
      highlights: [
        "Architecture Bauhaus classée UNESCO",
        "Service personnalisé d'exception",
        "Piscine rooftop avec vue panoramique"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 7,
      name: "Sheraton Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel en front de mer avec vue spectaculaire, installations modernes et service premium.",
      imageUrl: "/images/hotels/tel-aviv/sheraton.webp",
      amenities: ["Plage", "Piscine", "Spa", "Restaurants", "Centre fitness"],
      highlights: [
        "Emplacement privilégié sur la promenade",
        "Chambres spacieuses avec balcon",
        "Club Lounge exclusif"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 8,
      name: "Crowne Plaza Tel Aviv Beach",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel moderne en bord de mer, idéal pour affaires et loisirs.",
      imageUrl: "/images/hotels/tel-aviv/crownetlvbeach.webp",
      amenities: ["Plage", "Piscine", "Restaurant", "Centre d'affaires", "Wifi"],
      highlights: [
        "Accès direct à la plage",
        "Proximité du port et du vieux Jaffa",
        "Installations d'affaires complètes"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 9,
      name: "Dan Panorama Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial moderne avec excellent rapport qualité-prix, face à la mer.",
      imageUrl: "/images/hotels/tel-aviv/DanPanoramaTLV.webp",
      amenities: ["Plage", "Piscine", "Restaurant", "Kids club", "Wifi"],
      highlights: [
        "Idéal pour les familles",
        "Emplacement central pratique",
        "Service chaleureux"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 10,
      name: "Leonardo Plaza Hotel Netanya",
      location: "Tel Aviv",
      country: "Israël",
      stars: 4,
      description: "Hôtel confortable avec bon rapport qualité-prix, proche de la plage.",
      imageUrl: "/images/hotels/tel-aviv/LeonardoGordonBeach.webp",
      amenities: ["Piscine", "Restaurant", "Bar", "Wifi", "Parking"],
      highlights: [
        "Emplacement pratique",
        "Chambres spacieuses",
        "Service accueillant"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 11,
      name: "Royal Beach Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe en front de mer, design contemporain et service premium.",
      imageUrl: "/images/hotels/tel-aviv/royalbeach.webp",
      amenities: ["Plage privée", "Spa", "Piscine", "Restaurants", "Wifi"],
      highlights: [
        "Plage privée exclusive",
        "Design moderne élégant",
        "Spa de luxe"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 12,
      name: "Herbert Samuel Hotel",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel boutique de charme en bord de mer, ambiance intimiste et raffinée.",
      imageUrl: "/images/hotels/tel-aviv/herberttlv.webp",
      amenities: ["Restaurant", "Bar", "Spa", "Wifi", "Service personnalisé"],
      highlights: [
        "Emplacement exclusif",
        "Design boutique unique",
        "Service sur mesure"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 13,
      name: "Herods Sea Gate Hotel",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel moderne en front de mer avec installations premium.",
      imageUrl: "/images/hotels/tel-aviv/herodstlv.webp",
      amenities: ["Plage", "Piscine", "Spa", "Restaurants", "Bar"],
      highlights: [
        "Architecture contemporaine",
        "Vue mer panoramique",
        "Piscine infinity"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 14,
      name: "The Orchid Hotel",
      location: "Tel Aviv",
      country: "Israël",
      stars: 4,
      description: "Hôtel boutique élégant avec excellent rapport qualité-prix.",
      imageUrl: "/images/hotels/tel-aviv/orchidtlv.webp",
      amenities: ["Restaurant", "Bar", "Spa", "Wifi", "Parking"],
      highlights: [
        "Design contemporain",
        "Emplacement central",
        "Service attentionné"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 15,
      name: "Renaissance Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe avec design contemporain et service d'exception.",
      imageUrl: "/images/hotels/tel-aviv/renaissancetlv.webp",
      amenities: ["Piscine rooftop", "Spa", "Restaurants", "Bar", "Centre fitness"],
      highlights: [
        "Rooftop spectaculaire",
        "Design moderne raffiné",
        "Emplacement premium"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 16,
      name: "Sea Executive Suites",
      location: "Tel Aviv",
      country: "Israël",
      stars: 4,
      description: "Suites modernes avec vue mer, idéal pour séjours prolongés.",
      imageUrl: "/images/hotels/tel-aviv/SEATOWER.webp",
      amenities: ["Kitchenette", "Vue mer", "Wifi", "Service de conciergerie"],
      highlights: [
        "Suites spacieuses",
        "Vue panoramique sur la mer",
        "Flexibilité pour longs séjours"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 17,
      name: "Kempinski Hotel Tel Aviv",
      location: "Tel Aviv",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe emblématique avec service d'exception et installations premium.",
      imageUrl: "/images/hotels/tel-aviv/kempinskitlv.webp",
      amenities: ["Spa", "Piscine", "Restaurants gastronomiques", "Bar", "Conciergerie"],
      highlights: [
        "Luxe absolu et raffinement",
        "Service légendaire Kempinski",
        "Emplacement privilégié"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },
    {
      id: 18,
      name: "Grand Beach Hotel",
      location: "Tel Aviv",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial confortable en bord de mer avec excellent rapport qualité-prix.",
      imageUrl: "/images/hotels/tel-aviv/grandbeach.webp",
      amenities: ["Plage", "Piscine", "Restaurant", "Kids club", "Wifi"],
      highlights: [
        "Idéal familles",
        "Accès direct à la plage",
        "Tarifs compétitifs"
      ],
      detailPageUrl: "/hotels/tel-aviv"
    },

    // JÉRUSALEM
    {
      id: 100,
      name: "David Citadel Hotel",
      location: "Jérusalem",
      country: "Israël",
      stars: 5,
      description: "Hôtel emblématique face à la vieille ville de Jérusalem, offrant un luxe exceptionnel et un service irréprochable.",
      imageUrl: "/images/hotels/jerusalem/david-citadel/david-citadel-hotel.webp",
      amenities: ["Piscine", "Spa", "Restaurant cachère", "Vue vieille ville", "Wifi gratuit"],
      highlights: [
        "Vue imprenable sur la vieille ville",
        "Cuisine gastronomique cachère",
        "À 5 min à pied de la porte de Jaffa"
      ],
      detailPageUrl: "/hotels/jerusalem"
    },
    {
      id: 101,
      name: "King David Hotel",
      location: "Jérusalem",
      country: "Israël",
      stars: 5,
      description: "Palace historique légendaire, symbole du luxe à Jérusalem depuis 1931.",
      imageUrl: "/images/hotels/jerusalem/king-david/KDServicesPool.webp",
      amenities: ["Piscine", "Spa", "Restaurants cachères", "Jardins", "Service majordome"],
      highlights: [
        "Histoire prestigieuse et patrimoine",
        "Jardins somptueux avec vue",
        "Service d'exception légendaire"
      ],
      detailPageUrl: "/hotels/jerusalem"
    },
    {
      id: 102,
      name: "Mamilla Hotel",
      location: "Jérusalem",
      country: "Israël",
      stars: 5,
      description: "Hôtel design moderne face à la vieille ville, alliance de luxe contemporain et patrimoine.",
      imageUrl: "/images/hotels/jerusalem/mamilla/lifestyle-oasis-zone.webp",
      amenities: ["Spa", "Piscine", "Restaurant", "Rooftop bar", "Wifi"],
      highlights: [
        "Design contemporain exceptionnel",
        "Emplacement unique face aux remparts",
        "Spa de luxe"
      ],
      detailPageUrl: "/hotels/jerusalem"
    },
    {
      id: 103,
      name: "Waldorf Astoria Jerusalem",
      location: "Jérusalem",
      country: "Israël",
      stars: 5,
      description: "Palace somptueux alliant architecture historique et luxe contemporain, service d'exception.",
      imageUrl: "/images/hotels/jerusalem/waldorf-astoria/76cc1a3e26b51e9ad4fcc65f82c2025f8e1ccb24.webp",
      amenities: ["Spa Guerlain", "Piscine", "Restaurants gastronomiques", "Bar", "Conciergerie"],
      highlights: [
        "Luxe absolu Waldorf Astoria",
        "Spa Guerlain exclusif",
        "Architecture palatiale exceptionnelle"
      ],
      detailPageUrl: "/hotels/jerusalem"
    },

    // MER MORTE
    {
      id: 200,
      name: "David Dead Sea Resort & Spa",
      location: "Mer Morte",
      country: "Israël",
      stars: 5,
      description: "Resort spa luxueux en bord de Mer Morte, spécialisé dans les soins thérapeutiques.",
      imageUrl: "/images/hotels/mer-morte/david-dead-sea.webp",
      amenities: ["Spa thermal", "Plage privée", "Piscines", "Restaurants", "Centre wellness"],
      highlights: [
        "Accès direct à la Mer Morte",
        "Spa avec produits de la Mer Morte",
        "Traitements thérapeutiques"
      ],
      detailPageUrl: "/hotels/mer-morte"
    },
    {
      id: 201,
      name: "Leonardo Club Dead Sea",
      location: "Mer Morte",
      country: "Israël",
      stars: 4,
      description: "Resort familial all-inclusive en bord de Mer Morte, idéal pour détente et bien-être.",
      imageUrl: "/images/hotels/mer-morte/leonardo-club-dead-sea.webp",
      amenities: ["All-inclusive", "Spa", "Piscines", "Kids club", "Plage"],
      highlights: [
        "Formule tout compris",
        "Parfait pour les familles",
        "Spa et soins thérapeutiques"
      ],
      detailPageUrl: "/hotels/mer-morte"
    },
    {
      id: 202,
      name: "Nevo by Isrotel Collection",
      location: "Mer Morte",
      country: "Israël",
      stars: 4,
      description: "Hôtel spa moderne avec vue sur la Mer Morte et montagnes de Moab.",
      imageUrl: "/images/hotels/mer-morte/Nevo by Isrotel Collection.webp",
      amenities: ["Spa", "Piscines", "Restaurants", "Plage privée", "Centre wellness"],
      highlights: [
        "Vue panoramique exceptionnelle",
        "Spa complet avec boues",
        "Service Isrotel reconnu"
      ],
      detailPageUrl: "/hotels/mer-morte"
    },
    {
      id: 203,
      name: "Noga by Isrotel Collection",
      location: "Mer Morte",
      country: "Israël",
      stars: 4,
      description: "Resort spa confortable avec accès direct à la Mer Morte et soins thérapeutiques.",
      imageUrl: "/images/hotels/mer-morte/Noga by Isrotel Collection.webp",
      amenities: ["Spa thermal", "Piscines", "Restaurants", "Plage", "Soins wellness"],
      highlights: [
        "Rapport qualité-prix excellent",
        "Soins à base de minéraux",
        "Ambiance relaxante"
      ],
      detailPageUrl: "/hotels/mer-morte"
    },

    // EILAT
    {
      id: 300,
      name: "Herods Palace Hotel & Spa Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Palace luxueux face à la Mer Rouge, architecture inspirée de Pétra, service all-inclusive premium.",
      imageUrl: "/images/hotels/eilat/Herods Palace Hotels & Spa Eilat a Premium collection by Fattal Hotels1.webp",
      amenities: ["All-inclusive", "Plage privée", "Piscines", "Kids club", "Spa"],
      highlights: [
        "Architecture spectaculaire",
        "Front de mer exclusif",
        "Formule tout compris premium"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 301,
      name: "Queen of Sheba Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Hôtel thématique spectaculaire inspiré de la reine de Saba, all-inclusive de luxe.",
      imageUrl: "/images/hotels/eilat/Queen of Sheba Eilat1.webp",
      amenities: ["All-inclusive", "Piscines", "Spa", "Kids club", "Plage"],
      highlights: [
        "Architecture thématique unique",
        "Parfait pour familles",
        "Formule tout compris"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 302,
      name: "King Solomon by Isrotel Collection",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe avec design inspiré du roi Salomon, service premium.",
      imageUrl: "/images/hotels/eilat/King Solomon by Isrotel Collection1.webp",
      amenities: ["Piscines", "Spa", "Restaurants", "Kids club", "Plage"],
      highlights: [
        "Design majestueux",
        "Service Isrotel d'excellence",
        "Installations familiales complètes"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 303,
      name: "Isrotel Royal Garden",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Resort de luxe avec jardins tropicaux, vue sur la Mer Rouge.",
      imageUrl: "/images/hotels/eilat/isrotel-royal-garden.webp",
      amenities: ["Jardins", "Spa", "Piscines", "Restaurants", "Plage"],
      highlights: [
        "Jardins tropicaux luxuriants",
        "Atmosphère paisible",
        "Service personnalisé"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 304,
      name: "Dan Eilat Hotel",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Hôtel emblématique en bord de Mer Rouge avec plage privée.",
      imageUrl: "/images/hotels/eilat/Dan Eilat Hotel.webp",
      amenities: ["Plage privée", "Spa", "Piscines", "Restaurants", "Kids club"],
      highlights: [
        "Plage privée exclusive",
        "Service Dan Hotels reconnu",
        "Emplacement premium"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 305,
      name: "Royal Beach Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 5,
      description: "Hôtel de luxe en front de mer avec service all-inclusive.",
      imageUrl: "/images/hotels/eilat/Royal Beach.webp",
      amenities: ["All-inclusive", "Plage", "Spa", "Piscines", "Restaurants"],
      highlights: [
        "Emplacement privilégié",
        "Service premium",
        "Formule tout compris"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 306,
      name: "Dan Panorama Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial moderne avec vue sur la Mer Rouge.",
      imageUrl: "/images/hotels/eilat/Dan Panorama Eilat.webp",
      amenities: ["Piscine", "Restaurant", "Kids club", "Plage", "Wifi"],
      highlights: [
        "Excellent rapport qualité-prix",
        "Idéal pour familles",
        "Vue mer magnifique"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 307,
      name: "Leonardo Plaza Hotel Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne avec vue sur le golfe d'Eilat.",
      imageUrl: "/images/hotels/eilat/Leonardo Plaza Hotel Eilat.webp",
      amenities: ["Piscine", "Restaurant", "Bar", "Wifi", "Centre fitness"],
      highlights: [
        "Bon rapport qualité-prix",
        "Emplacement pratique",
        "Chambres confortables"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 308,
      name: "Yam Suf by Isrotel Collection",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial all-inclusive en bord de Mer Rouge.",
      imageUrl: "/images/hotels/eilat/Yam Suf by Isrotel Collection.webp",
      amenities: ["All-inclusive", "Piscine", "Kids club", "Plage", "Restaurants"],
      highlights: [
        "Formule tout compris familiale",
        "Animation pour enfants",
        "Proximité de la plage"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 309,
      name: "Lagoona by Isrotel Collection",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial avec lagune artificielle et toboggans aquatiques.",
      imageUrl: "/images/hotels/eilat/Lagoona by Isrotel Collection.webp",
      amenities: ["Parc aquatique", "All-inclusive", "Kids club", "Restaurants", "Plage"],
      highlights: [
        "Lagune avec toboggans",
        "Paradis pour enfants",
        "Formule all-inclusive"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 310,
      name: "Agamim by Isrotel Collection",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel familial avec piscines et lagunes artificielles.",
      imageUrl: "/images/hotels/eilat/Agamim by Isrotel Collection.webp",
      amenities: ["Piscines", "Lagunes", "Kids club", "Restaurants", "All-inclusive"],
      highlights: [
        "Parfait pour familles",
        "Parc aquatique intégré",
        "Animation continue"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 311,
      name: "U Splash Resort Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Resort familial moderne avec parc aquatique et activités.",
      imageUrl: "/images/hotels/eilat/U Splash Resort Eilat.webp",
      amenities: ["Parc aquatique", "All-inclusive", "Kids club", "Restaurants", "Animation"],
      highlights: [
        "Parc aquatique géant",
        "Idéal pour familles",
        "Formule tout compris"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 312,
      name: "Vert Hotel Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne et écologique avec vue sur la Mer Rouge.",
      imageUrl: "/images/hotels/eilat/Vert Hotel Eilat by AFI Hotels.webp",
      amenities: ["Piscine rooftop", "Restaurant", "Bar", "Wifi", "Design moderne"],
      highlights: [
        "Design contemporain",
        "Rooftop avec vue",
        "Approche écologique"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 313,
      name: "Sport Hotel Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 3,
      description: "Hôtel sportif avec installations complètes pour activités.",
      imageUrl: "/images/hotels/eilat/sport club eilat.webp",
      amenities: ["Centre sportif", "Piscine", "Restaurant", "Terrain de sport", "Wifi"],
      highlights: [
        "Idéal pour sportifs",
        "Installations complètes",
        "Bon rapport qualité-prix"
      ],
      detailPageUrl: "/hotels/eilat"
    },
    {
      id: 314,
      name: "Aira Boutique Hotel Eilat",
      location: "Eilat",
      country: "Israël",
      stars: 4,
      description: "Hôtel boutique moderne avec design contemporain.",
      imageUrl: "/images/hotels/eilat/aira.webp",
      amenities: ["Piscine", "Restaurant", "Bar", "Wifi", "Design boutique"],
      highlights: [
        "Style boutique unique",
        "Ambiance intimiste",
        "Service personnalisé"
      ],
      detailPageUrl: "/hotels/eilat"
    },

    // NETANYA
    {
      id: 400,
      name: "The Seasons Hotel Netanya",
      location: "Netanya",
      country: "Israël",
      stars: 5,
      description: "Hôtel moderne face à la Méditerranée, idéal pour un séjour balnéaire relaxant.",
      imageUrl: "/images/hotels/netanya/The Seasons Hotel.webp",
      amenities: ["Piscine", "Plage", "Restaurant", "Spa", "Wifi gratuit"],
      highlights: [
        "Accès direct à la plage",
        "Vue mer depuis les chambres",
        "Proximité des falaises de Netanya"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 401,
      name: "David Tower Hotel Netanya",
      location: "Netanya",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne en bord de mer avec vue panoramique sur la Méditerranée.",
      imageUrl: "/images/hotels/netanya/David Tower Hotel Netanya1.webp",
      amenities: ["Piscine", "Restaurant", "Spa", "Vue mer", "Wifi"],
      highlights: [
        "Vue panoramique exceptionnelle",
        "Proximité de la plage",
        "Service chaleureux"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 402,
      name: "Island Luxurious Suites Hotel & Spa",
      location: "Netanya",
      country: "Israël",
      stars: 5,
      description: "Suites de luxe avec spa complet, vue mer et service premium.",
      imageUrl: "/images/hotels/netanya/Island Luxurious Suites Hotel and Spa.webp",
      amenities: ["Spa", "Suites", "Piscine", "Restaurant", "Vue mer"],
      highlights: [
        "Suites spacieuses de luxe",
        "Spa premium complet",
        "Service personnalisé"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 403,
      name: "Leonardo Plaza Netanya",
      location: "Netanya",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne en front de mer avec installations complètes.",
      imageUrl: "/images/hotels/netanya/Leonardo Plaza Netanya Hotel1.webp",
      amenities: ["Piscine", "Restaurant", "Spa", "Plage", "Wifi"],
      highlights: [
        "Emplacement en bord de mer",
        "Chambres confortables",
        "Bon rapport qualité-prix"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 404,
      name: "Medi Terre Boutique Hotel",
      location: "Netanya",
      country: "Israël",
      stars: 4,
      description: "Hôtel boutique de charme avec ambiance méditerranéenne.",
      imageUrl: "/images/hotels/netanya/Medi Terre Boutique Hotel1.webp",
      amenities: ["Restaurant", "Bar", "Wifi", "Design boutique", "Service personnalisé"],
      highlights: [
        "Charme boutique unique",
        "Ambiance intimiste",
        "Décoration méditerranéenne"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 405,
      name: "Ramada Hotel & Suites Netanya",
      location: "Netanya",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne avec suites, proche de la plage et du centre-ville.",
      imageUrl: "/images/hotels/netanya/Ramada Hotel & Suites by Wyndham Netanya1.webp",
      amenities: ["Suites", "Piscine", "Restaurant", "Centre fitness", "Wifi"],
      highlights: [
        "Suites familiales spacieuses",
        "Emplacement central",
        "Installations modernes"
      ],
      detailPageUrl: "/hotels/netanya"
    },
    {
      id: 406,
      name: "Vert Lagoon Hotel Netanya",
      location: "Netanya",
      country: "Israël",
      stars: 4,
      description: "Hôtel moderne face à la mer avec design contemporain.",
      imageUrl: "/images/hotels/netanya/Vert Lagoon Netanya1.webp",
      amenities: ["Vue mer", "Restaurant", "Bar", "Wifi", "Design moderne"],
      highlights: [
        "Design contemporain élégant",
        "Vue sur la Méditerranée",
        "Emplacement privilégié"
      ],
      detailPageUrl: "/hotels/netanya"
    }
  ]

  // Données des hôtels dans le monde
  const hotelsWorld = [
    // DUBAÏ
    {
      id: 501,
      name: "Jumeirah Burj Al Arab",
      location: "Dubaï",
      country: "Émirats Arabes Unis",
      stars: 5,
      description: "L'hôtel le plus luxueux au monde, architecture iconique en forme de voile, service d'exception.",
      imageUrl: "/images/hotels/Jumeirah Burj Al Arab Dubai.webp",
      amenities: ["Butler personnel", "Plage privée", "Restaurants étoilés", "Spa", "Héliport"],
      highlights: [
        "Architecture iconique mondialement reconnue",
        "Service butler 24/7",
        "Restaurants sous-marins et panoramiques"
      ]
    },
    {
      id: 502,
      name: "Atlantis The Palm",
      location: "Dubaï",
      country: "Émirats Arabes Unis",
      stars: 5,
      description: "Resort familial spectaculaire sur Palm Jumeirah avec parc aquatique et aquarium géant.",
      imageUrl: "/images/hotels/Atlantis - The Palm.webp",
      amenities: ["Aquaventure Park", "Aquarium", "Plage", "Restaurants", "Kids club"],
      highlights: [
        "Parc aquatique Aquaventure inclus",
        "Aquarium The Lost Chambers",
        "Plage privée sur Palm Jumeirah"
      ]
    },

    // NEW YORK
    {
      id: 503,
      name: "The Plaza Hotel",
      location: "New York",
      country: "États-Unis",
      stars: 5,
      description: "Hôtel légendaire sur la 5ème Avenue, symbole du luxe new-yorkais depuis 1907.",
      imageUrl: "/images/hotels/The Plazany1.webp",
      amenities: ["Spa Guerlain", "Restaurants", "Champagne Bar", "Concierge", "Wifi"],
      highlights: [
        "Emplacement face à Central Park",
        "Architecture historique classée",
        "Service légendaire de renommée mondiale"
      ]
    },
    {
      id: 507,
      name: "The St. Regis New York",
      location: "New York",
      country: "États-Unis",
      stars: 5,
      description: "Palace emblématique de la 5ème Avenue, luxe absolu et service butler personnalisé.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Butler 24/7", "Spa", "Restaurant étoilé", "Bar King Cole", "Conciergerie"],
      highlights: [
        "Service butler légendaire depuis 1904",
        "Bar King Cole historique",
        "Emplacement 5ème Avenue premium"
      ]
    },
    {
      id: 508,
      name: "The Peninsula New York",
      location: "New York",
      country: "États-Unis",
      stars: 5,
      description: "Luxe asiatique raffiné au cœur de Manhattan, rooftop bar panoramique.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Rooftop bar", "Spa", "Piscine", "Restaurants", "Rolls-Royce service"],
      highlights: [
        "Rooftop Salon de Ning avec vue 360°",
        "Flotte de Rolls-Royce et BMW",
        "Spa primé avec piscine"
      ]
    },

    // MIAMI
    {
      id: 509,
      name: "Fontainebleau Miami Beach",
      location: "Miami",
      country: "États-Unis",
      stars: 5,
      description: "Complexe iconique de Miami Beach, design moderne et plage privée.",
      imageUrl: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      amenities: ["Plage privée", "11 piscines", "Spa", "Restaurants", "LIV nightclub"],
      highlights: [
        "Architecture iconique de Miami",
        "11 piscines dont une piscine flottante",
        "Nightclub LIV de renommée mondiale"
      ]
    },
    {
      id: 510,
      name: "Faena Hotel Miami Beach",
      location: "Miami",
      country: "États-Unis",
      stars: 5,
      description: "Hôtel d'art boutique ultra-luxueux, design spectaculaire et service d'exception.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa Tierra Santa", "Plage", "Théâtre", "Restaurants étoilés", "Butler"],
      highlights: [
        "Design artistique unique",
        "Spa holistique Tierra Santa",
        "Théâtre et performances live"
      ]
    },

    // MARRAKECH
    {
      id: 504,
      name: "La Mamounia",
      location: "Marrakech",
      country: "Maroc",
      stars: 5,
      description: "Palace mythique au cœur de Marrakech, jardins somptueux, luxe à la marocaine.",
      imageUrl: "/images/hotels/La Mamounia1.webp",
      amenities: ["Spa oriental", "Jardins", "Piscines", "Restaurants", "Golf"],
      highlights: [
        "Jardins historiques de 8 hectares",
        "Architecture Art Déco et mauresque",
        "Vue sur l'Atlas et la Koutoubia"
      ]
    },
    {
      id: 511,
      name: "Royal Mansour Marrakech",
      location: "Marrakech",
      country: "Maroc",
      stars: 5,
      description: "Palace royal avec riads privés, artisanat marocain d'exception, luxe absolu.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Riads privés", "Spa", "3 restaurants", "Piscines", "Butler"],
      highlights: [
        "53 riads privés avec terrasses",
        "Artisanat marocain d'exception",
        "3 restaurants dont 1 étoilé Michelin"
      ]
    },

    // PARIS
    {
      id: 512,
      name: "Le Bristol Paris",
      location: "Paris",
      country: "France",
      stars: 5,
      description: "Palace parisien emblématique, jardin français, 3 étoiles Michelin.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["3 étoiles Michelin", "Spa", "Jardin français", "Piscine rooftop", "Butler"],
      highlights: [
        "Restaurant Epicure 3 étoiles Michelin",
        "Jardin français en plein Paris",
        "Piscine sur le toit avec vue"
      ]
    },
    {
      id: 513,
      name: "Hôtel Plaza Athénée",
      location: "Paris",
      country: "France",
      stars: 5,
      description: "Palace légendaire avenue Montaigne, haute couture du luxe parisien.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["5 restaurants", "Spa Dior", "Cour intérieure", "Bar", "Conciergerie"],
      highlights: [
        "Spa Dior Institut exclusif",
        "Avenue Montaigne - cœur de la mode",
        "Cour parisienne iconique"
      ]
    },

    // ROME
    {
      id: 514,
      name: "Hotel de Russie",
      location: "Rome",
      country: "Italie",
      stars: 5,
      description: "Élégance italienne près de la Piazza del Popolo, jardins secrets en terrasses.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Jardins en terrasses", "Spa", "Restaurant Stravinskij", "Bar", "Conciergerie"],
      highlights: [
        "Jardins secrets en plein Rome",
        "À 5 min de la Piazza del Popolo",
        "Design italien raffiné"
      ]
    },
    {
      id: 515,
      name: "Hotel Hassler Roma",
      location: "Rome",
      country: "Italie",
      stars: 5,
      description: "Palace historique au sommet de la Scalinata di Trinità dei Monti, vue panoramique.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Restaurant étoilé", "Spa", "Rooftop bar", "Panoramic Suite", "Conciergerie"],
      highlights: [
        "Vue sur Rome depuis les marches espagnoles",
        "Restaurant Imàgo avec vue 360°",
        "Hôtel familial depuis 1893"
      ]
    },

    // BARCELONE
    {
      id: 516,
      name: "Hotel Arts Barcelona",
      location: "Barcelone",
      country: "Espagne",
      stars: 5,
      description: "Gratte-ciel iconique en bord de mer, design contemporain et plage privée.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Plage privée", "Spa", "Piscines", "Restaurants étoilés", "Club enfants"],
      highlights: [
        "Tour emblématique de Barcelone",
        "Accès direct plage Barceloneta",
        "Vue panoramique sur Méditerranée"
      ]
    },
    {
      id: 517,
      name: "Mandarin Oriental Barcelona",
      location: "Barcelone",
      country: "Espagne",
      stars: 5,
      description: "Luxe contemporain sur le Passeig de Gràcia, rooftop pool avec vue Sagrada Familia.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Rooftop pool", "Spa", "Restaurant étoilé", "Terrasse", "Conciergerie"],
      highlights: [
        "Passeig de Gràcia - shopping luxe",
        "Rooftop avec vue Sagrada Familia",
        "Spa The Spa at Mandarin Oriental"
      ]
    },

    // GRÈCE
    {
      id: 518,
      name: "Blue Palace Resort & Spa",
      location: "Crète",
      country: "Grèce",
      stars: 5,
      description: "Resort de luxe en Crète, villas avec piscine privée, vue sur mer Égée.",
      imageUrl: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      amenities: ["Villas privées", "Plage", "Spa", "Restaurants", "Kids club"],
      highlights: [
        "Villas avec piscines privées",
        "Plage de sable d'Elounda",
        "Vue sur l'île de Spinalonga"
      ]
    },
    {
      id: 519,
      name: "Katikies Santorini",
      location: "Santorin",
      country: "Grèce",
      stars: 5,
      description: "Hôtel de luxe à Oia, piscines infinity, couchers de soleil légendaires.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Piscines infinity", "Spa", "Restaurant panoramique", "Suites caverne", "Yacht privé"],
      highlights: [
        "Vue sur la caldeira et couchers de soleil",
        "Suites dans grottes traditionnelles",
        "Service yacht privé disponible"
      ]
    },

    // CHYPRE
    {
      id: 520,
      name: "Amara Hotel",
      location: "Limassol",
      country: "Chypre",
      stars: 5,
      description: "Resort contemporain de luxe en bord de mer, design moderne et spa complet.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Plage privée", "Spa", "Piscines", "Restaurants", "Club enfants"],
      highlights: [
        "Design contemporain primé",
        "Plage de sable privée",
        "Spa de 3000m² avec hammam"
      ]
    },
    {
      id: 521,
      name: "Anassa Hotel",
      location: "Paphos",
      country: "Chypre",
      stars: 5,
      description: "Resort luxueux style village chypriote, jardins byzantins, plage privée.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Plage privée", "Spa Thalassa", "Golf", "Restaurants", "Kids club"],
      highlights: [
        "Architecture byzantine élégante",
        "Spa Thalasso de renommée mondiale",
        "Jardins méditerranéens luxuriants"
      ]
    },

    // LONDRES
    {
      id: 522,
      name: "The Savoy",
      location: "Londres",
      country: "Royaume-Uni",
      stars: 5,
      description: "Palace légendaire sur la Tamise, art déco, histoire et glamour britannique.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Spa", "Piscine art déco", "American Bar", "Restaurants", "Butler"],
      highlights: [
        "Piscine art déco historique",
        "American Bar légendaire",
        "Emplacement sur la Tamise"
      ]
    },

    // ISRAËL (classé dans "monde" pour diversité géographique)
    {
      id: 505,
      name: "Beresheet Hotel",
      location: "Désert du Néguev",
      country: "Israël",
      stars: 5,
      description: "Hôtel spa de luxe au bord du cratère Ramon, expérience désertique unique.",
      imageUrl: "/images/hotels/beresheet.webp",
      amenities: ["Spa", "Piscine infinity", "Restaurant", "Observatory", "Yoga"],
      highlights: [
        "Vue spectaculaire sur le cratère",
        "Expérience désert unique",
        "Spa luxueux avec vue"
      ]
    },

    // TOKYO
    {
      id: 523,
      name: "The Peninsula Tokyo",
      location: "Tokyo",
      country: "Japon",
      stars: 5,
      description: "Luxe contemporain face aux jardins impériaux, service japonais d'exception.",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      amenities: ["Spa", "Piscine", "Restaurants étoilés", "Vue jardins impériaux", "Butler"],
      highlights: [
        "Vue sur le Palais Impérial",
        "Service japonais légendaire",
        "Spa avec bains japonais traditionnels"
      ]
    },
    {
      id: 524,
      name: "Aman Tokyo",
      location: "Tokyo",
      country: "Japon",
      stars: 5,
      description: "Sanctuaire zen dans la tour Otemachi, minimalisme japonais luxueux.",
      imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800",
      amenities: ["Spa onsen", "Piscine 33e étage", "Restaurant kaiseki", "Bibliothèque", "Yoga"],
      highlights: [
        "Design zen minimaliste",
        "Vue panoramique à 360° sur Tokyo",
        "Onsen traditionnel urbain"
      ]
    },
    {
      id: 525,
      name: "Park Hyatt Tokyo",
      location: "Tokyo",
      country: "Japon",
      stars: 5,
      description: "Gratte-ciel iconique de Shinjuku, bar New York Bar avec vue légendaire.",
      imageUrl: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
      amenities: ["New York Bar", "Spa", "Piscine", "Restaurant français", "Club Lounge"],
      highlights: [
        "New York Bar du film Lost in Translation",
        "Vue sur Mont Fuji par temps clair",
        "Design contemporain raffiné"
      ]
    },

    // KYOTO
    {
      id: 526,
      name: "The Ritz-Carlton Kyoto",
      location: "Kyoto",
      country: "Japon",
      stars: 5,
      description: "Ryokan moderne luxueux au bord de la rivière Kamogawa, culture japonaise authentique.",
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800",
      amenities: ["Spa traditionnel", "Jardins zen", "Restaurant kaiseki", "Cérémonie du thé", "Conciergerie"],
      highlights: [
        "Architecture inspirée des ryokans",
        "Vue sur rivière Kamogawa",
        "Proximité temples et geishas"
      ]
    },
    {
      id: 527,
      name: "Aman Kyoto",
      location: "Kyoto",
      country: "Japon",
      stars: 5,
      description: "Retraite secrète dans une forêt de 32 hectares, luxe et sérénité absolue.",
      imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
      amenities: ["Spa onsen", "Jardins privés", "Restaurant", "Yoga", "Méditation"],
      highlights: [
        "32 hectares de forêt privée",
        "Pavillons avec jardins privés",
        "Onsen naturel en pleine nature"
      ]
    },

    // LONDRES (PLUS)
    {
      id: 528,
      name: "Claridge's",
      location: "Londres",
      country: "Royaume-Uni",
      stars: 5,
      description: "Icône Art Déco de Mayfair, élégance britannique légendaire depuis 1812.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Spa", "Restaurant étoilé", "Bar", "Service majordome", "Conciergerie"],
      highlights: [
        "Art Déco emblématique",
        "Afternoon tea légendaire",
        "Quartier Mayfair prestigieux"
      ]
    },
    {
      id: 529,
      name: "The Connaught",
      location: "Londres",
      country: "Royaume-Uni",
      stars: 5,
      description: "Palace discret de Mayfair, restaurant 2 étoiles Michelin Hélène Darroze.",
      imageUrl: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800",
      amenities: ["Spa Aman", "2 étoiles Michelin", "Bar Coburg", "Butler", "Conciergerie"],
      highlights: [
        "Restaurant Hélène Darroze 2 étoiles",
        "Spa Aman exclusif",
        "Élégance discrète britannique"
      ]
    },

    // ISTANBUL
    {
      id: 530,
      name: "Four Seasons Sultanahmet",
      location: "Istanbul",
      country: "Turquie",
      stars: 5,
      description: "Prison ottomane transformée en palace, entre Sainte-Sophie et Mosquée Bleue.",
      imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800",
      amenities: ["Spa", "Restaurant", "Cour ottomane", "Hammam", "Conciergerie"],
      highlights: [
        "Architecture néo-classique historique",
        "À 5 min de Sainte-Sophie",
        "Cour intérieure ottomane"
      ]
    },
    {
      id: 531,
      name: "Çırağan Palace Kempinski",
      location: "Istanbul",
      country: "Turquie",
      stars: 5,
      description: "Palace impérial ottoman sur le Bosphore, luxe oriental absolu.",
      imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
      amenities: ["Piscine Bosphore", "Spa", "Restaurants", "Hammam", "Yacht privé"],
      highlights: [
        "Ancien palais impérial ottoman",
        "Piscine infinity sur le Bosphore",
        "Service sultanesque"
      ]
    },
    {
      id: 532,
      name: "Raffles Istanbul",
      location: "Istanbul",
      country: "Turquie",
      stars: 5,
      description: "Gratte-ciel luxueux avec vue Bosphore, spa de 3000m².",
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      amenities: ["Spa 3000m²", "Piscines", "Restaurants", "Rooftop bar", "Butler"],
      highlights: [
        "Vue panoramique sur le Bosphore",
        "Spa de renommée mondiale",
        "Design contemporain ottoman"
      ]
    },

    // BANGKOK
    {
      id: 533,
      name: "Mandarin Oriental Bangkok",
      location: "Bangkok",
      country: "Thaïlande",
      stars: 5,
      description: "Légende hôtelière sur le fleuve Chao Phraya depuis 1876, écrivains célèbres.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Spa primé", "Restaurants étoilés", "Suites coloniales", "Boat shuttle", "Butler"],
      highlights: [
        "Histoire littéraire légendaire",
        "Spa primé de renommée mondiale",
        "Suites des auteurs (Somerset Maugham...)"
      ]
    },
    {
      id: 534,
      name: "The Siam Hotel",
      location: "Bangkok",
      country: "Thaïlande",
      stars: 5,
      description: "Boutique hotel Art Déco au bord du fleuve, collection d'antiquités.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa", "Muay Thai", "Restaurant", "Cinéma privé", "Yacht"],
      highlights: [
        "Design Art Déco unique",
        "Collection d'art asiatique",
        "École de Muay Thai privée"
      ]
    },
    {
      id: 535,
      name: "Four Seasons Bangkok",
      location: "Bangkok",
      country: "Thaïlande",
      stars: 5,
      description: "Gratte-ciel moderne sur le fleuve, spa et piscines spectaculaires.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa", "Piscines", "Restaurants", "Rooftop bar", "Kids club"],
      highlights: [
        "Design contemporain thaï",
        "Vue panoramique sur Bangkok",
        "Service Four Seasons légendaire"
      ]
    },

    // PHUKET
    {
      id: 536,
      name: "Amanpuri",
      location: "Phuket",
      country: "Thaïlande",
      stars: 5,
      description: "Premier resort Aman, villas pavillon sur baie privée, luxe absolu.",
      imageUrl: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      amenities: ["Villas privées", "Plage privée", "Spa", "Yacht", "Restaurant"],
      highlights: [
        "Premier Aman au monde (1988)",
        "Baie privée exclusive",
        "Pavillons thaïs traditionnels"
      ]
    },
    {
      id: 537,
      name: "Trisara Phuket",
      location: "Phuket",
      country: "Thaïlande",
      stars: 5,
      description: "Villas ultra-luxueuses avec piscines privées, plage secrète.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Villas piscine privée", "Plage privée", "Spa", "Restaurant étoilé", "Yacht"],
      highlights: [
        "Toutes suites avec piscine privée",
        "Plage privée exclusive",
        "Service ultra personnalisé"
      ]
    },

    // SINGAPOUR
    {
      id: 538,
      name: "Raffles Singapore",
      location: "Singapour",
      country: "Singapour",
      stars: 5,
      description: "Légende coloniale depuis 1887, inventeur du Singapore Sling.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Spa", "Long Bar", "Restaurants", "Jardins", "Butler"],
      highlights: [
        "Icône coloniale historique",
        "Long Bar - inventeur du Singapore Sling",
        "Jardin tropical luxuriant"
      ]
    },
    {
      id: 539,
      name: "Marina Bay Sands",
      location: "Singapour",
      country: "Singapour",
      stars: 5,
      description: "Icône architecturale avec piscine rooftop infinity la plus célèbre au monde.",
      imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800",
      amenities: ["SkyPark piscine", "Casino", "Restaurants étoilés", "Shopping", "Spa"],
      highlights: [
        "Piscine rooftop infinity iconique",
        "Vue panoramique sur Singapour",
        "Architecture futuriste spectaculaire"
      ]
    },

    // HONG KONG
    {
      id: 540,
      name: "The Peninsula Hong Kong",
      location: "Hong Kong",
      country: "Chine",
      stars: 5,
      description: "Grande Dame de Hong Kong depuis 1928, luxe et tradition britannique.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Spa", "Piscine", "Restaurants", "Flotte Rolls-Royce", "Héliport"],
      highlights: [
        "Flotte de Rolls-Royce verte légendaire",
        "Afternoon tea iconique",
        "Emplacement Kowloon prestigieux"
      ]
    },
    {
      id: 541,
      name: "The Upper House",
      location: "Hong Kong",
      country: "Chine",
      stars: 5,
      description: "Hôtel boutique minimaliste zen au-dessus de Pacific Place.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Sky Lounge", "Restaurant", "Spa", "Design zen", "Conciergerie"],
      highlights: [
        "Design minimaliste zen",
        "Vue spectaculaire sur Victoria Harbour",
        "Service intimiste personnalisé"
      ]
    },

    // AMSTERDAM
    {
      id: 542,
      name: "Waldorf Astoria Amsterdam",
      location: "Amsterdam",
      country: "Pays-Bas",
      stars: 5,
      description: "Six palais du 17e siècle sur les canaux, patrimoine UNESCO.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa Guerlain", "Restaurant étoilé", "Jardins", "Canal privé", "Butler"],
      highlights: [
        "Palais historiques sur canaux UNESCO",
        "Spa Guerlain exclusif",
        "Architecture Golden Age hollandais"
      ]
    },
    {
      id: 543,
      name: "The Dylan Amsterdam",
      location: "Amsterdam",
      country: "Pays-Bas",
      stars: 5,
      description: "Boutique hotel de charme dans ancien théâtre du 17e siècle.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Restaurant étoilé", "Bar", "Cour intérieure", "Spa", "Conciergerie"],
      highlights: [
        "Ancien théâtre du 17e siècle",
        "Restaurant Vinkeles étoilé Michelin",
        "Emplacement canal Keizersgracht"
      ]
    },

    // BERLIN
    {
      id: 544,
      name: "Hotel Adlon Kempinski",
      location: "Berlin",
      country: "Allemagne",
      stars: 5,
      description: "Palace légendaire face à la Porte de Brandebourg, luxe berlinois.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Spa", "Piscine", "Restaurants étoilés", "Bar", "Conciergerie"],
      highlights: [
        "Face à la Porte de Brandebourg",
        "Histoire légendaire depuis 1907",
        "Spa de luxe avec piscine"
      ]
    },

    // MUNICH
    {
      id: 545,
      name: "Mandarin Oriental Munich",
      location: "Munich",
      country: "Allemagne",
      stars: 5,
      description: "Luxe contemporain dans ancien bâtiment néo-Renaissance, rooftop pool.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Rooftop pool", "Spa", "Restaurant étoilé", "Bar", "Conciergerie"],
      highlights: [
        "Rooftop pool avec vue sur Altstadt",
        "Architecture néo-Renaissance",
        "Emplacement Maximilianstrasse"
      ]
    },

    // VIENNE
    {
      id: 546,
      name: "Hotel Sacher Wien",
      location: "Vienne",
      country: "Autriche",
      stars: 5,
      description: "Palace historique face à l'Opéra, inventeur de la Sachertorte.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa", "Café Sacher", "Restaurants", "Bar", "Conciergerie"],
      highlights: [
        "Inventeur de la Sachertorte originale",
        "Face à l'Opéra d'État de Vienne",
        "Tradition impériale viennoise"
      ]
    },
    {
      id: 547,
      name: "Park Hyatt Vienna",
      location: "Vienne",
      country: "Autriche",
      stars: 5,
      description: "Palais historique avec spa et piscine, luxe contemporain viennois.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa", "Piscine", "Restaurant", "Bar", "Conciergerie"],
      highlights: [
        "Architecture palatiale restaurée",
        "Spa avec piscine chauffée",
        "Emplacement Ring historique"
      ]
    },

    // PRAGUE
    {
      id: 548,
      name: "Four Seasons Prague",
      location: "Prague",
      country: "République Tchèque",
      stars: 5,
      description: "Palais baroque sur la Vltava face au Château, vue légendaire.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Spa", "Restaurant", "Terrasse Vltava", "Bar", "Conciergerie"],
      highlights: [
        "Vue sur le Château de Prague",
        "Palais baroque restauré",
        "Emplacement privilégié sur Vltava"
      ]
    },
    {
      id: 549,
      name: "Augustine Hotel Prague",
      location: "Prague",
      country: "République Tchèque",
      stars: 5,
      description: "Monastère augustinien du 13e siècle transformé en hôtel de luxe.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Spa", "Brasserie St. Thomas", "Jardins", "Bar", "Conciergerie"],
      highlights: [
        "Monastère historique du 13e siècle",
        "Brasserie de bière trappiste",
        "Jardins secrets médiévaux"
      ]
    },

    // BUDAPEST
    {
      id: 550,
      name: "Four Seasons Gresham Palace",
      location: "Budapest",
      country: "Hongrie",
      stars: 5,
      description: "Palace Art Nouveau sur le Danube face au Château de Buda.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Spa", "Piscine", "Restaurant", "Bar", "Conciergerie"],
      highlights: [
        "Architecture Art Nouveau spectaculaire",
        "Vue sur le Danube et château",
        "Vitraux Tiffany historiques"
      ]
    },

    // LISBONNE
    {
      id: 551,
      name: "Four Seasons Ritz Lisbon",
      location: "Lisbonne",
      country: "Portugal",
      stars: 5,
      description: "Palace avec vue sur le Tage et parc Eduardo VII, luxe portugais.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa", "Piscine", "Restaurant", "Bar rooftop", "Conciergerie"],
      highlights: [
        "Vue panoramique sur le Tage",
        "Parc Eduardo VII adjacent",
        "Élégance portugaise classique"
      ]
    },
    {
      id: 552,
      name: "Pestana Palace Lisboa",
      location: "Lisbonne",
      country: "Portugal",
      stars: 5,
      description: "Palais du 19e siècle avec jardins subtropicaux, monument national.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Jardins subtropicaux", "Spa", "Piscine", "Restaurant", "Chapelle"],
      highlights: [
        "Monument national classé",
        "Jardins subtropicaux de 5 hectares",
        "Fresques et azulejos historiques"
      ]
    },

    // ATHÈNES (PLUS)
    {
      id: 553,
      name: "Hotel Grande Bretagne",
      location: "Athènes",
      country: "Grèce",
      stars: 5,
      description: "Palace historique sur la place Syntagma face au Parlement, rooftop vue Acropole.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Rooftop vue Acropole", "Spa", "Piscine", "Restaurants", "Bar"],
      highlights: [
        "Vue rooftop sur l'Acropole",
        "Place Syntagma prestigieuse",
        "Histoire depuis 1874"
      ]
    },

    // SYDNEY
    {
      id: 554,
      name: "Park Hyatt Sydney",
      location: "Sydney",
      country: "Australie",
      stars: 5,
      description: "Vue imprenable sur l'Opéra et le Harbour Bridge, emplacement unique.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Spa", "Piscine rooftop", "Restaurant", "Bar", "Conciergerie"],
      highlights: [
        "Vue sur Opéra de Sydney",
        "Rooftop pool avec Harbour Bridge",
        "Emplacement privilégié Circular Quay"
      ]
    },

    // MELBOURNE
    {
      id: 555,
      name: "The Langham Melbourne",
      location: "Melbourne",
      country: "Australie",
      stars: 5,
      description: "Luxe sur la Yarra River, architecture victorienne et design contemporain.",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      amenities: ["Spa Chuan", "Piscine", "Restaurant Melba", "Bar", "Afternoon tea"],
      highlights: [
        "Emplacement Southbank sur Yarra",
        "Spa Chuan de renommée",
        "Afternoon tea réputé"
      ]
    },

    // LOS ANGELES
    {
      id: 556,
      name: "Beverly Hills Hotel",
      location: "Los Angeles",
      country: "États-Unis",
      stars: 5,
      description: "Légende hollywoodienne rose, Polo Lounge iconique, glamour éternel.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Polo Lounge", "Spa", "Piscine", "Bungalows", "Room service 24/7"],
      highlights: [
        "Pink Palace iconique d'Hollywood",
        "Polo Lounge légendaire",
        "Bungalows des stars"
      ]
    },
    {
      id: 557,
      name: "Hotel Bel-Air",
      location: "Los Angeles",
      country: "États-Unis",
      stars: 5,
      description: "Oasis cachée dans canyon de Bel Air, jardins luxuriants et cygnes.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Spa La Prairie", "Restaurant Wolfgang Puck", "Jardins", "Piscine", "Bar"],
      highlights: [
        "Jardin de 4 hectares avec cygnes",
        "Oasis secrète de Bel Air",
        "Spa La Prairie exclusif"
      ]
    },

    // LAS VEGAS
    {
      id: 558,
      name: "Bellagio Las Vegas",
      location: "Las Vegas",
      country: "États-Unis",
      stars: 5,
      description: "Icône du Strip avec fontaines spectaculaires, luxe et divertissement.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Casino", "Fontaines", "Restaurants étoilés", "Spa", "Spectacles"],
      highlights: [
        "Fontaines spectaculaires iconiques",
        "Collection d'art Picasso/Monet",
        "Restaurants étoilés Michelin"
      ]
    },
    {
      id: 559,
      name: "Wynn Las Vegas",
      location: "Las Vegas",
      country: "États-Unis",
      stars: 5,
      description: "Complexe luxueux avec golf, lac artificiel et restaurants primés.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Golf", "Spa", "Casino", "Restaurants étoilés", "Spectacle Le Rêve"],
      highlights: [
        "Parcours de golf Tom Fazio",
        "Lac et montagne artificielle",
        "18 restaurants dont étoilés Michelin"
      ]
    },

    // CANCÚN
    {
      id: 560,
      name: "The Ritz-Carlton Cancún",
      location: "Cancún",
      country: "Mexique",
      stars: 5,
      description: "Resort de luxe sur plage Caraïbes, spa et gastronomie mexicaine.",
      imageUrl: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      amenities: ["Plage Caraïbes", "Spa", "Restaurants", "Kids club", "Golf"],
      highlights: [
        "Plage de sable blanc des Caraïbes",
        "Spa de 1800m²",
        "Cuisine mexicaine gastronomique"
      ]
    },

    // TULUM
    {
      id: 561,
      name: "Azulik Tulum",
      location: "Tulum",
      country: "Mexique",
      stars: 5,
      description: "Eco-resort bohème-chic sans électricité, jungle et plage maya.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Villas treehouse", "Plage privée", "Spa jungle", "Restaurant", "Art gallery"],
      highlights: [
        "Expérience eco-luxe sans électricité",
        "Villas en bois dans la jungle",
        "Plage maya turquoise privée"
      ]
    },

    // BUENOS AIRES
    {
      id: 562,
      name: "Alvear Palace Hotel",
      location: "Buenos Aires",
      country: "Argentine",
      stars: 5,
      description: "Palace Belle Époque, luxe français en Amérique du Sud, élégance légendaire.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      amenities: ["Spa", "Restaurant français", "Bar", "Butler", "Conciergerie"],
      highlights: [
        "Élégance Belle Époque parisienne",
        "Restaurant L'Orangerie gastronomique",
        "Quartier Recoleta prestigieux"
      ]
    },

    // RIO DE JANEIRO
    {
      id: 563,
      name: "Belmond Copacabana Palace",
      location: "Rio de Janeiro",
      country: "Brésil",
      stars: 5,
      description: "Palace Art Déco face à Copacabana, glamour carioca depuis 1923.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      amenities: ["Plage Copacabana", "Spa", "Piscine", "Restaurants", "Piano bar"],
      highlights: [
        "Emplacement légendaire Copacabana",
        "Histoire glamour depuis 1923",
        "Piscine iconique face à la plage"
      ]
    },

    // DUBAÏ (PLUS)
    {
      id: 564,
      name: "Bulgari Resort Dubai",
      location: "Dubaï",
      country: "Émirats Arabes Unis",
      stars: 5,
      description: "Resort ultra-luxe sur île artificielle en forme d'hippocampe, design italien.",
      imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
      amenities: ["Plage privée", "Yacht club", "Spa Bulgari", "Restaurants", "Marina"],
      highlights: [
        "Île artificielle exclusive",
        "Design Bulgari italien",
        "Yacht club et marina privée"
      ]
    },
    {
      id: 565,
      name: "Armani Hotel Dubai",
      location: "Dubaï",
      country: "Émirats Arabes Unis",
      stars: 5,
      description: "Dans Burj Khalifa, design Armani minimaliste, vue record du monde.",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800",
      amenities: ["Burj Khalifa", "Spa Armani", "Restaurants", "Lounge", "Conciergerie"],
      highlights: [
        "Dans la tour la plus haute du monde",
        "Design Giorgio Armani exclusif",
        "Vue panoramique depuis Burj Khalifa"
      ]
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelsListSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section with Video Background */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hotel-poster.jpg"
        >
          <source src="/videos/Hotel-Hero.mp4" type="video/mp4" />
          {/* Fallback pour navigateurs ne supportant pas la vidéo */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        </video>

        {/* Dark Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Réservez votre <span className="text-red-300">Hôtel</span> Partout dans le Monde
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Sélection d'hôtels d'exception • Service personnalisé • Annulation flexible
            </p>
          </div>
        </div>
      </section>

      {/* Formulaire de réservation */}
      <section id="formulaire-reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <HotelBookingForm />
        </div>
      </section>

      {/* Avantages Elynor Tours */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-rose-500">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Pourquoi réserver avec Elynor Tours ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sélection Premium</h3>
                <p className="text-white/90 text-sm">
                  Hôtels triés sur le volet pour leur qualité exceptionnelle
                </p>
              </div>
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Réseau Mondial</h3>
                <p className="text-white/90 text-sm">
                  Partenariats avec les meilleurs hôtels du monde entier
                </p>
              </div>
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Annulation Flexible</h3>
                <p className="text-white/90 text-sm">
                  Conditions d'annulation avantageuses sur la plupart des réservations
                </p>
              </div>
              <div className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Service 24/7</h3>
                <p className="text-white/90 text-sm">
                  Assistance francophone disponible à tout moment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels avec système de filtres */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <HotelsWithFilters hotelsIsrael={hotelsIsrael} hotelsWorld={hotelsWorld} />
        </div>
      </section>

      {/* Section SEO : Guide des destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Réserver votre Hôtel : Guide Complet des Destinations
            </h2>

            <div className="prose prose-lg max-w-none">
              {/* Israel */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hôtels en Israël : Destinations Incontournables</h3>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Tel Aviv : La Ville qui ne Dort Jamais</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Tel Aviv</strong> est la capitale festive et cosmopolite d'Israël. Ses <strong>hôtels en bord de mer</strong> offrent
                  un accès direct aux plages de sable doré de la Méditerranée. Le <strong>Dan Tel Aviv</strong>, <strong>Carlton Tel Aviv</strong>
                  et <strong>Hilton Tel Aviv</strong> proposent des <strong>plages privées</strong>, des spas luxueux et une vue mer spectaculaire.
                  Le quartier <strong>Rothschild</strong> abrite des hôtels boutique comme <strong>The Setai</strong> et <strong>The Norman</strong>,
                  installés dans des bâtiments Bauhaus classés UNESCO.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Jérusalem : Histoire et Spiritualité</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Jérusalem</strong>, ville trois fois sainte, offre des hôtels de prestige avec vue sur la <strong>Vieille Ville</strong>.
                  Le <strong>King David Hotel</strong>, palace historique depuis 1931, et le <strong>David Citadel</strong> face aux remparts
                  sont des institutions. Le <strong>Waldorf Astoria Jerusalem</strong> et le <strong>Mamilla Hotel</strong> allient luxe contemporain
                  et proximité des sites bibliques. Idéal pour combiner <strong>tourisme religieux et luxe</strong>.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Mer Morte : Spa et Bien-être</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La <strong>Mer Morte</strong>, point le plus bas de la planète (-430m), est réputée pour ses <strong>propriétés thérapeutiques</strong>.
                  Les hôtels spa comme le <strong>David Dead Sea Resort</strong>, <strong>Leonardo Club Dead Sea</strong> et
                  <strong>Nevo by Isrotel</strong> proposent des soins aux <strong>minéraux de la Mer Morte</strong>, des boues curatives
                  et des piscines d'eau salée. L'expérience unique de <strong>flotter dans l'eau hypersalée</strong> est inoubliable.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Eilat : Mer Rouge et Plongée</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eilat</strong>, station balnéaire sur la <strong>Mer Rouge</strong>, est le paradis des familles et des plongeurs.
                  Le <strong>Herods Palace Eilat</strong> avec son architecture inspirée de Pétra, les resorts <strong>Isrotel</strong>
                  (King Solomon, Royal Garden) et les hôtels aquatiques <strong>Lagoona</strong> et <strong>Agamim</strong> offrent
                  des <strong>formules all-inclusive</strong>, des parcs aquatiques et un accès aux récifs coralliens.
                </p>
              </div>

              {/* Destinations Internationales */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hôtels dans le Monde : Sélection Internationale</h3>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Asie : Luxe et Tradition</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Tokyo</strong> offre des palaces contemporains comme l'<strong>Aman Tokyo</strong> avec son spa onsen urbain,
                  et le <strong>Park Hyatt Tokyo</strong> rendu célèbre par le film Lost in Translation. À <strong>Bangkok</strong>,
                  le <strong>Mandarin Oriental</strong>, légende hôtelière depuis 1876, accueillait les grands écrivains.
                  <strong>Singapour</strong> brille avec le <strong>Marina Bay Sands</strong> et sa piscine rooftop infinity iconique,
                  tandis que <strong>Phuket</strong> propose l'<strong>Amanpuri</strong>, premier resort Aman au monde.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Europe : Patrimoine et Élégance</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Paris</strong> rayonne avec <strong>Le Bristol</strong> (3 étoiles Michelin) et le <strong>Plaza Athénée</strong>
                  avenue Montaigne. <strong>Londres</strong> compte des institutions comme <strong>The Savoy</strong> et <strong>Claridge's</strong>.
                  <strong>Vienne</strong> séduit avec le <strong>Hotel Sacher</strong> (inventeur de la Sachertorte),
                  <strong>Istanbul</strong> fascine avec le <strong>Çırağan Palace Kempinski</strong> sur le Bosphore,
                  et <strong>Amsterdam</strong> charme avec le <strong>Waldorf Astoria</strong> dans six palais du 17e siècle.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Moyen-Orient : Luxe Contemporain</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Dubaï</strong> impressionne avec le <strong>Burj Al Arab</strong>, l'hôtel 7 étoiles le plus luxueux au monde,
                  l'<strong>Atlantis The Palm</strong> avec son parc aquatique Aquaventure, et l'<strong>Armani Hotel</strong>
                  dans le Burj Khalifa, plus haute tour du monde. <strong>Marrakech</strong> enchante avec <strong>La Mamounia</strong>,
                  palace mythique aux jardins somptueux.
                </p>
              </div>

              {/* Conseils de réservation */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Conseils pour Réserver votre Hôtel au Meilleur Prix</h3>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Quand Réserver ?</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour obtenir les <strong>meilleurs tarifs hôteliers</strong>, réservez <strong>2-3 mois à l'avance</strong> pour la haute saison
                  et <strong>1 mois</strong> pour la basse saison. En Israël, évitez les périodes de fêtes juives (Pessah, Rosh Hashana, Souccot)
                  où les prix grimpent. La période novembre-février offre des <strong>promotions intéressantes</strong>.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Annulation Flexible</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Privilégiez les <strong>réservations avec annulation gratuite</strong> jusqu'à 24-48h avant l'arrivée.
                  Elynor Tours négocie des conditions d'annulation avantageuses avec ses partenaires hôteliers.
                  Nous proposons également une <strong>assurance annulation optionnelle</strong> pour une tranquillité maximale.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Services Inclus</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vérifiez ce qui est inclus : <strong>petit-déjeuner</strong>, <strong>wifi</strong>, <strong>parking</strong>,
                  <strong>spa</strong>, <strong>navette aéroport</strong>. Les hôtels israéliens incluent souvent le petit-déjeuner buffet
                  copieux. Les resorts d'Eilat et de la Mer Morte proposent fréquemment des <strong>formules all-inclusive</strong>
                  avec repas, boissons et activités inclus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Internationales - Liens Internes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Explorez Nos Destinations dans le Monde
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Découvrez nos sélections d'hôtels de luxe dans les plus belles destinations internationales
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/hotels/tokyo" className="group bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 hover:shadow-xl transition-all border border-rose-100">
                <div className="text-4xl mb-3">🇯🇵</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                  Hôtels Tokyo
                </h3>
                <p className="text-gray-700 mb-4">
                  Aman Tokyo, Park Hyatt, Peninsula • Spa onsen • Vue Mont Fuji • Tradition japonaise
                </p>
                <span className="text-rose-600 font-semibold group-hover:underline">
                  Découvrir Tokyo →
                </span>
              </Link>

              <Link href="/hotels/dubai" className="group bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition-all border border-amber-100">
                <div className="text-4xl mb-3">🇦🇪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  Hôtels Dubai
                </h3>
                <p className="text-gray-700 mb-4">
                  Burj Al Arab 7★, Atlantis Palm, Armani Burj Khalifa • Luxe extrême • Butler 24/7
                </p>
                <span className="text-amber-600 font-semibold group-hover:underline">
                  Découvrir Dubai →
                </span>
              </Link>

              <Link href="/hotels/paris" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-xl transition-all border border-blue-100">
                <div className="text-4xl mb-3">🇫🇷</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Palaces Paris
                </h3>
                <p className="text-gray-700 mb-4">
                  Le Bristol, Plaza Athénée, Ritz • 3★ Michelin • Spa Dior • Luxe à la française
                </p>
                <span className="text-blue-600 font-semibold group-hover:underline">
                  Découvrir Paris →
                </span>
              </Link>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                🌍 Plus de <strong>60 destinations</strong> disponibles : Bangkok, Londres, Istanbul, New York, Singapour...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog SEO - Lien Interne */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              📝 Guides et Conseils Voyage
            </h2>
            <p className="text-gray-700 mb-6">
              Découvrez nos articles experts pour préparer votre séjour
            </p>
            <Link
              href="/blog/top-10-hotels-luxe-mer-morte"
              className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors shadow-lg"
            >
              🏆 Top 10 Hotels Luxe Mer Morte →
            </Link>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quels sont les meilleurs hôtels en Israël ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les meilleurs hôtels en Israël incluent le <strong>King David</strong> et <strong>Waldorf Astoria</strong> à Jérusalem,
                  le <strong>Dan Tel Aviv</strong> et <strong>The Setai</strong> à Tel Aviv, et le <strong>David Dead Sea Resort</strong>
                  à la Mer Morte. Ces établissements 5 étoiles offrent un service d'exception, des spas luxueux et des emplacements privilégiés.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Pourquoi réserver un hôtel avec Elynor Tours ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Elynor Tours offre une <strong>sélection premium d'hôtels</strong>, des <strong>tarifs négociés avantageux</strong>,
                  une <strong>assistance francophone 24/7</strong>, et des <strong>conditions d'annulation flexibles</strong>.
                  Notre expertise locale depuis 2015 garantit les meilleurs hôtels au meilleur prix en Israël et dans le monde.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quand réserver un hôtel en Israël pour avoir le meilleur prix ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Pour les meilleurs tarifs, réservez <strong>2-3 mois à l'avance</strong> pour la haute saison (avril-octobre)
                  et <strong>1 mois</strong> pour la basse saison. Les périodes les moins chères sont <strong>novembre-février</strong>
                  (hors fêtes juives). Évitez Pessah, Rosh Hashana et Souccot pour des prix plus avantageux.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quels hôtels sont idéaux pour les familles en Israël ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Pour les familles, nous recommandons le <strong>Dan Panorama Tel Aviv</strong> avec son kids club,
                  les hôtels <strong>Isrotel à Eilat</strong> avec parcs aquatiques (Lagoona, Agamim),
                  et le <strong>Leonardo Club Dead Sea</strong> en formule all-inclusive. Ces établissements offrent
                  animations enfants, piscines et chambres familiales spacieuses.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quels sont les hôtels avec les meilleurs spas en Israël ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Les meilleurs spas se trouvent à la <strong>Mer Morte</strong> : <strong>David Dead Sea Resort</strong>
                  avec soins aux minéraux, <strong>Leonardo Club Dead Sea</strong>, et <strong>Nevo by Isrotel</strong>.
                  À Jérusalem, le <strong>Waldorf Astoria</strong> dispose d'un spa Guerlain. À Tel Aviv,
                  l'<strong>InterContinental</strong> offre le spa Aqua de renommée mondiale.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Proposez-vous des hôtels dans d'autres pays que l'Israël ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Oui, Elynor Tours propose une <strong>sélection mondiale d'hôtels de luxe</strong> :
                  Dubai (Burj Al Arab, Atlantis), Tokyo (Aman, Peninsula), Paris (Bristol, Plaza Athénée),
                  New York (The Plaza), Londres (Savoy, Claridge's), Bangkok, Singapour, et plus de
                  <strong>60 destinations internationales</strong>.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Les hôtels en Israël sont-ils kasher ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  La majorité des hôtels en Israël proposent des <strong>restaurants kasher</strong>, notamment tous les hôtels
                  Dan, Fattal (Herods, Leonardo), et Isrotel. À Jérusalem, presque tous les hôtels sont strictement kasher.
                  Les hôtels de Tel Aviv offrent généralement des options kasher et non-kasher.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <summary className="font-semibold text-lg text-gray-900 cursor-pointer">
                  Quelle est la politique d'annulation pour les réservations d'hôtels ?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  La plupart de nos hôtels offrent une <strong>annulation flexible jusqu'à 24-48h</strong> avant l'arrivée sans frais.
                  Certains tarifs non-remboursables offrent des réductions importantes. Nous proposons aussi une
                  <strong>assurance annulation optionnelle</strong> pour plus de flexibilité.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à réserver votre prochain séjour ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis personnalisé et profiter de nos meilleurs tarifs négociés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#formulaire-reservation"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Demander un devis
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
