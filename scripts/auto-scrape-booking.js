// Script automatisé pour télécharger les images depuis Booking.com
const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Liste des hôtels avec leurs URLs Booking.com
const hotels = {
  'tel-aviv': [
    { slug: 'the-jaffa', name: 'The Jaffa Hotel Tel Aviv', search: 'The Jaffa a Luxury Collection Hotel Tel Aviv' },
    { slug: 'the-norman', name: 'The Norman Tel Aviv', search: 'The Norman Tel Aviv' },
    { slug: 'david-intercontinental', name: 'David Intercontinental Tel Aviv', search: 'InterContinental David Tel Aviv' },
    { slug: 'setai', name: 'Setai Tel Aviv', search: 'The Setai Tel Aviv' },
    { slug: '65-hotel', name: '65 Hotel Rothschild Tel Aviv', search: '65 Hotel Rothschild Tel Aviv' },
    { slug: 'brown-tlv', name: 'Brown TLV Urban Hotel', search: 'Brown TLV Urban Hotel' },
    { slug: 'lighthouse', name: 'Lighthouse Tel Aviv', search: 'Lighthouse Tel Aviv' },
    { slug: 'alma', name: 'Alma Hotel Tel Aviv', search: 'Alma Hotel Tel Aviv' },
    { slug: 'cinema', name: 'Cinema Hotel Tel Aviv', search: 'Cinema Hotel Tel Aviv' },
    { slug: 'market-house', name: 'Market House Hotel Tel Aviv', search: 'Market House Hotel Tel Aviv' },
    { slug: 'dan-tel-aviv', name: 'Dan Tel Aviv Hotel', search: 'Dan Tel Aviv Hotel' },
    { slug: 'carlton', name: 'Carlton Tel Aviv', search: 'Carlton Tel Aviv Hotel' },
    { slug: 'melody', name: 'Melody Hotel Tel Aviv', search: 'Melody Hotel Tel Aviv' },
    { slug: 'port-hotel', name: 'Port Hotel Tel Aviv', search: 'Port Hotel Tel Aviv' }
  ],
  'jerusalem': [
    { slug: 'waldorf-astoria', name: 'Waldorf Astoria Jerusalem', search: 'Waldorf Astoria Jerusalem' },
    { slug: 'king-david', name: 'King David Hotel Jerusalem', search: 'King David Hotel Jerusalem' },
    { slug: 'mamilla', name: 'Mamilla Hotel Jerusalem', search: 'Mamilla Hotel Jerusalem' },
    { slug: 'david-citadel', name: 'David Citadel Hotel Jerusalem', search: 'David Citadel Hotel Jerusalem' },
    { slug: 'inbal', name: 'Inbal Hotel Jerusalem', search: 'Inbal Hotel Jerusalem' },
    { slug: 'dan-panorama', name: 'Dan Panorama Jerusalem', search: 'Dan Panorama Jerusalem' },
    { slug: 'leonardo-plaza', name: 'Leonardo Plaza Jerusalem', search: 'Leonardo Plaza Jerusalem' },
    { slug: 'arthur', name: 'Arthur Hotel Jerusalem', search: 'Arthur Hotel Jerusalem' },
    { slug: 'harmony', name: 'Harmony Hotel Jerusalem', search: 'Harmony Hotel Jerusalem' },
    { slug: 'prima-kings', name: 'Prima Kings Hotel Jerusalem', search: 'Prima Kings Hotel Jerusalem' },
    { slug: 'prima-park', name: 'Prima Park Hotel Jerusalem', search: 'Prima Park Hotel Jerusalem' },
    { slug: 'american-colony', name: 'American Colony Hotel Jerusalem', search: 'American Colony Hotel Jerusalem' }
  ],
  'eilat': [
    { slug: 'isrotel-royal-garden', name: 'Isrotel Royal Garden Eilat', search: 'Isrotel Royal Garden Eilat' },
    { slug: 'herods-boutique', name: 'Herods Boutique Eilat', search: 'Herods Boutique Eilat' },
    { slug: 'orchid', name: 'Orchid Hotel Eilat', search: 'Orchid Hotel Eilat' },
    { slug: 'leonardo-royal', name: 'Leonardo Royal Eilat', search: 'Leonardo Royal Resort Eilat' },
    { slug: 'queen-of-sheba', name: 'Queen of Sheba Eilat', search: 'Queen of Sheba Eilat' },
    { slug: 'club-hotel', name: 'Club Hotel Eilat', search: 'Club Hotel Eilat' },
    { slug: 'isrotel-yam-suf', name: 'Isrotel Yam Suf Eilat', search: 'Isrotel Yam Suf Eilat' },
    { slug: 'u-magic-palace', name: 'U Magic Palace Eilat', search: 'U Magic Palace Eilat' },
    { slug: 'dan-eilat', name: 'Dan Eilat Hotel', search: 'Dan Eilat Hotel' },
    { slug: 'astral-nirvana', name: 'Astral Nirvana Eilat', search: 'Astral Nirvana Club Eilat' },
    { slug: 'astral-maris', name: 'Astral Maris Eilat', search: 'Astral Maris Eilat' },
    { slug: 'nova-like', name: 'Nova Like Hotel Eilat', search: 'Nova Like Hotel Eilat' }
  ],
  'mer-morte': [
    { slug: 'isrotel-dead-sea', name: 'Isrotel Dead Sea Resort', search: 'Isrotel Dead Sea Resort' },
    { slug: 'david-dead-sea', name: 'David Dead Sea Resort', search: 'David Dead Sea Resort Spa' },
    { slug: 'crowne-plaza-dead-sea', name: 'Crowne Plaza Dead Sea', search: 'Crowne Plaza Dead Sea' },
    { slug: 'leonardo-club-dead-sea', name: 'Leonardo Club Dead Sea', search: 'Leonardo Club Hotel Dead Sea' },
    { slug: 'lot-spa', name: 'Lot Spa Hotel Dead Sea', search: 'Lot Spa Hotel Dead Sea' }
  ],
  'netanya': [
    { slug: 'seasons', name: 'The Seasons Hotel Netanya', search: 'The Seasons Hotel Netanya' },
    { slug: 'margoa', name: 'Margoa Hotel Netanya', search: 'Margoa Hotel Netanya' },
    { slug: 'island', name: 'Island Hotel Netanya', search: 'Island Hotel Netanya' },
    { slug: 'residence', name: 'Residence Hotel Netanya', search: 'Residence Hotel Netanya' },
    { slug: 'blue-bay', name: 'Blue Bay Hotel Netanya', search: 'Blue Bay Hotel Netanya' },
    { slug: 'galil', name: 'Galil Hotel Netanya', search: 'Galil Hotel Netanya' }
  ],
  'haifa': [
    { slug: 'colony', name: 'Colony Hotel Haifa', search: 'Colony Hotel Haifa' },
    { slug: 'crowne-plaza', name: 'Crowne Plaza Haifa', search: 'Crowne Plaza Haifa' },
    { slug: 'dan-carmel', name: 'Dan Carmel Haifa', search: 'Dan Carmel Haifa' },
    { slug: 'dan-panorama', name: 'Dan Panorama Haifa', search: 'Dan Panorama Haifa' },
    { slug: 'villa-carmel', name: 'Villa Carmel Haifa', search: 'Villa Carmel Boutique Hotel Haifa' }
  ]
};

// Fonction pour télécharger une image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.booking.com/'
      }
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(filepath);
        if (stats.size < 1000) {
          fs.unlinkSync(filepath);
          reject(new Error('Image trop petite'));
        } else {
          resolve();
        }
      });
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

// Fonction pour extraire les images depuis une page Booking
async function scrapeHotelImages(page, hotelName) {
  try {
    // Recherche sur Booking.com
    const searchUrl = `https://www.booking.com/searchresults.fr.html?ss=${encodeURIComponent(hotelName)}`;
    console.log(`    🔍 Recherche: ${searchUrl}`);

    await page.goto(searchUrl, {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Attendre les résultats
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 30000 });

    // Cliquer sur le premier résultat
    const firstHotel = await page.$('[data-testid="property-card"] a[data-testid="title-link"]');
    if (!firstHotel) {
      throw new Error('Aucun hôtel trouvé');
    }

    await firstHotel.click();
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 });

    // Attendre la galerie photos
    await page.waitForSelector('a[data-testid="hotel-sidebar-gallery-button"]', { timeout: 30000 });

    // Cliquer sur "Voir toutes les photos"
    await page.click('a[data-testid="hotel-sidebar-gallery-button"]');
    await page.waitForTimeout(3000);

    // Extraire les URLs des images
    const imageUrls = await page.evaluate(() => {
      const imgs = [];
      const imgElements = document.querySelectorAll('img[data-testid="lightbox-image"]');

      for (let i = 0; i < Math.min(3, imgElements.length); i++) {
        const src = imgElements[i].src;
        if (src && src.includes('bstatic.com')) {
          // Remplacer par la version haute qualité
          const highQualityUrl = src.replace(/max\d+x\d+/, 'max1024x768');
          imgs.push(highQualityUrl);
        }
      }

      return imgs;
    });

    if (imageUrls.length === 0) {
      // Essayer une autre méthode - images de la page principale
      await page.goBack();
      await page.waitForTimeout(2000);

      const fallbackUrls = await page.evaluate(() => {
        const imgs = [];
        const imgElements = document.querySelectorAll('img[data-testid="image"]');

        for (let i = 0; i < Math.min(3, imgElements.length); i++) {
          const src = imgElements[i].src;
          if (src && src.includes('bstatic.com')) {
            const highQualityUrl = src.replace(/max\d+x\d+/, 'max1024x768');
            imgs.push(highQualityUrl);
          }
        }

        return imgs;
      });

      return fallbackUrls;
    }

    return imageUrls;
  } catch (error) {
    console.error(`    ❌ Erreur scraping: ${error.message}`);
    return [];
  }
}

// Fonction principale
async function autoScrapeAllHotels() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║  AUTO-SCRAPING BOOKING.COM (PUPPETEER)     ║');
  console.log('╚════════════════════════════════════════════╝\n');

  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  let totalHotels = 0;
  let successHotels = 0;
  let failedHotels = 0;
  let totalImages = 0;

  const browser = await puppeteer.launch({
    headless: false, // Visible pour debug
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();

  // User agent
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  for (const [city, cityHotels] of Object.entries(hotels)) {
    console.log(`\n📍 ${city.toUpperCase()}`);

    const cityDir = path.join(baseDir, city);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    for (const hotel of cityHotels) {
      totalHotels++;
      console.log(`\n  🏨 ${hotel.name}`);

      const hotelDir = path.join(cityDir, hotel.slug);
      if (!fs.existsSync(hotelDir)) {
        fs.mkdirSync(hotelDir, { recursive: true });
      }

      // Vérifier si les images existent déjà
      const existingImages = [1, 2, 3].filter(i =>
        fs.existsSync(path.join(hotelDir, `${i}.jpg`))
      );

      if (existingImages.length === 3) {
        console.log(`    ⏭️  3 images déjà présentes`);
        successHotels++;
        totalImages += 3;
        continue;
      }

      try {
        // Scraper les images
        const imageUrls = await scrapeHotelImages(page, hotel.search);

        if (imageUrls.length === 0) {
          console.log(`    ⚠️  Aucune image trouvée`);
          failedHotels++;
          continue;
        }

        console.log(`    📸 ${imageUrls.length} images trouvées`);

        // Télécharger chaque image
        for (let i = 0; i < imageUrls.length; i++) {
          const filepath = path.join(hotelDir, `${i + 1}.jpg`);

          if (fs.existsSync(filepath)) {
            console.log(`    ⏭️  ${i + 1}.jpg (déjà présente)`);
            totalImages++;
            continue;
          }

          try {
            await downloadImage(imageUrls[i], filepath);
            const stats = fs.statSync(filepath);
            console.log(`    ✅ ${i + 1}.jpg (${Math.round(stats.size / 1024)}KB)`);
            totalImages++;

            // Délai entre les téléchargements
            await new Promise(resolve => setTimeout(resolve, 500));
          } catch (err) {
            console.error(`    ❌ ${i + 1}.jpg: ${err.message}`);
          }
        }

        successHotels++;

        // Délai entre les hôtels
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (error) {
        console.error(`    ❌ Échec: ${error.message}`);
        failedHotels++;
      }
    }
  }

  await browser.close();

  console.log(`\n\n╔═══════════════════════════════╗`);
  console.log(`║      RÉSUMÉ AUTO-SCRAPING      ║`);
  console.log(`╚═══════════════════════════════╝`);
  console.log(`📊 Total hôtels: ${totalHotels}`);
  console.log(`✅ Succès: ${successHotels}`);
  console.log(`❌ Échecs: ${failedHotels}`);
  console.log(`📸 Total images: ${totalImages} / 165`);
  console.log(`📁 Dossier: ${baseDir}`);

  if (successHotels > 0) {
    console.log(`\n🎉 Images téléchargées automatiquement!`);
    console.log(`\n💡 PROCHAINES ÉTAPES:`);
    console.log(`   1. node scripts/migrate-all-hotels-to-card.js`);
    console.log(`   2. npm run dev`);
    console.log(`   3. Vérifie http://localhost:3000/hotels/tel-aviv`);
  }
}

// Exécuter
autoScrapeAllHotels().catch(error => {
  console.error('\n❌ ERREUR FATALE:', error.message);
  console.error(error.stack);
  process.exit(1);
});
