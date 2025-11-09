const fs = require('fs');
const path = require('path');

const hotelsDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

function analyzeHotelImages() {
  const hotels = {
    israel: {
      eilat: [],
      jerusalem: [],
      'mer-morte': [],
      netanya: [],
      'tel-aviv': [],
      haifa: []
    },
    world: []
  };

  // Scan root directory for world hotels
  const rootFiles = fs.readdirSync(hotelsDir, { withFileTypes: true });
  for (const file of rootFiles) {
    if (file.isFile() && file.name.endsWith('.webp')) {
      hotels.world.push(file.name);
    }
  }

  // Scan subdirectories for Israel hotels
  const cities = ['eilat', 'jerusalem', 'mer-morte', 'netanya', 'tel-aviv', 'haifa'];

  for (const city of cities) {
    const cityPath = path.join(hotelsDir, city);
    if (!fs.existsSync(cityPath)) continue;

    const cityFiles = fs.readdirSync(cityPath, { withFileTypes: true });
    for (const file of cityFiles) {
      if (file.isFile() && file.name.endsWith('.webp')) {
        hotels.israel[city].push(file.name);
      } else if (file.isDirectory()) {
        // Check subdirectories (e.g., jerusalem/david-citadel)
        const subPath = path.join(cityPath, file.name);
        const subFiles = fs.readdirSync(subPath, { withFileTypes: true });
        const hotelImages = subFiles
          .filter(f => f.isFile() && f.name.endsWith('.webp'))
          .map(f => `${file.name}/${f.name}`);
        hotels.israel[city].push(...hotelImages);
      }
    }
  }

  return hotels;
}

function cleanHotelName(filename) {
  return filename
    .replace(/\d+\.webp$/, '') // Remove number and extension
    .replace(/\.webp$/, '')     // Remove extension
    .trim();
}

function generateHotelData(images) {
  const hotelsByName = {};

  // Group images by hotel name
  images.forEach(img => {
    const name = cleanHotelName(img);
    if (!hotelsByName[name]) {
      hotelsByName[name] = [];
    }
    hotelsByName[name].push(img);
  });

  // Generate hotel objects
  const hotels = [];
  let id = 1;

  for (const [name, images] of Object.entries(hotelsByName)) {
    hotels.push({
      id: id++,
      name: name,
      images: images.sort(),
      imageCount: images.length
    });
  }

  return hotels.sort((a, b) => a.name.localeCompare(b.name));
}

const analysis = analyzeHotelImages();

console.log('='.repeat(80));
console.log('ANALYSE DES IMAGES D\'HÔTELS');
console.log('='.repeat(80));

console.log('\n📍 ISRAËL:\n');
for (const [city, images] of Object.entries(analysis.israel)) {
  if (images.length > 0) {
    console.log(`\n  ${city.toUpperCase()} (${images.length} images):`);
    const hotels = generateHotelData(images);
    hotels.forEach(hotel => {
      console.log(`    - ${hotel.name} (${hotel.imageCount} image${hotel.imageCount > 1 ? 's' : ''})`);
      hotel.images.forEach(img => console.log(`      └─ ${img}`));
    });
  }
}

console.log('\n\n🌍 MONDE:\n');
const worldHotels = generateHotelData(analysis.world);
worldHotels.forEach(hotel => {
  console.log(`  - ${hotel.name} (${hotel.imageCount} image${hotel.imageCount > 1 ? 's' : ''})`);
  hotel.images.forEach(img => console.log(`    └─ ${img}`));
});

// Generate JSON output
const output = {
  israel: {},
  world: []
};

for (const [city, images] of Object.entries(analysis.israel)) {
  if (images.length > 0) {
    output.israel[city] = generateHotelData(images);
  }
}

output.world = worldHotels;

fs.writeFileSync(
  path.join(__dirname, 'hotel-images-analysis.json'),
  JSON.stringify(output, null, 2)
);

console.log('\n' + '='.repeat(80));
console.log('✅ Analyse terminée ! Résultat sauvegardé dans hotel-images-analysis.json');
console.log('='.repeat(80));
