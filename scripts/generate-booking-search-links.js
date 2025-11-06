// Script pour générer une page HTML avec tous les liens de recherche Booking
const fs = require('fs');
const path = require('path');

const hotels = {
  'Tel Aviv': [
    'The Jaffa Hotel Tel Aviv',
    'The Norman Tel Aviv',
    'David Intercontinental Tel Aviv',
    'Setai Tel Aviv',
    '65 Hotel Rothschild Tel Aviv',
    'Brown TLV Urban Hotel',
    'Lighthouse Tel Aviv',
    'Alma Hotel Tel Aviv',
    'Cinema Hotel Tel Aviv',
    'Market House Hotel Tel Aviv',
    'Dan Tel Aviv Hotel',
    'Carlton Tel Aviv',
    'Melody Hotel Tel Aviv',
    'Port Hotel Tel Aviv'
  ],
  'Jerusalem': [
    'Waldorf Astoria Jerusalem',
    'King David Hotel Jerusalem',
    'Mamilla Hotel Jerusalem',
    'David Citadel Hotel Jerusalem',
    'Inbal Hotel Jerusalem',
    'Dan Panorama Jerusalem',
    'Leonardo Plaza Jerusalem',
    'Arthur Hotel Jerusalem',
    'Harmony Hotel Jerusalem',
    'Prima Kings Hotel Jerusalem',
    'Prima Park Hotel Jerusalem',
    'American Colony Hotel Jerusalem'
  ],
  'Eilat': [
    'Isrotel Royal Garden Eilat',
    'Herods Boutique Eilat',
    'Orchid Hotel Eilat',
    'Leonardo Royal Eilat',
    'Queen of Sheba Eilat',
    'Club Hotel Eilat',
    'Isrotel Yam Suf Eilat',
    'U Magic Palace Eilat',
    'Dan Eilat Hotel',
    'Astral Nirvana Eilat',
    'Astral Maris Eilat',
    'Nova Like Hotel Eilat'
  ],
  'Mer Morte': [
    'Isrotel Dead Sea Resort',
    'David Dead Sea Resort',
    'Crowne Plaza Dead Sea',
    'Leonardo Club Dead Sea',
    'Lot Spa Hotel Dead Sea'
  ],
  'Netanya': [
    'The Seasons Hotel Netanya',
    'Margoa Hotel Netanya',
    'Island Hotel Netanya',
    'Residence Hotel Netanya',
    'Blue Bay Hotel Netanya',
    'Galil Hotel Netanya'
  ],
  'Haifa': [
    'Colony Hotel Haifa',
    'Crowne Plaza Haifa',
    'Dan Carmel Haifa',
    'Dan Panorama Haifa',
    'Villa Carmel Haifa'
  ]
};

function generateBookingSearchUrl(hotelName) {
  const query = encodeURIComponent(hotelName);
  return `https://www.booking.com/searchresults.fr.html?ss=${query}`;
}

function generateGoogleSearchUrl(hotelName) {
  const query = encodeURIComponent(`${hotelName} site:booking.com`);
  return `https://www.google.com/search?q=${query}`;
}

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liens Booking.com - Tous les Hôtels</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
      min-height: 100vh;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      padding: 40px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 {
      color: #2d3748;
      margin-bottom: 10px;
      font-size: 2.5rem;
    }
    .subtitle {
      color: #718096;
      margin-bottom: 30px;
      font-size: 1.1rem;
    }
    .instructions {
      background: #edf2f7;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 30px;
      border-left: 4px solid #667eea;
    }
    .instructions h3 {
      color: #2d3748;
      margin-bottom: 10px;
    }
    .instructions ol {
      margin-left: 20px;
      color: #4a5568;
    }
    .instructions li {
      margin: 8px 0;
    }
    .city {
      margin-bottom: 40px;
    }
    .city-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 3px solid #667eea;
    }
    .city-name {
      font-size: 1.8rem;
      font-weight: bold;
      color: #2d3748;
      margin-right: 15px;
    }
    .city-count {
      background: #667eea;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
    }
    .hotel-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 15px;
    }
    .hotel-card {
      background: white;
      border: 2px solid #e2e8f0;
      border-radius: 10px;
      padding: 15px;
      transition: all 0.3s;
    }
    .hotel-card:hover {
      border-color: #667eea;
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
      transform: translateY(-2px);
    }
    .hotel-name {
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 10px;
      font-size: 1.05rem;
    }
    .hotel-links {
      display: flex;
      gap: 10px;
    }
    .btn {
      flex: 1;
      padding: 8px 12px;
      border-radius: 6px;
      text-decoration: none;
      text-align: center;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.2s;
      display: inline-block;
    }
    .btn-booking {
      background: #003580;
      color: white;
    }
    .btn-booking:hover {
      background: #00408a;
      transform: scale(1.05);
    }
    .btn-google {
      background: #4285f4;
      color: white;
    }
    .btn-google:hover {
      background: #5a95f5;
      transform: scale(1.05);
    }
    .progress {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      min-width: 200px;
    }
    .progress h4 {
      margin-bottom: 10px;
      color: #2d3748;
    }
    .progress-bar {
      width: 100%;
      height: 8px;
      background: #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      margin: 10px 0;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      width: 0%;
      transition: width 0.3s;
    }
    .stat {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏨 Liens Booking.com - Tous les Hôtels</h1>
    <p class="subtitle">Clique sur les liens pour trouver les hôtels sur Booking et copier les URLs des images</p>

    <div class="instructions">
      <h3>📋 Instructions:</h3>
      <ol>
        <li><strong>Clique sur "Booking"</strong> pour ouvrir la page de l'hôtel</li>
        <li><strong>Ouvre la galerie photos</strong> de l'hôtel</li>
        <li><strong>Clique droit sur 3 photos</strong> → "Copier l'adresse de l'image"</li>
        <li><strong>Colle les URLs</strong> dans <code>scripts/booking-urls.json</code></li>
        <li><strong>Lance:</strong> <code>node scripts/download-booking-images.js</code></li>
      </ol>
    </div>

${Object.entries(hotels).map(([city, cityHotels]) => `
    <div class="city">
      <div class="city-header">
        <span class="city-name">${city}</span>
        <span class="city-count">${cityHotels.length} hôtels</span>
      </div>
      <div class="hotel-grid">
${cityHotels.map(hotel => `
        <div class="hotel-card">
          <div class="hotel-name">${hotel}</div>
          <div class="hotel-links">
            <a href="${generateBookingSearchUrl(hotel)}" target="_blank" class="btn btn-booking">
              🔎 Booking
            </a>
            <a href="${generateGoogleSearchUrl(hotel)}" target="_blank" class="btn btn-google">
              🌐 Google
            </a>
          </div>
        </div>
`).join('')}
      </div>
    </div>
`).join('')}

  </div>

  <div class="progress">
    <h4>📊 Progression</h4>
    <div class="stat">
      <span>Total:</span>
      <strong>55 hôtels</strong>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 2%"></div>
    </div>
    <div class="stat">
      <span>Images:</span>
      <strong>3 / 165</strong>
    </div>
    <div class="stat">
      <span>Complété:</span>
      <strong>2%</strong>
    </div>
  </div>

  <script>
    // Mise à jour de la progression depuis localStorage
    const updateProgress = () => {
      const completed = parseInt(localStorage.getItem('hotelsCompleted') || '1');
      const total = 55;
      const percent = Math.round((completed / total) * 100);

      document.querySelector('.progress-fill').style.width = percent + '%';
      document.querySelectorAll('.stat strong')[1].textContent = (completed * 3) + ' / 165';
      document.querySelectorAll('.stat strong')[2].textContent = percent + '%';
    };

    // Marquer un hôtel comme visité au clic
    document.querySelectorAll('.btn-booking').forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.hotel-card');
        if (!card.classList.contains('visited')) {
          card.classList.add('visited');
          card.style.background = '#f0fdf4';
          card.style.borderColor = '#86efac';

          const completed = parseInt(localStorage.getItem('hotelsCompleted') || '1');
          localStorage.setItem('hotelsCompleted', completed + 1);
          updateProgress();
        }
      });
    });

    updateProgress();
  </script>
</body>
</html>`;

const outputPath = path.join(__dirname, 'booking-links.html');
fs.writeFileSync(outputPath, html);

console.log('✅ Fichier HTML créé!');
console.log('📁', outputPath);
console.log('\n💡 Ouvre ce fichier dans ton navigateur:');
console.log('   Double-clique sur: scripts/booking-links.html');
console.log('\n🎯 Utilise les liens pour trouver rapidement tous les hôtels sur Booking!');
