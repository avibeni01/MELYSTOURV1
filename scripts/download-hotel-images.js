// Script pour télécharger les images d'hôtels depuis leurs sites officiels
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Liste des hôtels avec leurs sites officiels
const hotels = {
  'tel-aviv': [
    { name: 'the-jaffa', urls: ['https://www.thejaffahotel.com/wp-content/uploads/2023/03/jaffa-hotel-exterior.jpg', 'https://www.thejaffahotel.com/wp-content/uploads/2023/03/jaffa-hotel-pool.jpg', 'https://www.thejaffahotel.com/wp-content/uploads/2023/03/jaffa-hotel-room.jpg'] },
    { name: 'the-norman', urls: ['https://www.thenorman.com/images/hotel/norman-facade.jpg', 'https://www.thenorman.com/images/hotel/norman-suite.jpg', 'https://www.thenorman.com/images/hotel/norman-rooftop.jpg'] },
    { name: 'david-intercontinental', urls: ['https://www.intercontinental.com/content/dam/iccl/images/hotels/telaviv/exterior-day.jpg', 'https://www.intercontinental.com/content/dam/iccl/images/hotels/telaviv/beach-view.jpg', 'https://www.intercontinental.com/content/dam/iccl/images/hotels/telaviv/pool.jpg'] },
    { name: 'setai', urls: ['https://www.setai.com/tel-aviv/images/exterior.jpg', 'https://www.setai.com/tel-aviv/images/lobby.jpg', 'https://www.setai.com/tel-aviv/images/suite.jpg'] },
    { name: '65-hotel', urls: ['https://www.65hotel.com/images/facade.jpg', 'https://www.65hotel.com/images/room.jpg', 'https://www.65hotel.com/images/rooftop.jpg'] },
    { name: 'brown-tlv', urls: ['https://www.browntlv.com/images/exterior.jpg', 'https://www.browntlv.com/images/lobby.jpg', 'https://www.browntlv.com/images/room.jpg'] },
    { name: 'lighthouse', urls: ['https://www.lighthousetlv.com/images/hotel-exterior.jpg', 'https://www.lighthousetlv.com/images/sea-view-room.jpg', 'https://www.lighthousetlv.com/images/rooftop-bar.jpg'] },
    { name: 'alma', urls: ['https://www.almahoteltlv.com/images/exterior.jpg', 'https://www.almahoteltlv.com/images/room.jpg', 'https://www.almahoteltlv.com/images/dining.jpg'] },
    { name: 'cinema', urls: ['https://www.atlas.co.il/cinema-hotel/images/exterior.jpg', 'https://www.atlas.co.il/cinema-hotel/images/room.jpg', 'https://www.atlas.co.il/cinema-hotel/images/lobby.jpg'] },
    { name: 'market-house', urls: ['https://www.atlas.co.il/market-house/images/facade.jpg', 'https://www.atlas.co.il/market-house/images/room.jpg', 'https://www.atlas.co.il/market-house/images/market.jpg'] },
    { name: 'dan-tel-aviv', urls: ['https://www.danhotels.com/content/dam/danhotels/tel-aviv/exterior.jpg', 'https://www.danhotels.com/content/dam/danhotels/tel-aviv/beach.jpg', 'https://www.danhotels.com/content/dam/danhotels/tel-aviv/pool.jpg'] },
    { name: 'carlton', urls: ['https://www.carlton.co.il/images/exterior-night.jpg', 'https://www.carlton.co.il/images/beach-view.jpg', 'https://www.carlton.co.il/images/pool.jpg'] },
    { name: 'melody', urls: ['https://www.atlas.co.il/melody-hotel/images/exterior.jpg', 'https://www.atlas.co.il/melody-hotel/images/room.jpg', 'https://www.atlas.co.il/melody-hotel/images/breakfast.jpg'] },
    { name: 'port-hotel', urls: ['https://www.porthoteltlv.com/images/exterior.jpg', 'https://www.porthoteltlv.com/images/room.jpg', 'https://www.porthoteltlv.com/images/port-view.jpg'] },
  ],
  'jerusalem': [
    { name: 'waldorf-astoria', urls: ['https://www.hilton.com/content/dam/waldorf/waldorfastoria/jerusalem/exterior.jpg', 'https://www.hilton.com/content/dam/waldorf/waldorfastoria/jerusalem/palace-suite.jpg', 'https://www.hilton.com/content/dam/waldorf/waldorfastoria/jerusalem/pool.jpg'] },
    { name: 'king-david', urls: ['https://www.danhotels.com/content/dam/danhotels/king-david/facade.jpg', 'https://www.danhotels.com/content/dam/danhotels/king-david/deluxe-room.jpg', 'https://www.danhotels.com/content/dam/danhotels/king-david/pool-garden.jpg'] },
    { name: 'mamilla', urls: ['https://www.mamilla-hotel.com/images/exterior-old-city.jpg', 'https://www.mamilla-hotel.com/images/deluxe-suite.jpg', 'https://www.mamilla-hotel.com/images/rooftop-terrace.jpg'] },
    { name: 'david-citadel', urls: ['https://www.thedavidcitadel.com/images/hotel-exterior.jpg', 'https://www.thedavidcitadel.com/images/executive-suite.jpg', 'https://www.thedavidcitadel.com/images/spa-pool.jpg'] },
    { name: 'inbal', urls: ['https://www.inbalhotel.com/images/facade.jpg', 'https://www.inbalhotel.com/images/room-old-city-view.jpg', 'https://www.inbalhotel.com/images/pool.jpg'] },
    { name: 'dan-panorama', urls: ['https://www.danhotels.com/content/dam/danhotels/dan-panorama-jerusalem/exterior.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-panorama-jerusalem/room.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-panorama-jerusalem/dining.jpg'] },
    { name: 'leonardo-plaza', urls: ['https://www.leonardo-hotels.com/images/leonardo-plaza-jerusalem/exterior.jpg', 'https://www.leonardo-hotels.com/images/leonardo-plaza-jerusalem/room.jpg', 'https://www.leonardo-hotels.com/images/leonardo-plaza-jerusalem/pool.jpg'] },
    { name: 'arthur', urls: ['https://www.arthurhotel.com/images/boutique-exterior.jpg', 'https://www.arthurhotel.com/images/deluxe-room.jpg', 'https://www.arthurhotel.com/images/wine-bar.jpg'] },
    { name: 'harmony', urls: ['https://www.atlas.co.il/harmony-hotel/images/exterior.jpg', 'https://www.atlas.co.il/harmony-hotel/images/room.jpg', 'https://www.atlas.co.il/harmony-hotel/images/breakfast-hall.jpg'] },
    { name: 'prima-kings', urls: ['https://www.prima.co.il/prima-kings/images/hotel-exterior.jpg', 'https://www.prima.co.il/prima-kings/images/standard-room.jpg', 'https://www.prima.co.il/prima-kings/images/dining-room.jpg'] },
    { name: 'prima-park', urls: ['https://www.prima.co.il/prima-park/images/facade.jpg', 'https://www.prima.co.il/prima-park/images/room.jpg', 'https://www.prima.co.il/prima-park/images/lobby.jpg'] },
    { name: 'american-colony', urls: ['https://www.americancolony.com/images/courtyard.jpg', 'https://www.americancolony.com/images/deluxe-room.jpg', 'https://www.americancolony.com/images/swimming-pool.jpg'] },
  ],
  'eilat': [
    { name: 'isrotel-royal-garden', urls: ['https://www.isrotel.com/images/royal-garden/tropical-gardens.jpg', 'https://www.isrotel.com/images/royal-garden/lagoon-pool.jpg', 'https://www.isrotel.com/images/royal-garden/suite.jpg'] },
    { name: 'herods-boutique', urls: ['https://www.fattal.co.il/images/herods-boutique/palace-exterior.jpg', 'https://www.fattal.co.il/images/herods-boutique/deluxe-suite.jpg', 'https://www.fattal.co.il/images/herods-boutique/spa.jpg'] },
    { name: 'orchid', urls: ['https://www.orchidhotel.co.il/images/thai-architecture.jpg', 'https://www.orchidhotel.co.il/images/lagoon-pool.jpg', 'https://www.orchidhotel.co.il/images/spa-pavilion.jpg'] },
    { name: 'leonardo-royal', urls: ['https://www.leonardo-hotels.com/images/leonardo-royal-eilat/red-sea-view.jpg', 'https://www.leonardo-hotels.com/images/leonardo-royal-eilat/royal-suite.jpg', 'https://www.leonardo-hotels.com/images/leonardo-royal-eilat/beach-pool.jpg'] },
    { name: 'queen-of-sheba', urls: ['https://www.fattal.co.il/images/queen-of-sheba/palace-facade.jpg', 'https://www.fattal.co.il/images/queen-of-sheba/lagoon-pools.jpg', 'https://www.fattal.co.il/images/queen-of-sheba/deluxe-room.jpg'] },
    { name: 'club-hotel', urls: ['https://www.isrotel.com/images/club-hotel/family-pool.jpg', 'https://www.isrotel.com/images/club-hotel/beach.jpg', 'https://www.isrotel.com/images/club-hotel/kids-club.jpg'] },
    { name: 'isrotel-yam-suf', urls: ['https://www.isrotel.com/images/yam-suf/beach-front.jpg', 'https://www.isrotel.com/images/yam-suf/family-suite.jpg', 'https://www.isrotel.com/images/yam-suf/pool-slide.jpg'] },
    { name: 'u-magic-palace', urls: ['https://www.fattal.co.il/images/u-magic-palace/hotel-exterior.jpg', 'https://www.fattal.co.il/images/u-magic-palace/family-room.jpg', 'https://www.fattal.co.il/images/u-magic-palace/waterpark.jpg'] },
    { name: 'dan-eilat', urls: ['https://www.danhotels.com/content/dam/danhotels/dan-eilat/beach-view.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-eilat/pool-area.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-eilat/family-suite.jpg'] },
    { name: 'astral-nirvana', urls: ['https://www.astralhotels.co.il/images/nirvana/club-exterior.jpg', 'https://www.astralhotels.co.il/images/nirvana/pool-complex.jpg', 'https://www.astralhotels.co.il/images/nirvana/family-room.jpg'] },
    { name: 'astral-maris', urls: ['https://www.astralhotels.co.il/images/maris/coral-beach.jpg', 'https://www.astralhotels.co.il/images/maris/pool.jpg', 'https://www.astralhotels.co.il/images/maris/standard-room.jpg'] },
    { name: 'nova-like', urls: ['https://www.novalike.co.il/images/modern-exterior.jpg', 'https://www.novalike.co.il/images/renovated-room.jpg', 'https://www.novalike.co.il/images/breakfast-buffet.jpg'] },
  ],
  'mer-morte': [
    { name: 'isrotel-dead-sea', urls: ['https://www.isrotel.com/images/dead-sea/resort-exterior.jpg', 'https://www.isrotel.com/images/dead-sea/spa-treatment.jpg', 'https://www.isrotel.com/images/dead-sea/infinity-pool.jpg'] },
    { name: 'david-dead-sea', urls: ['https://www.fattal.co.il/images/david-dead-sea/spa-resort.jpg', 'https://www.fattal.co.il/images/david-dead-sea/mud-treatment.jpg', 'https://www.fattal.co.il/images/david-dead-sea/suite.jpg'] },
    { name: 'crowne-plaza-dead-sea', urls: ['https://www.ihg.com/content/dam/crowneplaza/dead-sea/exterior-view.jpg', 'https://www.ihg.com/content/dam/crowneplaza/dead-sea/spa-pool.jpg', 'https://www.ihg.com/content/dam/crowneplaza/dead-sea/deluxe-room.jpg'] },
    { name: 'leonardo-club-dead-sea', urls: ['https://www.leonardo-hotels.com/images/leonardo-club-dead-sea/family-resort.jpg', 'https://www.leonardo-hotels.com/images/leonardo-club-dead-sea/beach-access.jpg', 'https://www.leonardo-hotels.com/images/leonardo-club-dead-sea/family-room.jpg'] },
    { name: 'lot-spa', urls: ['https://www.lotspahotel.com/images/hotel-facade.jpg', 'https://www.lotspahotel.com/images/mineral-spa.jpg', 'https://www.lotspahotel.com/images/standard-room.jpg'] },
  ],
  'netanya': [
    { name: 'seasons', urls: ['https://www.seasonsnetanya.com/images/beachfront-hotel.jpg', 'https://www.seasonsnetanya.com/images/sea-view-room.jpg', 'https://www.seasonsnetanya.com/images/pool-terrace.jpg'] },
    { name: 'margoa', urls: ['https://www.margoahotel.com/images/hotel-exterior.jpg', 'https://www.margoahotel.com/images/standard-room.jpg', 'https://www.margoahotel.com/images/breakfast-terrace.jpg'] },
    { name: 'island', urls: ['https://www.islandhotel.co.il/images/beachfront.jpg', 'https://www.islandhotel.co.il/images/suite.jpg', 'https://www.islandhotel.co.il/images/pool.jpg'] },
    { name: 'residence', urls: ['https://www.residencenetanya.com/images/hotel-facade.jpg', 'https://www.residencenetanya.com/images/family-room.jpg', 'https://www.residencenetanya.com/images/dining-area.jpg'] },
    { name: 'blue-bay', urls: ['https://www.bluebaynetanya.com/images/budget-hotel.jpg', 'https://www.bluebaynetanya.com/images/clean-room.jpg', 'https://www.bluebaynetanya.com/images/beach-proximity.jpg'] },
    { name: 'galil', urls: ['https://www.galilhotel.co.il/images/hotel-exterior.jpg', 'https://www.galilhotel.co.il/images/standard-room.jpg', 'https://www.galilhotel.co.il/images/lobby.jpg'] },
  ],
  'haifa': [
    { name: 'colony', urls: ['https://www.colonyhaifa.com/images/german-colony.jpg', 'https://www.colonyhaifa.com/images/boutique-room.jpg', 'https://www.colonyhaifa.com/images/bahai-gardens-view.jpg'] },
    { name: 'crowne-plaza', urls: ['https://www.ihg.com/content/dam/crowneplaza/haifa/exterior-night.jpg', 'https://www.ihg.com/content/dam/crowneplaza/haifa/bay-view-room.jpg', 'https://www.ihg.com/content/dam/crowneplaza/haifa/rooftop-pool.jpg'] },
    { name: 'dan-carmel', urls: ['https://www.danhotels.com/content/dam/danhotels/dan-carmel/mount-carmel.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-carmel/panoramic-room.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-carmel/terrace-pool.jpg'] },
    { name: 'dan-panorama', urls: ['https://www.danhotels.com/content/dam/danhotels/dan-panorama-haifa/beach-location.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-panorama-haifa/sea-view-room.jpg', 'https://www.danhotels.com/content/dam/danhotels/dan-panorama-haifa/pool.jpg'] },
    { name: 'villa-carmel', urls: ['https://www.villacarmel.co.il/images/boutique-hotel.jpg', 'https://www.villacarmel.co.il/images/deluxe-room.jpg', 'https://www.villacarmel.co.il/images/garden-terrace.jpg'] },
  ]
};

// Fonction pour télécharger une image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);

    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filepath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Fonction principale
async function downloadAllHotelImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  // Créer le dossier de base
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  let totalDownloaded = 0;
  let totalFailed = 0;

  for (const [city, cityHotels] of Object.entries(hotels)) {
    console.log(`\n📍 ${city.toUpperCase()}`);

    const cityDir = path.join(baseDir, city);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    for (const hotel of cityHotels) {
      const hotelDir = path.join(cityDir, hotel.name);
      if (!fs.existsSync(hotelDir)) {
        fs.mkdirSync(hotelDir, { recursive: true });
      }

      console.log(`  🏨 ${hotel.name}`);

      for (let i = 0; i < hotel.urls.length; i++) {
        const url = hotel.urls[i];
        const ext = path.extname(new URL(url).pathname) || '.jpg';
        const filename = `${i + 1}${ext}`;
        const filepath = path.join(hotelDir, filename);

        try {
          await downloadImage(url, filepath);
          totalDownloaded++;
        } catch (error) {
          console.error(`    ✗ Failed: ${url} - ${error.message}`);
          totalFailed++;
        }
      }
    }
  }

  console.log(`\n\n=== RÉSUMÉ ===`);
  console.log(`✓ Images téléchargées: ${totalDownloaded}`);
  console.log(`✗ Échecs: ${totalFailed}`);
  console.log(`📁 Dossier: ${baseDir}`);
}

// Exécuter
downloadAllHotelImages().catch(console.error);
