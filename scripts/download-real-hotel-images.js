// Script pour télécharger les vraies images d'hôtels depuis TripAdvisor et Booking
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// URLs réelles des images des hôtels (à récupérer depuis TripAdvisor/Booking)
// Format: ville -> hotel -> [array d'URLs d'images]
const realHotelImages = {
  'tel-aviv': {
    'the-jaffa': [
      // URLs TripAdvisor The Jaffa Hotel
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/3d/the-jaffa-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/41/the-jaffa-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/45/the-jaffa-hotel.jpg'
    ],
    'the-norman': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9e/0a/8c/the-norman-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9e/0a/90/the-norman-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/9e/0a/94/the-norman-tel-aviv.jpg'
    ],
    'david-intercontinental': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/27/3f/5c/david-intercontinental.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/27/3f/60/david-intercontinental.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/27/3f/64/david-intercontinental.jpg'
    ],
    'setai': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/7a/3d/the-setai-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/7a/41/the-setai-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/8e/7a/45/the-setai-tel-aviv.jpg'
    ],
    '65-hotel': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4d/3e/8c/65-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4d/3e/90/65-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/4d/3e/94/65-hotel.jpg'
    ],
    'brown-tlv': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/2f/3c/brown-tlv-urban-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/2f/40/brown-tlv-urban-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1a/2f/44/brown-tlv-urban-hotel.jpg'
    ],
    'lighthouse': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/4e/3d/lighthouse-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/4e/41/lighthouse-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5c/4e/45/lighthouse-tel-aviv.jpg'
    ],
    'alma': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/2c/1d/3c/alma-hotel-lounge.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/2c/1d/40/alma-hotel-lounge.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/2c/1d/44/alma-hotel-lounge.jpg'
    ],
    'cinema': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/2a/3c/cinema-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/2a/40/cinema-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/8f/2a/44/cinema-hotel.jpg'
    ],
    'market-house': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7b/3c/3d/market-house-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7b/3c/41/market-house-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/7b/3c/45/market-house-hotel.jpg'
    ],
    'dan-tel-aviv': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4e/5f/3c/dan-tel-aviv-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4e/5f/40/dan-tel-aviv-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4e/5f/44/dan-tel-aviv-hotel.jpg'
    ],
    'carlton': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3a/4b/3c/carlton-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3a/4b/40/carlton-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/3a/4b/44/carlton-tel-aviv.jpg'
    ],
    'melody': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5d/2c/3c/melody-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5d/2c/40/melody-hotel.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/5d/2c/44/melody-hotel.jpg'
    ],
    'port-hotel': [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6a/3d/3c/port-hotel-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6a/3d/40/port-hotel-tel-aviv.jpg',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/6a/3d/44/port-hotel-tel-aviv.jpg'
    ]
  },
  // NOTE: Ajouter les autres villes (jerusalem, eilat, etc.) suivant le même format
  // Les URLs ci-dessus sont des exemples - il faudra les vraies URLs TripAdvisor
};

// Fonction pour télécharger une image avec gestion des redirects
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Referer': 'https://www.tripadvisor.com/'
      }
    }, (response) => {
      // Gérer les redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const file = fs.createWriteStream(filepath);
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });

      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    });

    request.on('error', (err) => {
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.abort();
      reject(new Error('Timeout'));
    });
  });
}

// Fonction principale
async function downloadRealHotelImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  let total = 0;
  let success = 0;
  let failed = 0;

  for (const [city, cityHotels] of Object.entries(realHotelImages)) {
    console.log(`\n📍 ${city.toUpperCase()}`);

    const cityDir = path.join(baseDir, city);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    for (const [hotelSlug, urls] of Object.entries(cityHotels)) {
      const hotelDir = path.join(cityDir, hotelSlug);
      if (!fs.existsSync(hotelDir)) {
        fs.mkdirSync(hotelDir, { recursive: true });
      }

      console.log(`  🏨 ${hotelSlug}`);

      for (let i = 0; i < urls.length; i++) {
        total++;
        const url = urls[i];
        const ext = path.extname(new URL(url).pathname) || '.jpg';
        const filename = `${i + 1}${ext}`;
        const filepath = path.join(hotelDir, filename);

        try {
          await downloadImage(url, filepath);
          console.log(`    ✓ ${filename}`);
          success++;

          // Délai pour éviter de surcharger le serveur
          await new Promise(resolve => setTimeout(resolve, 500));
        } catch (error) {
          console.error(`    ✗ ${filename}: ${error.message}`);
          failed++;
        }
      }
    }
  }

  console.log(`\n\n=== RÉSUMÉ ===`);
  console.log(`📊 Total: ${total} images`);
  console.log(`✅ Succès: ${success}`);
  console.log(`❌ Échecs: ${failed}`);
  console.log(`📁 Dossier: ${baseDir}`);
  console.log(`\n⚠️  NOTE: Les URLs TripAdvisor ci-dessus sont des exemples.`);
  console.log(`   Pour obtenir les vraies images, il faut:`);
  console.log(`   1. Aller sur TripAdvisor pour chaque hôtel`);
  console.log(`   2. Copier les URLs des photos principales`);
  console.log(`   3. Les mettre dans le script realHotelImages`);
}

// Exécuter
downloadRealHotelImages().catch(console.error);
