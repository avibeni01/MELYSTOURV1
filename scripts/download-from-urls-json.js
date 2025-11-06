// Script pour télécharger les images d'hôtels depuis hotel-images-urls.json
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Charger les URLs depuis le fichier JSON
const urlsFile = path.join(__dirname, 'hotel-images-urls.json');
const hotelImagesData = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));

// Fonction pour télécharger une image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (!url || url.startsWith('COLLE_ICI') || url.trim() === '') {
      reject(new Error('URL manquante ou invalide'));
      return;
    }

    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
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

    request.on('error', reject);
    request.setTimeout(30000, () => {
      request.abort();
      reject(new Error('Timeout'));
    });
  });
}

// Fonction principale
async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  let total = 0;
  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const [city, cityHotels] of Object.entries(hotelImagesData)) {
    if (city === 'instructions') continue;

    console.log(`\n📍 ${city.toUpperCase()}`);

    const cityDir = path.join(baseDir, city);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    for (const [hotelSlug, hotelData] of Object.entries(cityHotels)) {
      const hotelDir = path.join(cityDir, hotelSlug);
      if (!fs.existsSync(hotelDir)) {
        fs.mkdirSync(hotelDir, { recursive: true });
      }

      console.log(`  🏨 ${hotelSlug}`);

      if (!hotelData.images || hotelData.images.length === 0) {
        console.log(`    ⚠ Aucune image (remplis le JSON d'abord)`);
        skipped++;
        continue;
      }

      for (let i = 0; i < hotelData.images.length; i++) {
        total++;
        const url = hotelData.images[i];
        const filename = `${i + 1}.jpg`;
        const filepath = path.join(hotelDir, filename);

        try {
          await downloadImage(url, filepath);
          console.log(`    ✓ ${filename}`);
          success++;

          // Délai pour éviter de surcharger
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
  console.log(`⚠️  Sautées (pas d'URL): ${skipped}`);
  console.log(`❌ Échecs: ${failed}`);
  console.log(`📁 Dossier: ${baseDir}`);

  if (skipped > 0) {
    console.log(`\n💡 NEXT STEPS:`);
    console.log(`   1. Ouvre scripts/hotel-images-urls.json`);
    console.log(`   2. Pour chaque hôtel, vas sur TripAdvisor`);
    console.log(`   3. Clique droit sur une photo -> "Copier l'adresse de l'image"`);
    console.log(`   4. Colle l'URL dans le JSON`);
    console.log(`   5. Relance: node scripts/download-from-urls-json.js`);
  }
}

// Exécuter
downloadAllImages().catch(console.error);
