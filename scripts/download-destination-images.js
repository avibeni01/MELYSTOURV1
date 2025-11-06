// Script pour télécharger les images des destinations (Israël et internationales)
const https = require('https');
const fs = require('fs');
const path = require('path');

// Créer le dossier de destination s'il n'existe pas
const destinationsDir = path.join(__dirname, '..', 'public', 'images', 'destinations');
if (!fs.existsSync(destinationsDir)) {
  fs.mkdirSync(destinationsDir, { recursive: true });
}

// URLs des images Unsplash (libres de droits)
const images = [
  // Destinations Israël
  {
    name: 'tel-aviv.jpg',
    url: 'https://images.unsplash.com/photo-1544420182-0f0fb099e3e4?w=800&h=600&fit=crop&q=80',
    description: 'Tel Aviv - Skyline et plage'
  },
  {
    name: 'jerusalem.jpg',
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=80',
    description: 'Jérusalem - Vieille ville et Dôme du Rocher'
  },
  {
    name: 'ben-gurion-airport.jpg',
    url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80',
    description: 'Aéroport - Avion moderne'
  },

  // Destinations Internationales
  {
    name: 'paris.jpg',
    url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop&q=80',
    description: 'Paris - Tour Eiffel'
  },
  {
    name: 'new-york.jpg',
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop&q=80',
    description: 'New York - Skyline'
  },
  {
    name: 'dubai.jpg',
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&q=80',
    description: 'Dubai - Burj Khalifa et skyline'
  }
];

// Fonction pour télécharger une image
function downloadImage(imageUrl, destinationPath, description) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Téléchargement de ${description}...`);

    https.get(imageUrl, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(destinationPath);
        response.pipe(fileStream);

        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ ${description} téléchargée avec succès`);
          resolve();
        });

        fileStream.on('error', (err) => {
          fs.unlink(destinationPath, () => {});
          reject(err);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Suivre les redirections
        downloadImage(response.headers.location, destinationPath, description)
          .then(resolve)
          .catch(reject);
      } else {
        reject(new Error(`Erreur HTTP ${response.statusCode} pour ${imageUrl}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Télécharger toutes les images
async function downloadAllImages() {
  console.log('🚀 Début du téléchargement des images de destinations...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const image of images) {
    const filePath = path.join(destinationsDir, image.name);

    try {
      await downloadImage(image.url, filePath, image.description);
      successCount++;
    } catch (error) {
      console.error(`❌ Erreur lors du téléchargement de ${image.description}:`, error.message);
      errorCount++;
    }

    // Petit délai entre les téléchargements pour ne pas surcharger le serveur
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n📊 Résumé du téléchargement:');
  console.log(`✅ Succès: ${successCount}/${images.length}`);
  console.log(`❌ Erreurs: ${errorCount}/${images.length}`);
  console.log(`\n📁 Images sauvegardées dans: ${destinationsDir}`);
}

// Lancer le téléchargement
downloadAllImages().catch(console.error);
