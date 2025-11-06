const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Lire le fichier mediterraneanBeaches.ts
const dataFilePath = path.join(__dirname, '..', 'src', 'data', 'mediterraneanBeaches.ts');
const fileContent = fs.readFileSync(dataFilePath, 'utf8');

// Extraire toutes les URLs d'images Pexels des plages religieuses
const religiousBeachesStartIndex = fileContent.indexOf('export const mediterraneanReligiousBeaches');

if (religiousBeachesStartIndex === -1) {
  console.error('Impossible de trouver mediterraneanReligiousBeaches dans le fichier');
  process.exit(1);
}

// Trouver le "]" de fermeture du tableau (après l'interface et les autres exports)
const nextExportIndex = fileContent.indexOf('\ninterface TransportOption', religiousBeachesStartIndex);
const religiousBeachesEndIndex = fileContent.lastIndexOf(']', nextExportIndex);

if (religiousBeachesEndIndex === -1) {
  console.error('Impossible de trouver la fin du tableau mediterraneanReligiousBeaches');
  process.exit(1);
}

const religiousBeachesSection = fileContent.substring(religiousBeachesStartIndex, religiousBeachesEndIndex + 1);

// Extraire toutes les URLs d'images Pexels
const imageUrlRegex = /https:\/\/images\.pexels\.com\/[^\s"]+/g;
const imageUrls = [];
let match;

while ((match = imageUrlRegex.exec(religiousBeachesSection)) !== null) {
  if (!imageUrls.includes(match[0])) {
    imageUrls.push(match[0]);
  }
}

console.log(`Trouvé ${imageUrls.length} images Pexels à télécharger\n`);

// Créer les dossiers de sortie
const outputDir = path.join(__dirname, '..', 'public', 'images', 'mediterranean-beaches', 'religious');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log(`Dossier créé: ${outputDir}\n`);
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(outputDir, filename);

    // Vérifier si le fichier existe déjà
    if (fs.existsSync(filepath)) {
      console.log(`✓ Fichier existe déjà: ${filename}`);
      resolve(filepath);
      return;
    }

    const parsedUrl = new URL(url);
    const protocol = parsedUrl.protocol === 'https:' ? https : http;

    const file = fs.createWriteStream(filepath);

    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (response) => {
      // Gérer les redirections
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filepath);
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Échec du téléchargement: ${response.statusCode} - ${url}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✓ Téléchargé: ${filename}`);
        resolve(filepath);
      });
    });

    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });

    file.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });

    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function downloadAllImages() {
  console.log(`Téléchargement de ${imageUrls.length} images...\n`);

  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    // Extraire l'ID de la photo depuis l'URL Pexels
    const photoIdMatch = url.match(/photos\/(\d+)/);
    const photoId = photoIdMatch ? photoIdMatch[1] : `image-${i}`;
    const extension = url.includes('.jpeg') ? 'jpeg' : 'jpg';
    const filename = `religious-beach-${photoId}.${extension}`;

    try {
      await downloadImage(url, filename);
      successCount++;
      // Petite pause pour éviter de surcharger Pexels
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (err) {
      errorCount++;
      errors.push({ url, error: err.message });
      console.error(`✗ Erreur pour ${filename}: ${err.message}`);
    }
  }

  console.log(`\n=== Résumé ===`);
  console.log(`Succès: ${successCount}/${imageUrls.length}`);
  console.log(`Erreurs: ${errorCount}/${imageUrls.length}`);

  if (errors.length > 0) {
    console.log(`\nImages échouées:`);
    errors.forEach(e => console.log(`  - ${e.url}: ${e.error}`));
  }

  console.log(`\nImages sauvegardées dans: ${outputDir}`);
}

downloadAllImages().catch(console.error);
