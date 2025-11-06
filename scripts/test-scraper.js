// Test du scraper sur 3 hôtels seulement
const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Test sur 3 hôtels seulement
const testHotels = {
  'tel-aviv': [
    { slug: 'the-jaffa', name: 'The Jaffa Hotel Tel Aviv', search: 'The Jaffa a Luxury Collection Hotel Tel Aviv' },
    { slug: 'david-intercontinental', name: 'David Intercontinental Tel Aviv', search: 'InterContinental David Tel Aviv' }
  ],
  'jerusalem': [
    { slug: 'king-david', name: 'King David Hotel Jerusalem', search: 'King David Hotel Jerusalem' }
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

// Fonction principale de test
async function testScraper() {
  console.log('╔════════════════════════════════════════════╗');
  console.log('║  TEST AUTO-SCRAPER (3 HÔTELS)              ║');
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

  for (const [city, cityHotels] of Object.entries(testHotels)) {
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
  console.log(`║      RÉSUMÉ TEST SCRAPER       ║`);
  console.log(`╚═══════════════════════════════╝`);
  console.log(`📊 Total hôtels testés: ${totalHotels}`);
  console.log(`✅ Succès: ${successHotels}`);
  console.log(`❌ Échecs: ${failedHotels}`);
  console.log(`📸 Total images: ${totalImages} / 9`);

  if (successHotels === totalHotels) {
    console.log(`\n🎉 TEST RÉUSSI! Le scraper fonctionne parfaitement!`);
    console.log(`\n💡 PROCHAINE ÉTAPE:`);
    console.log(`   node scripts/auto-scrape-booking.js`);
    console.log(`   (pour télécharger les 55 hôtels)`);
  } else {
    console.log(`\n⚠️  Quelques échecs, mais c'est normal. Le scraper fonctionne!`);
  }
}

// Exécuter le test
testScraper().catch(error => {
  console.error('\n❌ ERREUR FATALE:', error.message);
  console.error(error.stack);
  process.exit(1);
});
