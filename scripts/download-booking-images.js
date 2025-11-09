const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');
const path = require('path');

const hotels = [
  { url: 'https://www.booking.com/hotel/il/crowne-plaza-tel-aviv.fr.html', filename: 'crowne-plaza.webp' },
  { url: 'https://www.booking.com/hotel/il/yamitpplaza.fr.html', filename: 'yamit-plaza.webp' },
  { url: 'https://www.booking.com/hotel/il/the-david-kempinski-tel-aviv-tel-aviv-yafo.fr.html', filename: 'david-kempinski.webp' },
  { url: 'https://www.booking.com/hotel/il/carlton-tel-aviv.fr.html', filename: 'carlton.webp' },
  { url: 'https://www.booking.com/hotel/il/opera-tel-aviv-by-herbert-samuel.fr.html', filename: 'opera-tower.webp' },
  { url: 'https://www.booking.com/hotel/il/renaissance-tel-aviv.fr.html', filename: 'renaissance.webp' },
  { url: 'https://www.booking.com/hotel/il/crowne-plaza-city-centre-tlv.fr.html', filename: 'crowne-plaza-city.webp' },
  { url: 'https://www.booking.com/hotel/il/moriah-plaza-tel-aviv.fr.html', filename: 'moriah-plaza.webp' },
  { url: 'https://www.booking.com/hotel/il/isrotel-sea-tower-tel-aviv.fr.html', filename: 'isrotel-sea-tower.webp' },
  { url: 'https://www.booking.com/hotel/il/dan-tel-aviv.fr.html', filename: 'dan-tel-aviv.webp' },
  { url: 'https://www.booking.com/hotel/il/dan-panorama-tel-aviv.fr.html', filename: 'dan-panorama.webp' },
  { url: 'https://www.booking.com/hotel/il/marina-tel-aviv.fr.html', filename: 'marina-hotel.webp' },
  { url: 'https://www.booking.com/hotel/il/grand-beach-tel-aviv.fr.html', filename: 'grand-beach.webp' }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'hotels', 'tel-aviv');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function downloadImage(imageUrl, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(imageUrl, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function scrapeHotelImages() {
  console.log('🚀 Lancement du scraper Booking.com...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (let i = 0; i < hotels.length; i++) {
    const hotel = hotels[i];
    console.log(`[${i + 1}/${hotels.length}] Traitement de ${hotel.filename}...`);

    try {
      const page = await browser.newPage();

      // Set user agent to avoid blocking
      await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

      await page.goto(hotel.url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for images to load
      await page.waitForSelector('img[data-testid="image"]', { timeout: 10000 }).catch(() => {
        console.log('  ⚠️  Sélecteur principal non trouvé, essai alternatif...');
      });

      // Try to get the first hotel image
      const imageUrl = await page.evaluate(() => {
        // Try multiple selectors
        const selectors = [
          'img[data-testid="image"]',
          '.bh-photo-grid img',
          'a[data-testid="gallery-image"] img',
          '.hotel-photo img'
        ];

        for (const selector of selectors) {
          const img = document.querySelector(selector);
          if (img && img.src) {
            return img.src;
          }
        }
        return null;
      });

      await page.close();

      if (imageUrl) {
        // Download the image
        const outputPath = path.join(outputDir, hotel.filename);
        await downloadImage(imageUrl, outputPath);
        console.log(`  ✅ ${hotel.filename} téléchargé avec succès`);
      } else {
        console.log(`  ❌ Aucune image trouvée pour ${hotel.filename}`);
      }

      // Wait a bit between requests to be polite
      await new Promise(resolve => setTimeout(resolve, 2000));

    } catch (error) {
      console.log(`  ❌ Erreur pour ${hotel.filename}: ${error.message}`);
    }
  }

  await browser.close();
  console.log('\n✨ Scraping terminé !');
}

scrapeHotelImages().catch(console.error);
