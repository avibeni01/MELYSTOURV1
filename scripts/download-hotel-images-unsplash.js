// Script pour télécharger des images d'hôtels depuis Unsplash (libre de droits)
const https = require('https');
const fs = require('fs');
const path = require('path');

// Images Unsplash par catégorie d'hôtel
const hotelImages = {
  'tel-aviv': {
    'the-jaffa': [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80', // Luxury hotel exterior
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Hotel pool
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80'  // Luxury suite
    ],
    'the-norman': [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80', // Boutique hotel
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80', // Hotel room
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80'  // Rooftop terrace
    ],
    'david-intercontinental': [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', // Beach hotel
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', // Hotel beach view
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Infinity pool
    ],
    'setai': [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=80', // Modern luxury hotel
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80', // Luxury lobby
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80'  // Presidential suite
    ],
    '65-hotel': [
      'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=1200&q=80', // Boutique hotel facade
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', // Modern hotel room
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80'  // Rooftop bar
    ],
    'brown-tlv': [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80', // Hotel exterior
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', // Hotel lobby
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80'  // Stylish room
    ],
    'lighthouse': [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80', // Sea view hotel
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', // Sea view room
      'https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200&q=80'  // Rooftop terrace
    ],
    'alma': [
      'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=1200&q=80', // Boutique hotel
      'https://images.unsplash.com/photo-1586611292717-f828b167408c?w=1200&q=80', // Hotel room
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'  // Hotel restaurant
    ],
    'cinema': [
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80', // Modern hotel
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200&q=80', // Cinema-themed room
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=80'  // Modern lobby
    ],
    'market-house': [
      'https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&q=80', // Market hotel
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=1200&q=80', // Boutique room
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80'  // Market atmosphere
    ],
    'dan-tel-aviv': [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80', // Classic hotel beach
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200&q=80', // Beach access
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80'  // Pool area
    ],
    'carlton': [
      'https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=1200&q=80', // Hotel night
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&q=80', // Beach view room
      'https://images.unsplash.com/photo-1622396636295-c7da52e3ed8b?w=1200&q=80'  // Hotel pool
    ],
    'melody': [
      'https://images.unsplash.com/photo-1567172540275-c5676ad05278?w=1200&q=80', // Budget hotel
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&q=80', // Standard room
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80'  // Breakfast buffet
    ],
    'port-hotel': [
      'https://images.unsplash.com/photo-1621293954908-907159247fc8?w=1200&q=80', // Port hotel
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80', // Simple room
      'https://images.unsplash.com/photo-1540203104344-0de5ab70a8bb?w=1200&q=80'  // Port view
    ],
  },
  'jerusalem': {
    'waldorf-astoria': [
      'https://images.unsplash.com/photo-1512918580421-3f8edf6ee83b?w=1200&q=80', // Palace hotel
      'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=1200&q=80', // Presidential suite
      'https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=1200&q=80'  // Luxury pool
    ],
    'king-david': [
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80', // Historic hotel
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&q=80', // Deluxe room
      'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80'  // Garden pool
    ],
    'mamilla': [
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80', // Old city view
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80', // Luxury suite
      'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&q=80'  // Rooftop terrace
    ],
    'david-citadel': [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80', // Citadel hotel
      'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=1200&q=80', // Executive suite
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80'  // Spa pool
    ],
    'inbal': [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Hotel facade
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80', // City view room
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Pool terrace
    ],
    'dan-panorama': [
      'https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?w=1200&q=80', // Panorama hotel
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80', // Standard room
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80'  // Dining area
    ],
    'leonardo-plaza': [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80', // Plaza hotel
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', // Comfortable room
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Pool
    ],
    'arthur': [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80', // Boutique hotel
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80', // Deluxe room
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&q=80'  // Wine bar
    ],
    'harmony': [
      'https://images.unsplash.com/photo-1549294413-26f195200c16?w=1200&q=80', // Budget boutique
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&q=80', // Clean room
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80'  // Breakfast
    ],
    'prima-kings': [
      'https://images.unsplash.com/photo-1567172540275-c5676ad05278?w=1200&q=80', // Budget hotel
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80', // Standard room
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'  // Dining
    ],
    'prima-park': [
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80', // Park hotel
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=1200&q=80', // Simple room
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=80'  // Lobby
    ],
    'american-colony': [
      'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1200&q=80', // Colonial courtyard
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80', // Historic room
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Swimming pool
    ],
  },
  'eilat': {
    'isrotel-royal-garden': [
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80', // Tropical gardens
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80', // Lagoon pool
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=80'  // Luxury suite
    ],
    'herods-boutique': [
      'https://images.unsplash.com/photo-1512918580421-3f8edf6ee83b?w=1200&q=80', // Palace exterior
      'https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=1200&q=80', // Deluxe suite
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80'  // Spa
    ],
    'orchid': [
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80', // Thai architecture
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Lagoon pool
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80'  // Spa pavilion
    ],
    'leonardo-royal': [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', // Red Sea view
      'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=1200&q=80', // Royal suite
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80'  // Beach pool
    ],
    'queen-of-sheba': [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80', // Palace facade
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80', // Lagoon pools
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80'  // Deluxe room
    ],
    'club-hotel': [
      'https://images.unsplash.com/photo-1621259164258-36546432c84c?w=1200&q=80', // Family pool
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80', // Beach
      'https://images.unsplash.com/photo-1593642634443-44adaa06623a?w=1200&q=80'  // Kids club
    ],
    'isrotel-yam-suf': [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80', // Beach front
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80', // Family suite
      'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=1200&q=80'  // Pool slide
    ],
    'u-magic-palace': [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Hotel exterior
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80', // Family room
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80'  // Waterpark
    ],
    'dan-eilat': [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', // Beach view
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80', // Pool area
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80'  // Family suite
    ],
    'astral-nirvana': [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80', // Club exterior
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80', // Pool complex
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80'  // Family room
    ],
    'astral-maris': [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80', // Coral beach
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80', // Pool
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80'  // Standard room
    ],
    'nova-like': [
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80', // Modern exterior
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', // Renovated room
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80'  // Breakfast buffet
    ],
  },
  'mer-morte': {
    'isrotel-dead-sea': [
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80', // Resort exterior
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80', // Spa treatment
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Infinity pool
    ],
    'david-dead-sea': [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80', // Spa resort
      'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1200&q=80', // Mud treatment
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80'  // Suite
    ],
    'crowne-plaza-dead-sea': [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80', // Exterior view
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80', // Spa pool
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80'  // Deluxe room
    ],
    'leonardo-club-dead-sea': [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Family resort
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80', // Beach access
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80'  // Family room
    ],
    'lot-spa': [
      'https://images.unsplash.com/photo-1567172540275-c5676ad05278?w=1200&q=80', // Hotel facade
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80', // Mineral spa
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80'  // Standard room
    ],
  },
  'netanya': {
    'seasons': [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', // Beachfront hotel
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', // Sea view room
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80'  // Pool terrace
    ],
    'margoa': [
      'https://images.unsplash.com/photo-1455587734955-081b22074882?w=1200&q=80', // Hotel exterior
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=1200&q=80', // Standard room
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1200&q=80'  // Breakfast terrace
    ],
    'island': [
      'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80', // Beachfront
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80', // Suite
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Pool
    ],
    'residence': [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80', // Hotel facade
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1200&q=80', // Family room
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'  // Dining area
    ],
    'blue-bay': [
      'https://images.unsplash.com/photo-1567172540275-c5676ad05278?w=1200&q=80', // Budget hotel
      'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80', // Clean room
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&q=80'  // Beach proximity
    ],
    'galil': [
      'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=1200&q=80', // Hotel exterior
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', // Standard room
      'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1200&q=80'  // Lobby
    ],
  },
  'haifa': {
    'colony': [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80', // German colony
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80', // Boutique room
      'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1200&q=80'  // Bahai gardens view
    ],
    'crowne-plaza': [
      'https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=1200&q=80', // Exterior night
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&q=80', // Bay view room
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Rooftop pool
    ],
    'dan-carmel': [
      'https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=1200&q=80', // Mount Carmel
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=1200&q=80', // Panoramic room
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80'  // Terrace pool
    ],
    'dan-panorama': [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', // Beach location
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', // Sea view room
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&q=80'  // Pool
    ],
    'villa-carmel': [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80', // Boutique hotel
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80', // Deluxe room
      'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1200&q=80'  // Garden terrace
    ],
  }
};

// Fonction pour télécharger une image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Redirect - follow it
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      } else if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Fonction principale
async function downloadAllImages() {
  const baseDir = path.join(__dirname, '..', 'public', 'images', 'hotels');

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  let total = 0;
  let success = 0;
  let failed = 0;

  for (const [city, cityHotels] of Object.entries(hotelImages)) {
    console.log(`\n📍 ${city.toUpperCase()}`);

    const cityDir = path.join(baseDir, city);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    for (const [hotelSlug, urls] of Object.entries(cityHotels)) {
      const hotelDir = path.join(cityDir, hotelSlug);
      if (!fs.existsSync(hotelDir)) {
        fs.mkdirSync(hotelDir, { recursive: true });
      }

      console.log(`  🏨 ${hotelSlug}`);

      for (let i = 0; i < urls.length; i++) {
        total++;
        const url = urls[i];
        const filename = `${i + 1}.jpg`;
        const filepath = path.join(hotelDir, filename);

        try {
          await downloadImage(url, filepath);
          console.log(`    ✓ ${filename}`);
          success++;
        } catch (error) {
          console.error(`    ✗ ${filename}: ${error.message}`);
          failed++;
        }

        // Petit délai pour éviter de surcharger Unsplash
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
  }

  console.log(`\n\n=== RÉSUMÉ ===`);
  console.log(`📊 Total: ${total} images`);
  console.log(`✅ Succès: ${success}`);
  console.log(`❌ Échecs: ${failed}`);
  console.log(`📁 Dossier: ${baseDir}`);
}

// Exécuter
downloadAllImages().catch(console.error);
