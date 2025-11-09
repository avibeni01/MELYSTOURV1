// src/app/hotels/page.tsx
import type { Metadata } from 'next'
import HotelBookingForm from '@/components/forms/HotelBookingForm'
import HotelsWithFilters from '@/components/hotels/HotelsWithFilters'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema, buildItemListSchema } from '@/lib/seo'
import { Globe, Star, Shield, Phone } from 'lucide-react'

export const metadata: Metadata = buildMetadata({
  title: 'Hotels Israel : Reservation Tel Aviv Jerusalem Eilat 2025',
  description: 'Reservez votre hotel en Israel au meilleur prix : Tel Aviv bord de mer, Jerusalem vieille ville, Mer Morte spa, Eilat Mer Rouge. 3-5*, promos, annulation flexible.',
  canonical: '/hotels',
  keywords: [
    'hotel israel',
    'reservation hotel tel aviv',
    'hotel jerusalem',
    'hotel mer morte',
    'hotel eilat',
    'hotel luxe israel',
    'promotion hotel israel'
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
    }
  ]

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={hotelsListSchema} />

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
