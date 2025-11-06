const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Images à télécharger depuis mediterraneanBeaches.ts
const beachImages = [
  // Gordon Beach
  { url: "https://visit-tlv.co.il/wp-content/uploads/2021/07/%D7%97%D7%95%D7%A3-%D7%AA%D7%9C-%D7%91%D7%A8%D7%95%D7%9A-%D7%92%D7%99%D7%90-%D7%99%D7%97%D7%99%D7%90%D7%9C%D7%99.jpg", name: "gordon-beach-1.jpg" },
  { url: "https://herzliya-marina-lagoon-apartment.co.il/wp-content/uploads/2019/04/dd9b612d27b0cabd92b170b07714f0b1.jpg", name: "gordon-beach-2.jpg" },
  { url: "https://herzliya-marina-lagoon-apartment.co.il/wp-content/uploads/2019/04/810aacbfd58f216c3577013ec3aad384.jpg", name: "gordon-beach-3.jpg" },

  // Frishman Beach
  { url: "https://www.hafakot.co.il/wp-content/uploads/2022/06/%D7%9E%D7%A7%D7%95%D7%9E%D7%95%D7%AA-%D7%9E%D7%99%D7%95%D7%97%D7%93%D7%99%D7%9D-%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2.webp", name: "frishman-beach-1.webp" },
  { url: "https://static.travelgay.com/media/27225/frishman-beach-tel-aviv.jpg", name: "frishman-beach-2.jpg" },

  // Jerusalem Beach
  { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/cb/da/ba/tel-aviv-beach.jpg?h=-1&s=1&w=1200", name: "jerusalem-beach-1.jpg" },
  { url: "https://project-tlv.info/wp-content/uploads/2022/01/20211225_100904.jpg", name: "jerusalem-beach-2.jpg" },
  { url: "https://herzliya-marina-lagoon-apartment.co.il/wp-content/uploads/2019/04/jerusalem-beach-58634c0cd27fe.jpg", name: "jerusalem-beach-3.jpg" },

  // Herzliya Beach
  { url: "https://www.herzliya.muni.il/uploads/n/1643809259.1547.jpg", name: "herzliya-beach-1.jpg" },
  { url: "https://images.pexels.com/photos/10559912/pexels-photo-10559912.jpeg", name: "herzliya-beach-2.jpeg" },
  { url: "https://sharonline.co.il/wp-content/uploads/2022/04/acadia.jpg", name: "herzliya-beach-3.jpg" },

  // Bograshov Beach
  { url: "https://medias.timeout.co.il/www/uploads/2021/08/shutterstock_1375449449-750x500.jpg", name: "bograshov-beach-1.jpg" },
  { url: "https://project-tlv.info/wp-content/uploads/2023/05/20230422_080727.jpg", name: "bograshov-beach-2.jpg" },
  { url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/4f/78/3f/beautiful-sunset.jpg?h=500&s=1&w=900", name: "bograshov-beach-3.jpg" },

  // Palmachim Beach
  { url: "https://baliletayel.co.il/wp-content/uploads/2023/06/%D7%97%D7%95%D7%A3-%D7%A4%D7%9C%D7%9E%D7%97%D7%99%D7%9D.jpg", name: "palmachim-beach-1.jpg" },
  { url: "https://www.tiuli.com/image/f91aabecca38b8fcee320927e0ce75ff.jpg?height=0&width=1080", name: "palmachim-beach-2.jpg" },
  { url: "https://img.haarets.co.il/bs/00000182-19e7-db04-a39b-7bf797210000/08/2a/967751ab4cfbb501d777849b41bb/47815112.JPG?precrop=2990%2C2992%2Cx113%2Cy0", name: "palmachim-beach-3.jpg" },

  // Hilton Beach
  { url: "https://www.tel-aviv.gov.il/Residents/Environment/beaches/PublishingImages/hilton.jpg", name: "hilton-beach-1.jpg" },
  { url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800", name: "hilton-beach-2.jpg" },
  { url: "https://www.israelhayom.co.il/wp-content/uploads/2021/06/hilton-beach-tel-aviv.jpg", name: "hilton-beach-3.jpg" },

  // Nordau Beach
  { url: "https://www.tel-aviv.gov.il/Residents/Environment/beaches/PublishingImages/nordau.jpg", name: "nordau-beach-1.jpg" },
  { url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800", name: "nordau-beach-2.jpg" },
  { url: "https://www.ynet.co.il/PicServer5/2019/06/25/9421825/nordau-beach.jpg", name: "nordau-beach-3.jpg" },

  // Hof HaCarmel Beach
  { url: "https://smnh.tau.ac.il/wp-content/uploads/2024/07/%D7%97%D7%95%D7%A4%D7%99-%D7%9E%D7%95%D7%90%D7%96-%D7%9B%D7%A8%D7%9E%D7%9C-%D7%A6%D7%99%D7%9C%D7%95%D7%9D-%D7%90%D7%AA%D7%A8-%D7%94%D7%9E%D7%95%D7%A2%D7%A6%D7%94.jpg", name: "hof-hacarmel-beach-1.jpg" },
  { url: "https://www.haifa.muni.il/wp-content/uploads/2021/08/241196262_250617207066166_1926224737030928452_n.jpg", name: "hof-hacarmel-beach-2.jpg" },
  { url: "https://www.gov.il/BlobFolder/generalpage/hof_hacarmel/he/open_area_photos_Carmel0060.jpg", name: "hof-hacarmel-beach-3.jpg" },

  // Ashkelon National Park Beach
  { url: "https://static.parks.org.il/wp-content/uploads/2017/09/-e1531987122598.jpg", name: "ashkelon-beach-1.jpg" },
  { url: "https://img1.oastatic.com/img2/45253262/max/variant.jpg", name: "ashkelon-beach-2.jpg" },
  { url: "https://www.locate.co.il/Thumb/800/600/keepRatio/75/uploads/locations/1833203/335422_1581329386.jpg", name: "ashkelon-beach-3.jpg" },

  // Bat Yam Beach
  { url: "https://upload.wikimedia.org/wikipedia/commons/5/59/PikiWiki_Israel_1283_Bat_-_Yam_Beach_%D7%97%D7%95%D7%A3_%D7%91%D7%AA-%D7%99%D7%9D_%D7%9E%D7%91%D7%98_%D7%9E%D7%9C%D7%9E%D7%A2%D7%9C%D7%94.jpg", name: "bat-yam-beach-1.jpg" },
  { url: "https://i.ytimg.com/vi/5CqaM217F9I/hq720.jpg?rs=AOn4CLB88qfMhraiiBVG4qFvGfLRzvfAZA&sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD", name: "bat-yam-beach-2.jpg" },
  { url: "https://www.bat-yam.muni.il/uploads/n/1721725297.7274.jpg", name: "bat-yam-beach-3.jpg" }
];

const outputDir = path.join(__dirname, '..', 'public', 'images', 'mediterranean-beaches');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
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

    const request = protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
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
  });
}

async function downloadAllImages() {
  console.log(`Téléchargement de ${beachImages.length} images...\n`);

  let successCount = 0;
  let errorCount = 0;
  const errors = [];

  for (const image of beachImages) {
    try {
      await downloadImage(image.url, image.name);
      successCount++;
    } catch (err) {
      errorCount++;
      errors.push({ name: image.name, error: err.message });
      console.error(`✗ Erreur pour ${image.name}: ${err.message}`);
    }
  }

  console.log(`\n=== Résumé ===`);
  console.log(`Succès: ${successCount}/${beachImages.length}`);
  console.log(`Erreurs: ${errorCount}/${beachImages.length}`);

  if (errors.length > 0) {
    console.log(`\nImages échouées:`);
    errors.forEach(e => console.log(`  - ${e.name}: ${e.error}`));
  }
}

downloadAllImages().catch(console.error);
