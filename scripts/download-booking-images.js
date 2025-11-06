// Script pour télécharger les images depuis Booking.com
const https = require('https');
const fs = require('fs');
const path = require('path');

// Charger les URLs depuis le fichier JSON
const urlsFile = path.join(__dirname, 'booking-urls.json');
const bookingData = JSON.parse(fs.readFileSync(urlsFile, 'utf8'));

// Fonction pour télécharger une image depuis Booking
function downloadBookingImage(url, filepath) {
  return new Promise((resolve, reject) => {
    if (!url || url.trim() === '') {
      reject(new Error('URL vide'));
      return;
    }

    // Nettoyer l'URL (enlever les paramètres inutiles, garder seulement k= et o=)
    const urlObj = new URL(url);
    const cleanUrl = `${urlObj.origin}${urlObj.pathname}${urlObj.search}`;

    https.get(cleanUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Referer': 'https://www.booking.com/',
        'Accept-Language': 'fr-FR,fr;q=0.9'
      }
    }, (response) => {
      // Gérer les redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadBookingImage(response.headers.location, filepath).then(resolve).catch(reject);
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
    }).on('error', reject).setTimeout(30000, function() {
      this.abort();
      reject(new Error('Timeout'));
    });
  });
}

// Fonction pour extraire le numéro d'image depuis l'URL Booking
function extractImageNumber(url) {
  const match = url.match(/\/(\d+)\.jpg/);
  return match ? match[1] : null;
}

// Fonction principale
async function downloadAllBookingImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  let total = 0;
  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const [city, cityHotels] of Object.entries(bookingData)) {
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

      // Utiliser manual_images
      const images = hotelData.manual_images || [];

      if (images.length === 0) {
        console.log(`    ⚠️  Aucune image (ajoute des URLs dans booking-urls.json)`);
        skipped++;
        continue;
      }

      for (let i = 0; i < images.length; i++) {
        total++;
        const url = images[i];
        const filename = `${i + 1}.jpg`;
        const filepath = path.join(hotelDir, filename);

        // Vérifier si l'image existe déjà
        if (fs.existsSync(filepath)) {
          console.log(`    ⏭️  ${filename} (déjà existante)`);
          success++;
          continue;
        }

        try {
          await downloadBookingImage(url, filepath);

          // Vérifier que le fichier n'est pas vide
          const stats = fs.statSync(filepath);
          if (stats.size < 1000) {
            fs.unlinkSync(filepath);
            throw new Error('Fichier trop petit (probablement erreur)');
          }

          console.log(`    ✅ ${filename} (${Math.round(stats.size / 1024)}KB)`);
          success++;

          // Délai pour éviter de surcharger Booking
          await new Promise(resolve => setTimeout(resolve, 800));
        } catch (error) {
          console.error(`    ❌ ${filename}: ${error.message}`);
          failed++;
        }
      }
    }
  }

  console.log(`\n\n╔═══════════════════════════════╗`);
  console.log(`║      RÉSUMÉ TÉLÉCHARGEMENT     ║`);
  console.log(`╚═══════════════════════════════╝`);
  console.log(`📊 Total tentatives: ${total}`);
  console.log(`✅ Succès: ${success}`);
  console.log(`⚠️  Sautées (pas d'URL): ${skipped} hôtels`);
  console.log(`❌ Échecs: ${failed}`);
  console.log(`📁 Dossier: ${baseDir}`);

  if (success > 0) {
    console.log(`\n🎉 ${success} images téléchargées avec succès!`);
  }

  if (skipped > 0) {
    console.log(`\n💡 PROCHAINES ÉTAPES:`);
    console.log(`   1. Ouvre booking-urls.json`);
    console.log(`   2. Trouve l'hôtel sur Booking.com`);
    console.log(`   3. Clique droit sur 3 photos -> Copier l'adresse`);
    console.log(`   4. Colle les URLs dans manual_images: ["url1", "url2", "url3"]`);
    console.log(`   5. Relance: node scripts/download-booking-images.js`);
  }

  if (failed > 0) {
    console.log(`\n⚠️  ${failed} échecs - vérifie que les URLs sont correctes`);
  }
}

// Exécuter
console.log('╔════════════════════════════════════════╗');
console.log('║  TÉLÉCHARGEMENT IMAGES BOOKING.COM     ║');
console.log('╚════════════════════════════════════════╝\n');

downloadAllBookingImages().catch(error => {
  console.error('\n❌ ERREUR FATALE:', error.message);
  console.error(error.stack);
});
