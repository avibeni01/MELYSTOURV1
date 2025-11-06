// Script pour migrer les pages d'hôtels vers le composant HotelCard avec images
const fs = require('fs');
const path = require('path');

// Données des hôtels (nom, slug, ville, rating, prix, localisation, features, tags)
const hotelsData = {
  'tel-aviv': {
    luxe: [
      { name: 'The Jaffa, a Luxury Collection Hotel', slug: 'the-jaffa', rating: '4.5/5', price: '450€', location: 'Old Jaffa (Vieux Jaffa)', features: ['Architecture historique (ancien couvent francais 1865)', 'Vue mer Mediterranee depuis rooftop, piscine panoramique', '2 restaurants gastronomiques, spa de luxe'], tags: ['Wifi gratuit', 'Piscine', 'Spa', 'Restaurant', 'Parking'] },
      { name: 'The Norman Tel Aviv', slug: 'the-norman', rating: '4.5/5', price: '420€', location: 'Boulevard Rothschild', features: ['2 batiments Bauhaus restaures, architecture classee UNESCO', 'Rooftop piscine, bibliotheque, service majordome', 'Restaurant gastronomique, bar a cocktails'], tags: ['Wifi gratuit', 'Piscine rooftop', 'Spa', 'Restaurant'] },
      { name: 'David Intercontinental Tel Aviv', slug: 'david-intercontinental', rating: '4.5/5', price: '380€', location: 'Front de mer (promenade Herbert Samuel)', features: ['Acces direct plage, vue mer panoramique', 'Piscine exterieure, spa, fitness 24/7', '3 restaurants, business center, salles conference'], tags: ['Plage privee', 'Piscine', 'Spa', 'Restaurants'] },
      { name: 'Setai Tel Aviv', slug: 'setai', rating: '4.5/5', price: '480€', location: 'Jaffa (Vieux Port)', features: ['Design ultra-moderne, chambres spacieuses vue mer', 'Spa haut de gamme, piscine chauffee rooftop', 'Restaurant fusion asiatique-mediterraneen'], tags: ['Design', 'Spa', 'Piscine rooftop', 'Vue mer'] }
    ],
    boutique: [
      { name: '65 Hotel Rothschild', slug: '65-hotel', rating: '4.0/5', price: '220€', location: 'Boulevard Rothschild', features: ['Boutique hotel design, decoration contemporaine', 'Rooftop bar panoramique, terrasse soleil', 'Proche Carmel Market, quartier Neve Tzedek'], tags: ['Design', 'Rooftop bar', 'Centre-ville'] },
      { name: 'Brown TLV Urban Hotel', slug: 'brown-tlv', rating: '4.5/5', price: '240€', location: 'Quartier Rothschild', features: ['Style industrial-chic, loft spacieux', 'Piscine exterieure, bar tendance', 'Petit-dejeuner buffet inclus'], tags: ['Design', 'Piscine', 'Petit-dej inclus'] },
      { name: 'Lighthouse Tel Aviv', slug: 'lighthouse', rating: '4.0/5', price: '280€', location: 'Front de mer (face plage Hilton)', features: ['Face mer, chambres avec balcon vue panoramique', 'Rooftop piscine, bar lounge sunset', 'Acces direct plage (2min marche)'], tags: ['Vue mer', 'Rooftop', 'Plage'] },
      { name: 'Alma Hotel & Lounge', slug: 'alma', rating: '4.5/5', price: '260€', location: 'Quartier Neve Tzedek', features: ['Boutique hotel intimiste (17 chambres seulement)', 'Design raffine, service personnalise', 'Bar-lounge cosy, petit-dejeuner kasher'], tags: ['Boutique', 'Intimiste', 'Kasher'] },
      { name: 'Cinema Hotel Tel Aviv', slug: 'cinema', rating: '4.0/5', price: '210€', location: 'Quartier Dizengoff', features: ['Theme cinema, decoration vintage annees 30', 'Proximite Dizengoff Center, place Dizengoff', 'Chambres confortables, bon rapport qualite-prix'], tags: ['Theme', 'Shopping', 'Centre-ville'] },
      { name: 'Market House Hotel', slug: 'market-house', rating: '4.0/5', price: '230€', location: 'Carmel Market', features: ['Au coeur Carmel Market (marche anime)', 'Chambres modernes, decor industriel', 'Acces facile plages, vie nocturne'], tags: ['Marche', 'Moderne', 'Central'] }
    ],
    standard: [
      { name: 'Dan Tel Aviv Hotel', slug: 'dan-tel-aviv', rating: '4.0/5', price: '180€', location: 'Front de mer (plage Gordon)', features: ['Grande chaine israelienne, service fiable', 'Acces direct plage Gordon, vue mer', 'Piscine, salle fitness, restaurants kasher'], tags: ['Plage', 'Kasher', 'Piscine'] },
      { name: 'Carlton Tel Aviv', slug: 'carlton', rating: '4.0/5', price: '190€', location: 'Front de mer (plage Frishman)', features: ['Hotel classique face mer, chambres renovees', 'Piscine exterieure, terrasse vue mer', 'Proche tayelet (promenade pieton)'], tags: ['Mer', 'Piscine', 'Promenade'] },
      { name: 'Melody Hotel Tel Aviv', slug: 'melody', rating: '3.5/5', price: '130€', location: 'Quartier Dizengoff', features: ['Hotel economique, chambres simples propres', 'Petit-dejeuner buffet inclus', 'Bien situe shopping Dizengoff, transports'], tags: ['Budget', 'Petit-dej', 'Shopping'] },
      { name: 'Port Hotel Tel Aviv', slug: 'port-hotel', rating: '3.5/5', price: '150€', location: 'Vieux Port (Namal)', features: ['Proche Vieux Port (bars/restaurants animes)', 'Chambres modernes, wifi gratuit', 'Bon rapport qualite-prix, quartier vivant'], tags: ['Port', 'Vivant', 'Budget'] }
    ]
  }
};

// Fonction pour générer le JSX du composant HotelCard
function generateHotelCardJSX(hotel, city) {
  return `                  <HotelCard
                    name="${hotel.name}"
                    slug="${hotel.slug}"
                    city="${city}"
                    rating="${hotel.rating}"
                    price="${hotel.price}"
                    location="${hotel.location}"
                    features={${JSON.stringify(hotel.features)}}
                    tags={${JSON.stringify(hotel.tags)}}
                    imageCount={3}
                  />`;
}

// Fonction pour lire le fichier Tel Aviv et ajouter l'import + remplacer les cartes
function migratetelAvivPage() {
  const filePath = path.join(__dirname, '..', 'src', 'app', 'hotels', 'tel-aviv', 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Ajouter l'import du composant HotelCard après les autres imports
  if (!content.includes("import HotelCard from '@/components/hotels/HotelCard'")) {
    content = content.replace(
      "import Breadcrumbs from '@/components/common/Breadcrumbs'",
      "import Breadcrumbs from '@/components/common/Breadcrumbs'\nimport HotelCard from '@/components/hotels/HotelCard'"
    );
  }

  // Générer les cartes pour chaque catégorie
  const luxeCards = hotelsData['tel-aviv'].luxe.map(h => generateHotelCardJSX(h, 'tel-aviv')).join('\n\n');
  const boutiqueCards = hotelsData['tel-aviv'].boutique.map(h => generateHotelCardJSX(h, 'tel-aviv')).join('\n\n');
  const standardCards = hotelsData['tel-aviv'].standard.map(h => generateHotelCardJSX(h, 'tel-aviv')).join('\n\n');

  // Remplacer la section Luxe 5*
  content = content.replace(
    /\{\/\* Luxe 5\* \*\/\}[\s\S]*?<div className="mb-12">[\s\S]*?<h3 className="text-2xl font-bold mb-6 flex items-center">[\s\S]*?Hotels de Luxe 5\*[\s\S]*?<\/h3>[\s\S]*?<div className="grid grid-cols-1 md:grid-cols-2 gap-6">[\s\S]*?(?=<\/div>\s*<\/div>\s*\{\/\* Boutique)/,
    `{/* Luxe 5* */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Star className="text-yellow-500 mr-3" size={28} />
                  Hotels de Luxe 5* (400-800€/nuit)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
${luxeCards}
                </div>
              </div>

              `
  );

  fs.writeFileSync(filePath, content);
  console.log('✓ Tel Aviv page migrated');
}

// Exécuter
try {
  migratetelAvivPage();
  console.log('\n=== Migration complète ===');
} catch (error) {
  console.error('Erreur:', error.message);
}
