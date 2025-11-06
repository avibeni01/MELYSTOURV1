// scripts/download-images.js
/**
 * Script pour télécharger les images distantes référencées dans le projet
 *
 * Usage: node scripts/download-images.js
 *
 * ⚠️ ATTENTION: Ce script va télécharger ~150 images depuis des URLs externes
 * Durée estimée: 5-10 minutes selon votre connexion
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const BASE_DIR = path.join(__dirname, '..');
const ASSETS_DIR = path.join(BASE_DIR, 'src', 'assets', 'images');

// Fichiers sources à analyser
const SOURCE_FILES = [
  'src/data/beaches.ts',
  'src/data/mediterraneanBeaches.ts',
  'src/data/vehicules.json',
  'src/components/plages/HotelPromotionsPage.tsx'
];

// Regex pour extraire les URLs d'images
const IMAGE_URL_REGEX = /(https?:\/\/[^\s"']+\.(?:jpg|jpeg|png|webp|svg))/gi;

// Compteurs
let downloadedCount = 0;
let skippedCount = 0;
let errorCount = 0;

/**
 * Télécharge une image depuis une URL
 */
function downloadImage(url, destination) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;

    const file = fs.createWriteStream(destination);

    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirection
        file.close();
        fs.unlinkSync(destination);
        downloadImage(response.headers.location, destination)
          .then(resolve)
          .catch(reject);
      } else {
        file.close();
        fs.unlinkSync(destination);
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destination)) {
        fs.unlinkSync(destination);
      }
      reject(err);
    });

    file.on('error', (err) => {
      file.close();
      if (fs.existsSync(destination)) {
        fs.unlinkSync(destination);
      }
      reject(err);
    });
  });
}

/**
 * Génère un nom de fichier sûr depuis une URL
 */
function getFilenameFromUrl(url, index) {
  const urlObj = new URL(url);
  let filename = path.basename(urlObj.pathname);

  // Si pas d'extension ou nom bizarre, générer un nom
  if (!filename || filename.length > 100 || !filename.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
    const ext = url.match(/\.(jpg|jpeg|png|webp|svg)/i)?.[1] || 'jpg';
    filename = `image-${index}.${ext}`;
  }

  // Nettoyer le nom
  filename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');

  return filename;
}

/**
 * Extrait toutes les URLs d'images depuis un fichier
 */
function extractImageUrls(filePath) {
  const content = fs.readFileSync(path.join(BASE_DIR, filePath), 'utf-8');
  const urls = [];
  let match;

  while ((match = IMAGE_URL_REGEX.exec(content)) !== null) {
    urls.push(match[1]);
  }

  return urls;
}

/**
 * Fonction principale
 */
async function main() {
  console.log('🖼️  Script de téléchargement d\'images distantes\n');
  console.log('📁 Répertoire de destination:', ASSETS_DIR);
  console.log('');

  // Collecter toutes les URLs
  const allUrls = new Map(); // URL -> category

  for (const sourceFile of SOURCE_FILES) {
    const fullPath = path.join(BASE_DIR, sourceFile);

    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  Fichier non trouvé: ${sourceFile}`);
      continue;
    }

    const urls = extractImageUrls(sourceFile);
    const category = sourceFile.includes('beach') ? 'plages' :
                    sourceFile.includes('vehicule') ? 'voitures' :
                    sourceFile.includes('hotel') || sourceFile.includes('Hotel') ? 'hotels' : 'other';

    urls.forEach(url => allUrls.set(url, category));

    console.log(`📄 ${sourceFile}: ${urls.length} images trouvées`);
  }

  console.log(`\n✨ Total: ${allUrls.size} images uniques à télécharger\n`);

  // Confirmation
  console.log('⚠️  ATTENTION: Ce script va télécharger des images depuis des sources externes.');
  console.log('   Assurez-vous d\'avoir les droits d\'utilisation de ces images.\n');

  // Créer les dossiers si nécessaire
  ['plages', 'hotels', 'voitures', 'other'].forEach(category => {
    const dir = path.join(ASSETS_DIR, category);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });

  // Télécharger les images
  let index = 0;
  for (const [url, category] of allUrls.entries()) {
    index++;
    const filename = getFilenameFromUrl(url, index);
    const destination = path.join(ASSETS_DIR, category, filename);

    // Skip si déjà téléchargé
    if (fs.existsSync(destination)) {
      console.log(`⏭️  [${index}/${allUrls.size}] Existe déjà: ${filename}`);
      skippedCount++;
      continue;
    }

    try {
      console.log(`⬇️  [${index}/${allUrls.size}] Téléchargement: ${filename}...`);
      await downloadImage(url, destination);
      downloadedCount++;
      console.log(`✅ [${index}/${allUrls.size}] OK: ${filename}`);

      // Pause pour ne pas surcharger les serveurs
      await new Promise(resolve => setTimeout(resolve, 100));

    } catch (error) {
      errorCount++;
      console.error(`❌ [${index}/${allUrls.size}] ERREUR: ${filename}`);
      console.error(`   ${error.message}`);
      console.error(`   URL: ${url}`);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 RÉSUMÉ:');
  console.log(`   ✅ Téléchargées: ${downloadedCount}`);
  console.log(`   ⏭️  Déjà présentes: ${skippedCount}`);
  console.log(`   ❌ Erreurs: ${errorCount}`);
  console.log(`   📁 Total: ${allUrls.size}`);
  console.log('='.repeat(60));

  if (errorCount > 0) {
    console.log('\n⚠️  Certaines images n\'ont pas pu être téléchargées.');
    console.log('   Vérifiez les URLs et relancez le script si nécessaire.');
  } else {
    console.log('\n🎉 Toutes les images ont été téléchargées avec succès!');
  }
}

// Lancer le script
main().catch(console.error);
