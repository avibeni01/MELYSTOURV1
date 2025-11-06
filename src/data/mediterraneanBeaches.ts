import { MediterraneanBeach, BeachFacility, BeachType, WaveSize } from '@/types/mediterraneanBeach';

export const mediterraneanBeaches: MediterraneanBeach[] = [
  {
    id: 1,
    name: "Gordon Beach",
    hebrewName: "חוף גורדון",
    description: "L'une des plages les plus populaires de Tel Aviv, située en plein cœur de la ville. Gordon Beach offre un cadre animé avec de nombreuses installations et activités. C'est un endroit privilégié pour les locaux et les touristes, où l'ambiance de Tel Aviv se ressent pleinement.",
    images: [
      "/images/mediterranean-beaches/gordon-beach-1.jpg",
      "/images/mediterranean-beaches/gordon-beach-2.jpg",
      "/images/mediterranean-beaches/gordon-beach-3.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0835,
      longitude: 34.7672,
      address: "Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre. Certaines installations comme les bars peuvent rester ouvertes plus tard."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.VOLLEYBALL,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Eau généralement propre et claire, avec un contrôle régulier de la qualité."
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu et nettoyé régulièrement"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour les débutants et surfeurs intermédiaires, particulièrement le matin."
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking public payant à proximité",
      publicTransport: "Nombreuses lignes de bus et station de vélos en libre-service"
    },
    bestTimeToVisit: "Tôt le matin pour éviter la foule ou en semaine hors saison estivale",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Promenade de Tel Aviv",
      "Port de Tel Aviv",
      "Marché Carmel"
    ]
  },
  {
    id: 2,
    name: "Frishman Beach",
    hebrewName: "חוף פרישמן",
    description: "Située au cœur de Tel Aviv, la plage de Frishman est l'une des plus appréciées de la ville. Elle attire une foule diverse, des familles aux jeunes branchés, et offre une excellente infrastructure. Elle est particulièrement connue pour son ambiance animée et ses couchers de soleil spectaculaires.",
    images: [
      "/images/mediterranean-beaches/frishman-beach-1.webp",
      "/images/mediterranean-beaches/frishman-beach-2.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0797,
      longitude: 34.7668,
      address: "Frishman Street Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre. La plage reste accessible 24h/24, mais sans surveillance nocturne."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 4,
      description: "Eau de bonne qualité, généralement claire et propre avec contrôle régulier."
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu et nettoyé quotidiennement"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Spot occasionnel pour débutants, meilleur le matin avant que le vent ne se lève."
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Plusieurs parkings publics payants à proximité",
      publicTransport: "Bien desservi par les bus et accessible à pied depuis la gare centrale"
    },
    bestTimeToVisit: "Début de matinée ou fin d'après-midi pour éviter la chaleur et les foules",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Dizengoff Street",
      "Dizengoff Center",
      "Café culture de Tel Aviv"
    ]
  },
  {
    id: 3,
    name: "Jerusalem Beach",
    hebrewName: "חוף ירושלים",
    description: "Cette plage centrale offre une atmosphère décontractée et est très populaire auprès des jeunes locaux. Située entre les plages de Geula et de Frishman, Jerusalem Beach est connue pour son ambiance conviviale et sa facilité d'accès depuis le centre-ville.",
    images: [
      "/images/mediterranean-beaches/jerusalem-beach-2.jpg",
      "/images/mediterranean-beaches/jerusalem-beach-3.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0745,
      longitude: 34.7663,
      address: "Jerusalem Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Généralement claire avec de bonnes conditions de baignade"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Débutant-intermédiaire, variable selon les conditions météorologiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parkings payants à proximité",
      publicTransport: "Nombreuses lignes de bus et station de vélos en libre-service"
    },
    bestTimeToVisit: "Matinée ou fin d'après-midi en semaine pour plus de tranquillité",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Carmel Market",
      "Neve Tzedek",
      "Vieille ville de Jaffa"
    ]
  },
  {
    id: 4,
    name: "Herzliya Beach",
    hebrewName: "חוף הרצליה",
    description: "Les plages de Herzliya offrent un cadre plus paisible que celles de Tel Aviv tout en restant facilement accessibles. Avec leur sable fin et leurs eaux claires, elles sont particulièrement appréciées des familles et de ceux qui recherchent une atmosphère plus relaxante. La marina adjacente ajoute une touche de sophistication.",
    images: [
      "/images/mediterranean-beaches/herzliya-beach-1.jpg",
      "/images/mediterranean-beaches/herzliya-beach-2.jpeg",
      "/images/mediterranean-beaches/herzliya-beach-3.jpg"
    ],
    location: {
      city: "Herzliya",
      latitude: 32.1739,
      longitude: 34.7961,
      address: "Herzliya Beach, Herzliya"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre. Certaines zones restent accessibles toute l'année."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, claire et propre avec un contrôle régulier"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu avec nettoyage régulier"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour tous niveaux, écoles de surf disponibles"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit et zones payantes",
      publicTransport: "Bus depuis Tel Aviv et gare ferroviaire à proximité"
    },
    bestTimeToVisit: "Fin de printemps et début d'automne pour des conditions optimales et moins de monde",
    type: [BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Marina de Herzliya",
      "Centre commercial Arena",
      "Musée d'Art Contemporain de Herzliya"
    ]
  },
  {
    id: 5,
    name: "Bograshov Beach",
    hebrewName: "חוף בוגרשוב",
    description: "L'une des plages les plus centrales et populaires de Tel Aviv, réputée pour son atmosphère jeune et animée. C'est l'endroit idéal pour observer la culture de plage locale et profiter de la vie urbaine de Tel Aviv tout en se relaxant en bord de mer.",
    images: [
      "/images/mediterranean-beaches/bograshov-beach-1.jpg",
      "/images/mediterranean-beaches/bograshov-beach-2.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0782,
      longitude: 34.7669,
      address: "Bograshov Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.VOLLEYBALL,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS
    ],
    waterQuality: {
      rating: 4,
      description: "Eau de bonne qualité mais peut être affectée par l'affluence en haute saison"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu malgré la forte fréquentation"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Débutants le matin, moins adapté l'après-midi en raison de la foule"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Difficile, parking payant à proximité souvent plein",
      publicTransport: "Excellent réseau de bus et stations de vélos"
    },
    bestTimeToVisit: "Tôt le matin en semaine pour éviter la foule",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Extrêmement fréquenté"
    },
    nearbyAttractions: [
      "Rue Dizengoff",
      "Rue Sheinkin",
      "Centre-ville de Tel Aviv"
    ]
  },
  {
    id: 6,
    name: "Palmachim Beach",
    hebrewName: "חוף פלמחים",
    description: "Cette magnifique plage naturelle est située dans une réserve et offre un environnement préservé, loin de l'agitation urbaine. Avec ses falaises impressionnantes et son atmosphère sauvage, Palmachim est l'endroit idéal pour ceux qui recherchent une connexion avec la nature.",
    images: [
      "/images/mediterranean-beaches/palmachim-beach-1.jpg",
      "/images/mediterranean-beaches/palmachim-beach-2.jpg",
      "/images/mediterranean-beaches/palmachim-beach-3.jpg"
    ],
    location: {
      city: "Rishon LeZion",
      latitude: 31.9283,
      longitude: 34.6998,
      address: "Palmachim Beach, Route 4311, près de Rishon LeZion"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "La réserve naturelle peut avoir des horaires spécifiques. Surveillance saisonnière."
    },
    entranceFee: "Gratuit pour la plage, frais d'entrée possibles pour la réserve naturelle",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau grâce à son statut de réserve protégée"
    },
    sand: {
      type: "Sable fin mélangé à des zones plus rocheuses",
      color: "Doré clair",
      quality: "Naturel et préservé"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, parfois excellentes pour les surfeurs expérimentés"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking non aménagé disponible",
      publicTransport: "Limité, voiture recommandée"
    },
    bestTimeToVisit: "En semaine et hors saison estivale pour plus de tranquillité",
    type: [BeachType.NATURE],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Réserve naturelle de Palmachim",
      "Ruines archéologiques de Yavne-Yam",
      "Kibbutz Palmachim"
    ]
  },
  {
    id: 7,
    name: "Banana Beach",
    hebrewName: "חוף הבננה",
    description: "Populaire auprès des jeunes et des amateurs de sports nautiques, Banana Beach tire son nom d'un café qui s'y trouvait autrefois. C'est un lieu décontracté et convivial où l'on peut pratiquer le volleyball ou simplement profiter de l'atmosphère bohème.",
    images: [],
    location: {
      city: "Tel Aviv",
      latitude: 32.0704,
      longitude: 34.7651,
      address: "Banana Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.VOLLEYBALL,
      BeachFacility.WATER_SPORTS
    ],
    waterQuality: {
      rating: 4,
      description: "Généralement bonne qualité d'eau avec surveillance régulière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bon spot pour débutants et intermédiaires, location d'équipement disponible"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parkings publics payants à proximité",
      publicTransport: "Bien desservi par les bus et stations de vélos"
    },
    bestTimeToVisit: "Fin d'après-midi pour profiter des couchers de soleil et de l'ambiance détendue",
    type: [BeachType.CITY, BeachType.SPORTS],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Old Jaffa",
      "Jaffa Port",
      "Jaffa Flea Market"
    ]
  },
  {
    id: 8,
    name: "Hilton Beach",
    hebrewName: "חוף הילטון",
    description: "Plage populaire de Tel Aviv située près de l'hôtel Hilton. Connue comme la plage gay-friendly officielle de Tel Aviv, elle attire une communauté diverse et accueillante. Excellent spot de surf avec éclairage nocturne spécial. C'est également l'une des rares plages de Tel Aviv où les chiens sont autorisés.",
    images: [
      "/images/mediterranean-beaches/hilton-beach-2.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0862,
      longitude: 34.7683,
      address: "Hilton Beach, Herbert Samuel Promenade, Tel Aviv"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre. Éclairage nocturne pour le surf jusqu'à 21h certains soirs."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.WATER_SPORTS,
      BeachFacility.VOLLEYBALL
    ],
    waterQuality: {
      rating: 4,
      description: "Eau de bonne qualité, contrôle régulier, parfois affectée par les vagues"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Excellent spot de surf, très populaire. Location de planches disponible. Éclairage nocturne pour sessions tardives."
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parkings payants à proximité, souvent saturés",
      publicTransport: "Nombreuses lignes de bus, station de vélos en libre-service"
    },
    bestTimeToVisit: "Tôt le matin pour le surf, en fin d'après-midi pour l'ambiance festive",
    type: [BeachType.CITY, BeachType.SPORTS],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Hilton Hotel",
      "Independence Park",
      "Port de Tel Aviv"
    ]
  },
  {
    id: 9,
    name: "Nordau Beach",
    hebrewName: "חוף נורדאו (חוף הדתיים)",
    description: "Unique plage religieuse de Tel Aviv avec baignade séparée hommes/femmes. Respecte strictement les règles de modestie religieuse avec horaires dédiés pour chaque genre. Offre un environnement adapté aux familles observantes tout en maintenant des installations modernes et propres.",
    images: [
      "/images/mediterranean-beaches/nordau-beach-2.jpg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0895,
      longitude: 34.7695,
      address: "Nordau Beach, Tel Aviv North"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Horaires séparés : Femmes (Dim, Mar, Jeu), Hommes (Lun, Mer, Ven), Mixte (Samedi - Shabbat)"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 4,
      description: "Eau propre avec surveillance régulière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, adapté aux familles et enfants"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking public à proximité",
      publicTransport: "Bien desservi par les bus"
    },
    bestTimeToVisit: "Selon votre genre et les horaires d'ouverture séparés",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Quartier religieux de Tel Aviv",
      "Namal Tel Aviv (Port)",
      "Hayarkon Park"
    ]
  },
  {
    id: 10,
    name: "Hof HaCarmel Beach",
    hebrewName: "חוף הכרמל",
    description: "Cette longue plage située à Haïfa offre une vue spectaculaire sur le mont Carmel. Moins touristique que les plages de Tel Aviv, elle permet de découvrir un autre aspect du littoral israélien dans un cadre magnifique et plus local.",
    images: [
      "/images/mediterranean-beaches/hof-hacarmel-beach-1.jpg",
      "/images/mediterranean-beaches/hof-hacarmel-beach-2.jpg",
      "/images/mediterranean-beaches/hof-hacarmel-beach-3.jpg"
    ],
    location: {
      city: "Haïfa",
      latitude: 32.8306,
      longitude: 34.9553,
      address: "Hof HaCarmel Beach, Haïfa"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 4,
      description: "Eau propre avec surveillance régulière de la qualité"
    },
    sand: {
      type: "Sable fin mélangé à du gravier par endroits",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables selon les saisons, meilleur en automne et en hiver"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit disponible",
      publicTransport: "Bien desservi par le réseau de bus de Haïfa"
    },
    bestTimeToVisit: "Printemps et automne pour un climat idéal et moins de monde",
    type: [BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Mont Carmel",
      "Jardins Bahaïs",
      "Quartier allemand de Haïfa"
    ]
  },
  {
    id: 11,
    name: "Ashkelon National Park Beach",
    hebrewName: "חוף פארק לאומי אשקלון",
    description: "Située dans un parc national, cette plage combine beauté naturelle et richesse historique. Les ruines antiques à proximité ajoutent un intérêt culturel à cette magnifique étendue de sable, tandis que les infrastructures modernes assurent confort et sécurité aux visiteurs.",
    images: [
      "/images/mediterranean-beaches/ashkelon-beach-1.jpg",
      "/images/mediterranean-beaches/ashkelon-beach-2.jpg",
      "/images/mediterranean-beaches/ashkelon-beach-3.jpg"
    ],
    location: {
      city: "Ashkelon",
      latitude: 31.6691,
      longitude: 34.5574,
      address: "Ashkelon National Park, Ashkelon"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires du parc national, dernière entrée 1 heure avant la fermeture"
    },
    entranceFee: "22 NIS pour adultes, 10 NIS pour enfants (entrée au parc national)",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, plage régulièrement récompensée pour sa propreté"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu grâce au statut de parc national"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, meilleur en hiver pour les surfeurs expérimentés"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Accessible en bus depuis Ashkelon"
    },
    bestTimeToVisit: "Printemps et automne pour combiner baignade et visite du site archéologique",
    type: [BeachType.NATURE, BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Ruines archéologiques d'Ashkelon",
      "Port antique",
      "Musée d'Ashkelon"
    ]
  },
  {
    id: 12,
    name: "Bat Yam Beach",
    hebrewName: "חוף בת ים",
    description: "Les plages de Bat Yam offrent une alternative plus calme à celles de Tel Aviv tout en étant facilement accessibles. Elles sont particulièrement appréciées des familles et des locaux. La promenade récemment rénovée ajoute au charme de ce littoral en plein développement.",
    images: [
      "/images/mediterranean-beaches/bat-yam-beach-1.jpg",
      "/images/mediterranean-beaches/bat-yam-beach-2.jpg",
      "/images/mediterranean-beaches/bat-yam-beach-3.jpg"
    ],
    location: {
      city: "Bat Yam",
      latitude: 32.0233,
      longitude: 34.7361,
      address: "Bat Yam Beach, Promenade de Bat Yam"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PLAYGROUND
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, surveillance régulière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Conditions calmes, idéal pour les familles avec enfants"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking public gratuit à proximité",
      publicTransport: "Excellent réseau de bus depuis Tel Aviv"
    },
    bestTimeToVisit: "Toute l'année, moins de monde en semaine",
    type: [BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Promenade de Bat Yam",
      "Musée Ryback",
      "Centre commercial"
    ]
  },
  {
    id: 13,
    name: "Dado Beach",
    hebrewName: "חוף דדו",
    description: "La plage Dado est la plage principale de Haïfa, très populaire auprès des locaux et des touristes. Récemment rénovée, elle offre d'excellentes infrastructures et une longue promenade le long de la mer. C'est un lieu parfait pour les familles avec ses aires de jeux et ses espaces verts adjacents.",
    images: [],
    location: {
      city: "Haïfa",
      latitude: 32.8156,
      longitude: 34.9803,
      address: "Dado Beach, Haïfa"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance d'avril à octobre"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PLAYGROUND,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, régulièrement primée Pavillon Bleu"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu avec nettoyage quotidien"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, idéal pour les débutants et les familles"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking gratuit",
      publicTransport: "Très bien desservi par le réseau de bus de Haïfa"
    },
    bestTimeToVisit: "Printemps et automne pour un climat agréable",
    type: [BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Promenade Louis",
      "Quartier allemand",
      "Jardins Bahaïs"
    ]
  },
  {
    id: 14,
    name: "Netanya Beach",
    hebrewName: "חוף נתניה",
    description: "Netanya, surnommée la 'Capitale israélienne de la Méditerranée', possède une magnifique plage de 13 km. La plage principale de la ville offre une vue spectaculaire depuis les falaises, accessibles par un ascenseur panoramique. C'est un haut lieu du parapente en Israël.",
    images: [],
    location: {
      city: "Netanya",
      latitude: 32.3317,
      longitude: 34.8516,
      address: "Netanya Beach, Promenade de Netanya"
    },
    hours: {
      opening: "06:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre. Certaines sections surveillées toute l'année."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.VOLLEYBALL,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau avec surveillance régulière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions, spot populaire pour le surf et le kitesurf"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Plusieurs parkings publics disponibles",
      publicTransport: "Gare ferroviaire à proximité et nombreuses lignes de bus"
    },
    bestTimeToVisit: "Printemps et automne. Couchers de soleil spectaculaires toute l'année.",
    type: [BeachType.CITY, BeachType.SPORTS],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Place de l'Indépendance",
      "Falaises de Netanya",
      "Parapente depuis les falaises"
    ]
  },
  {
    id: 15,
    name: "Caesarea Beach",
    hebrewName: "חוף קיסריה",
    description: "Située près des impressionnantes ruines romaines de Césarée, cette plage combine histoire et beauté naturelle. L'aqueduc romain visible depuis la plage crée un cadre unique. C'est l'une des plages les plus pittoresques d'Israël avec son mélange d'antiquités et de paysages maritimes.",
    images: [],
    location: {
      city: "Caesarea",
      latitude: 32.5066,
      longitude: 34.8925,
      address: "Caesarea Beach, près du Parc National de Césarée"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires variables selon la saison. Dernière entrée 1h avant la fermeture."
    },
    entranceFee: "Combiné avec l'entrée au parc national (adultes 39 NIS, enfants 25 NIS) ou gratuit selon la section",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 5,
      description: "Eau cristalline, excellente qualité"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu, zone protégée"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, parfait pour la natation et la plongée avec tuba"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking disponible (payant)",
      publicTransport: "Accessible en train (gare de Césarée-Pardes Hanna) puis bus"
    },
    bestTimeToVisit: "Printemps et automne pour combiner visite du site archéologique et baignade",
    type: [BeachType.NATURE, BeachType.FAMILY],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Parc National de Césarée",
      "Aqueduc romain",
      "Théâtre antique",
      "Port de Césarée"
    ]
  },
  {
    id: 16,
    name: "Dor Beach (Habonim-Dor)",
    hebrewName: "חוף דור",
    description: "Située dans la réserve naturelle de Dor-Habonim, cette magnifique plage est l'une des plus belles du nord d'Israël. Elle offre une combinaison rare de plage de sable, de piscines naturelles rocheuses et de lagons. La richesse de la vie marine en fait un paradis pour la plongée avec tuba.",
    images: [],
    location: {
      city: "Dor",
      latitude: 32.6194,
      longitude: 34.9169,
      address: "Dor Beach, Réserve Naturelle Dor-Habonim"
    },
    hours: {
      opening: "08:00",
      closing: "17:00",
      notes: "Horaires de la réserve naturelle. Dernière entrée 1h avant la fermeture."
    },
    entranceFee: "22 NIS pour adultes, 10 NIS pour enfants (entrée à la réserve naturelle)",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.PARKING,
      BeachFacility.FIRST_AID
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, zone protégée avec vie marine abondante"
    },
    sand: {
      type: "Sable fin avec zones rocheuses et piscines naturelles",
      color: "Doré",
      quality: "Naturel et préservé"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, excellent pour la plongée avec tuba et l'exploration des lagons"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking disponible (inclus dans le prix d'entrée)",
      publicTransport: "Limité, voiture recommandée"
    },
    bestTimeToVisit: "Mai à septembre pour profiter des piscines naturelles, éviter les week-ends d'été",
    type: [BeachType.NATURE],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Modérément fréquenté"
    },
    nearbyAttractions: [
      "Réserve naturelle de Dor-Habonim",
      "Site archéologique de Tel Dor",
      "Kibbutz Dor",
      "Piscines naturelles rocheuses"
    ]
  },
  {
    id: 17,
    name: "Atlit Beach",
    hebrewName: "חוף עתלית",
    description: "Plage pittoresque située près du village d'Atlit, connue pour sa proximité avec les grottes préhistoriques d'Atlit et le château des Croisés. Cette plage moins fréquentée offre une atmosphère tranquille et une eau claire. La zone combine intérêt historique et beauté naturelle.",
    images: [],
    location: {
      city: "Atlit",
      latitude: 32.6931,
      longitude: 34.9394,
      address: "Atlit Beach, Atlit"
    },
    hours: {
      opening: "Accès libre 24h/24",
      closing: "Accès libre 24h/24",
      notes: "Surveillance saisonnière de juin à septembre, 9h-17h"
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.LIFEGUARD,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, claire et propre"
    },
    sand: {
      type: "Sable fin mélangé à des zones rocheuses",
      color: "Doré",
      quality: "Naturel, bien préservé"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, parfois bonnes pour le surf, excellent pour le bodyboard"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking libre disponible",
      publicTransport: "Limité, voiture recommandée. Accessible en train (gare d'Atlit)"
    },
    bestTimeToVisit: "Printemps et automne, en semaine pour éviter la foule",
    type: [BeachType.NATURE],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Peu à modérément fréquenté"
    },
    nearbyAttractions: [
      "Grottes préhistoriques d'Atlit (Yam Cave)",
      "Château des Croisés d'Atlit",
      "Camp de détention d'Atlit (musée)",
      "Réserve naturelle de Nahal Me'arot"
    ]
  },
  {
    id: 18,
    name: "Beit Yanai Beach",
    hebrewName: "חוף בית ינאי",
    description: "Plage familiale populaire située à l'embouchure de la rivière Alexander. Elle offre une combinaison unique de plage maritime et de réserve naturelle fluviale. Très appréciée des familles israéliennes pour ses installations complètes et son atmosphère détendue.",
    images: [],
    location: {
      city: "Beit Yanai",
      latitude: 32.3044,
      longitude: 34.8631,
      address: "Beit Yanai Beach, Route 2"
    },
    hours: {
      opening: "07:00",
      closing: "19:00",
      notes: "Surveillance de mai à octobre"
    },
    entranceFee: "Parking payant (environ 30 NIS), plage gratuite",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.PLAYGROUND,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, peut varier près de l'embouchure de la rivière"
    },
    sand: {
      type: "Sable fin",
      color: "Doré",
      quality: "Bien entretenu"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Bonnes conditions pour débutants et intermédiaires"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Grand parking (payant)",
      publicTransport: "Bus depuis Netanya et autres villes de la région"
    },
    bestTimeToVisit: "Printemps et début d'été, éviter les week-ends d'été très fréquentés",
    type: [BeachType.FAMILY, BeachType.NATURE],
    crowdLevel: {
      lowSeason: "Peu fréquenté",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Embouchure du fleuve Alexander",
      "Réserve naturelle Alexander Stream",
      "Observation d'oiseaux migrateurs",
      "Sentiers de randonnée"
    ]
  },
  {
    id: 19,
    name: "Zikim Beach",
    hebrewName: "חוף זיקים",
    description: "Située au sud d'Ashkelon, près de la frontière de Gaza, cette plage offre un cadre naturel et sauvage. Moins développée que d'autres plages, elle attire ceux qui recherchent la tranquillité et l'authenticité. La réserve naturelle adjacente abrite une riche faune et flore.",
    images: [],
    location: {
      city: "Zikim",
      latitude: 31.6167,
      longitude: 34.5044,
      address: "Zikim Beach, près du Kibbutz Zikim"
    },
    hours: {
      opening: "Accès libre",
      closing: "Accès libre",
      notes: "Surveillance saisonnière limitée. Vérifier les conditions de sécurité locales."
    },
    entranceFee: "Gratuit",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 4,
      description: "Bonne qualité d'eau, environnement naturel préservé"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Naturel, moins entretenu que les plages urbaines"
    },
    waves: {
      size: WaveSize.MEDIUM,
      surfingConditions: "Variables, parfois excellentes pour le surf"
    },
    accessibility: {
      wheelchairAccess: false,
      parking: "Parking non aménagé disponible",
      publicTransport: "Très limité, voiture fortement recommandée"
    },
    bestTimeToVisit: "Printemps et automne, en semaine pour plus de tranquillité",
    type: [BeachType.NATURE],
    crowdLevel: {
      lowSeason: "Très peu fréquenté",
      highSeason: "Peu fréquenté"
    },
    nearbyAttractions: [
      "Kibbutz Zikim",
      "Réserve naturelle de Zikim",
      "Observation de la faune locale"
    ]
  },
  {
    id: 20,
    name: "Acadia Beach",
    hebrewName: "חוף אקדיה",
    description: "Plage sophistiquée de Herzliya, située dans le quartier chic de la marina. Elle offre une ambiance plus exclusive avec des clubs de plage haut de gamme. Populaire auprès des jeunes professionnels et des touristes en quête d'une expérience balnéaire premium avec restaurants et bars tendance.",
    images: [],
    location: {
      city: "Herzliya",
      latitude: 32.1650,
      longitude: 34.7989,
      address: "Acadia Beach, Herzliya Pituach"
    },
    hours: {
      opening: "07:00",
      closing: "20:00",
      notes: "Surveillance d'avril à octobre. Clubs de plage ouverts plus tard."
    },
    entranceFee: "Gratuit pour la plage, clubs de plage avec consommation minimum",
    facilities: [
      BeachFacility.SHOWERS,
      BeachFacility.CHANGING_ROOMS,
      BeachFacility.RESTAURANT,
      BeachFacility.LIFEGUARD,
      BeachFacility.KIOSK,
      BeachFacility.UMBRELLAS,
      BeachFacility.CHAIRS,
      BeachFacility.WATER_SPORTS,
      BeachFacility.PARKING
    ],
    waterQuality: {
      rating: 5,
      description: "Excellente qualité d'eau, très bien entretenue"
    },
    sand: {
      type: "Sable fin",
      color: "Doré clair",
      quality: "Très bien entretenu, nettoyage quotidien"
    },
    waves: {
      size: WaveSize.SMALL,
      surfingConditions: "Calme, parfait pour la natation et les sports nautiques"
    },
    accessibility: {
      wheelchairAccess: true,
      parking: "Parking payant disponible",
      publicTransport: "Bus depuis Tel Aviv, proche de la gare de Herzliya"
    },
    bestTimeToVisit: "Printemps et été, atmosphère festive en soirée",
    type: [BeachType.CITY],
    crowdLevel: {
      lowSeason: "Modéré",
      highSeason: "Très fréquenté"
    },
    nearbyAttractions: [
      "Marina de Herzliya",
      "Restaurants et bars de la marina",
      "Quartier Herzliya Pituach",
      "Arena Mall"
    ]
  }
];

interface ReligiousBeach {
  id: number
  name: string
  hebrewName: string
  description: string
  images: string[]
  location: {
    city: string
    latitude: number
    longitude: number
    address: string
  }
  separationSchedule: {
    men: string
    women: string
    notes: string
  }
  specialFacilities: string[]
  specialRules: string[]
}

export const mediterraneanReligiousBeaches: ReligiousBeach[] = [
  {
    id: 101,
    name: "Nordau Beach (Hof Hadatiyim)",
    hebrewName: "חוף נורדאו (חוף הדתיים)",
    description: "Unique plage religieuse de Tel Aviv avec baignade séparée hommes/femmes. Respecte strictement les règles de modestie religieuse avec horaires dédiés pour chaque genre. Offre un environnement adapté aux familles observantes tout en maintenant des installations modernes et propres.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-3601425.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-1001435.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-14576497.jpeg"
    ],
    location: {
      city: "Tel Aviv",
      latitude: 32.0895,
      longitude: 34.7695,
      address: "Nordau Beach, Tel Aviv North"
    },
    separationSchedule: {
      men: "Lundi, Mercredi, Vendredi : toute la journée",
      women: "Dimanche, Mardi, Jeudi : toute la journée",
      notes: "Mixte le samedi (Shabbat). Horaires variables selon les saisons et les fêtes religieuses. Vérifier avant votre visite."
    },
    specialFacilities: [
      "Douches séparées pour hommes et femmes",
      "Vestiaires adaptés",
      "Zones d'ombre",
      "Surveillance spécifique",
      "Toilettes séparées",
      "Coin ombragé"
    ],
    specialRules: [
      "Respect strict des horaires de séparation hommes/femmes",
      "Tenue de bain modeste obligatoire",
      "Environnement calme et respectueux",
      "Pas de photographie pendant les heures séparées",
      "Observation du Shabbat dans toutes les installations"
    ]
  },
  {
    id: 102,
    name: "Kiryat Sanz Beach",
    hebrewName: "חוף קרית סאנז",
    description: "Plage religieuse séparée située à Netanya, offrant un environnement familial et respectueux des traditions. Cette plage est spécialement conçue pour les visiteurs religieux avec des installations adaptées et une stricte séparation entre hommes et femmes à des jours désignés.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-4728606.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-12628888.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-3889843.jpeg"
    ],
    location: {
      city: "Netanya",
      latitude: 32.3317,
      longitude: 34.8516,
      address: "Kiryat Sanz Beach, Netanya"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 08:00-18:00",
      women: "Lundi, Mercredi : 08:00-18:00 / Vendredi : 08:00-14:00",
      notes: "Fermé pendant Shabbat. Horaires spéciaux pendant les fêtes religieuses. Vérifier les horaires avant votre visite sur gonetanya.com"
    },
    specialFacilities: [
      "Douches séparées",
      "Vestiaires adaptés pour hommes et femmes",
      "Zones complètement séparées visuellement",
      "Aires de repos ombragées",
      "Personnel adapté selon les horaires",
      "Surveillance dédiée"
    ],
    specialRules: [
      "Respect strict des horaires de séparation",
      "Code vestimentaire modeste obligatoire",
      "Pas de musique forte",
      "Environnement familial",
      "Pas de photographie dans les zones séparées"
    ]
  },
  {
    id: 103,
    name: "Bat Yam Separate Beach",
    hebrewName: "חוף נפרד בת ים",
    description: "La plage séparée de Bat Yam offre un environnement familial et respectueux des traditions religieuses. Facilement accessible depuis Tel Aviv, elle propose des installations adaptées et un espace bien organisé pour les visiteurs observants.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-3601454.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-1001435.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-4728618.jpeg"
    ],
    location: {
      city: "Bat Yam",
      latitude: 32.0233,
      longitude: 34.7361,
      address: "Plage Nord, Bat Yam"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 07:00-13:00 / Lundi, Mercredi : 14:00-19:00 / Vendredi : 07:00-12:00",
      women: "Dimanche, Mardi, Jeudi : 14:00-19:00 / Lundi, Mercredi : 07:00-13:00 / Vendredi : 12:00-16:00",
      notes: "Fermé pendant Shabbat. Horaires spéciaux pendant les fêtes religieuses."
    },
    specialFacilities: [
      "Zones complètement séparées",
      "Vestiaires familiaux",
      "Douches séparées",
      "Espaces ombragés",
      "Aires de repos",
      "Zones dédiées pour enfants"
    ],
    specialRules: [
      "Respect des horaires de séparation",
      "Environnement familial",
      "Zones dédiées pour enfants",
      "Tenue modeste obligatoire"
    ]
  },
  {
    id: 104,
    name: "Hof HaMizrahi (Rishon LeZion)",
    hebrewName: "חוף המזרחי ראשון לציון",
    description: "Située à Rishon LeZion, cette plage séparée offre d'excellentes installations et une organisation exemplaire. Elle est particulièrement appréciée des familles religieuses qui recherchent un environnement adapté à leurs besoins.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-1667004.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-5490381.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-14576495.jpeg"
    ],
    location: {
      city: "Rishon LeZion",
      latitude: 31.9765,
      longitude: 34.7898,
      address: "Plage Est, Rishon LeZion"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 07:30-14:00 / Lundi, Mercredi : 15:00-19:00 / Vendredi : 07:30-13:00",
      women: "Dimanche, Mardi, Jeudi : 15:00-19:00 / Lundi, Mercredi : 07:30-14:00 / Vendredi : 13:00-16:00",
      notes: "Fermé pendant Shabbat et jours fériés religieux."
    },
    specialFacilities: [
      "Barrières complètes entre sections",
      "Vestiaires adaptés",
      "Zones ombragées",
      "Aire de jeux pour enfants",
      "Kiosque avec produits cachères",
      "Personnel exclusivement du même sexe selon l'horaire"
    ],
    specialRules: [
      "Horaires stricts à respecter",
      "Zones familiales disponibles",
      "Activités pour enfants organisées en été",
      "Interdiction stricte de traverser vers la section du sexe opposé",
      "Codes vestimentaires stricts"
    ]
  },
  {
    id: 105,
    name: "Herzliya Separate Beach",
    hebrewName: "חוף נפרד הרצליה",
    description: "La plage séparée de Herzliya offre un cadre élégant et bien entretenu pour les visiteurs religieux. Située dans un environnement prisé, elle permet de profiter des eaux méditerranéennes dans le respect des traditions religieuses.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-10559912.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-3889843.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-12628888.jpeg"
    ],
    location: {
      city: "Herzliya",
      latitude: 32.1749,
      longitude: 34.7961,
      address: "Plage Nord, Herzliya"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 08:00-14:00 / Lundi, Mercredi : 15:00-20:00 / Vendredi : 08:00-12:00",
      women: "Dimanche, Mardi, Jeudi : 15:00-20:00 / Lundi, Mercredi : 08:00-14:00 / Vendredi : 12:00-16:00",
      notes: "Fermé pendant Shabbat. Consultez les panneaux d'affichage pour les modifications saisonnières."
    },
    specialFacilities: [
      "Sections complètement séparées",
      "Personnel adapté selon les horaires",
      "Installations sanitaires privées",
      "Boutique d'articles de plage conformes",
      "Zone de repos ombragée",
      "Douches séparées"
    ],
    specialRules: [
      "Pas de mélange entre sections hommes et femmes",
      "Photographie limitée aux zones communes",
      "Alimentation cachère uniquement",
      "Pas d'appareils électroniques pendant Shabbat",
      "Tenue modeste exigée"
    ]
  },
  {
    id: 106,
    name: "Ashdod Separate Beach",
    hebrewName: "חוף נפרד אשדוד",
    description: "La plage séparée d'Ashdod est l'une des mieux aménagées du pays pour les visiteurs religieux. Avec ses installations modernes et son atmosphère familiale, elle offre une expérience balnéaire respectueuse des traditions religieuses dans un cadre agréable.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-1667004.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-5490381.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-14576495.jpeg"
    ],
    location: {
      city: "Ashdod",
      latitude: 31.8133,
      longitude: 34.6505,
      address: "Promenade d'Ashdod, Ashdod"
    },
    separationSchedule: {
      men: "Dimanche, Mardi, Jeudi : 08:00-14:00 / Lundi, Mercredi : 15:00-20:00 / Vendredi : 08:00-13:00",
      women: "Dimanche, Mardi, Jeudi : 15:00-20:00 / Lundi, Mercredi : 08:00-14:00 / Vendredi : 13:00-16:00",
      notes: "Fermé pendant Shabbat. Consultez le calendrier municipal pour les changements pendant les fêtes."
    },
    specialFacilities: [
      "Entrées distinctes avec personnel dédié",
      "Vestiaires et douches privatives",
      "Zones ombragées séparées",
      "Aires de jeux pour enfants",
      "Cafétéria cachère",
      "Surveillance dédiée"
    ],
    specialRules: [
      "Pas d'appareils électroniques pendant Shabbat",
      "Respect strict des codes vestimentaires",
      "Séparation complète selon les horaires indiqués",
      "Nourriture exclusivement cachère dans l'enceinte",
      "Maillots couvrants obligatoires"
    ]
  },
  {
    id: 107,
    name: "Hof HaDataim (Haifa)",
    hebrewName: "חוף הדתיים חיפה",
    description: "Située à Haïfa, cette plage séparée offre un environnement respectueux des traditions religieuses tout en permettant de profiter des eaux de la Méditerranée. Elle est particulièrement appréciée par les familles religieuses du nord d'Israël.",
    images: [
      "/images/mediterranean-beaches/religious/religious-beach-3601454.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-4728606.jpeg",
      "/images/mediterranean-beaches/religious/religious-beach-4728618.jpeg"
    ],
    location: {
      city: "Haïfa",
      latitude: 32.8256,
      longitude: 34.9553,
      address: "Bat Galim, Haïfa"
    },
    separationSchedule: {
      men: "Dimanche, Mercredi : 07:00-13:00 / Mardi, Jeudi : 14:00-19:00 / Vendredi : 07:00-13:00",
      women: "Dimanche, Mercredi : 14:00-19:00 / Mardi, Jeudi : 07:00-13:00 / Vendredi : 13:00-16:00",
      notes: "Fermé pendant Shabbat et certaines fêtes religieuses. En été, les horaires peuvent être étendus."
    },
    specialFacilities: [
      "Zones complètement séparées visuellement",
      "Vestiaires privés",
      "Douches séparées",
      "Aires familiales disponibles certains jours spécifiques",
      "Parasols et chaises adaptés",
      "Personnel exclusivement du même sexe selon horaire"
    ],
    specialRules: [
      "Respect strict des horaires de séparation",
      "Environnement calme et respectueux",
      "Interdiction de nourriture non cachère",
      "Observation du Shabbat dans toutes les installations",
      "Tenue modeste obligatoire conformément aux exigences religieuses"
    ]
  }
]

interface TransportOption {
  type: string
  details: string
  price: string
  frequency: string
}

interface Transportation {
  toCity: string
  options: TransportOption[]
}

export const transportation: Transportation[] = []

interface Tip {
  id: number
  title: string
  description: string
}

export const safetyTips: Tip[] = [
  {
    id: 1,
    title: "Respecter les drapeaux de sécurité",
    description: "Toujours observer les drapeaux de sécurité avant d'entrer dans l'eau. Drapeau rouge = baignade interdite, jaune = prudence, vert = conditions sûres."
  },
  {
    id: 2,
    title: "Surveiller les courants",
    description: "La Méditerranée peut avoir des courants forts, surtout après les tempêtes. Restez dans les zones surveillées et ne nagez pas trop loin du rivage."
  },
  {
    id: 3,
    title: "Protection solaire",
    description: "Le soleil méditerranéen est intense. Appliquez une crème solaire à indice élevé (SPF 50+) toutes les 2 heures et après chaque baignade."
  },
  {
    id: 4,
    title: "Hydratation",
    description: "Buvez beaucoup d'eau, surtout en été lorsque les températures peuvent dépasser 35°C. La déshydratation arrive rapidement au soleil."
  },
  {
    id: 5,
    title: "Méduses",
    description: "Certaines périodes de l'année peuvent voir une présence accrue de méduses. Renseignez-vous auprès des sauveteurs et évitez les zones signalées."
  },
  {
    id: 6,
    title: "Heures de surveillance",
    description: "La plupart des plages sont surveillées de mai à octobre, généralement de 7h à 19h. En dehors de ces horaires, la baignade se fait à vos risques et périls."
  }
]

export const practicalTips: Tip[] = [
  {
    id: 1,
    title: "Arrivez tôt",
    description: "Pour éviter la foule et profiter des meilleures places, arrivez avant 10h, surtout en été et le week-end."
  },
  {
    id: 2,
    title: "Apportez de l'ombre",
    description: "Un parasol ou une tente de plage sont essentiels, car l'ombre naturelle est rare sur les plages urbaines."
  },
  {
    id: 3,
    title: "Chaussures d'eau",
    description: "Certaines plages ont des zones rocheuses ou des galets. Des chaussures d'eau peuvent rendre votre baignade plus confortable."
  },
  {
    id: 4,
    title: "Argent liquide",
    description: "Bien que de nombreux établissements acceptent les cartes, ayez toujours de l'argent liquide pour les kiosques de plage et les services."
  },
  {
    id: 5,
    title: "Transports en commun",
    description: "Le stationnement peut être difficile et coûteux. Utilisez les bus ou les vélos en libre-service pour accéder aux plages."
  },
  {
    id: 6,
    title: "Respectez l'environnement",
    description: "Emportez vos déchets avec vous. De nombreuses plages ont des poubelles de tri sélectif - utilisez-les."
  }
]
