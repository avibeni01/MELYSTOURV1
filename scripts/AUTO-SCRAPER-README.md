# 🤖 Auto-Scraper Booking.com

## ✅ C'est fait automatiquement !

Tu n'as plus besoin de copier-coller manuellement les URLs ! Le script fait tout pour toi.

---

## 🚀 Utilisation

### Test rapide (3 hôtels) :
```bash
node scripts/test-scraper.js
```

### Scraping complet (55 hôtels) :
```bash
node scripts/auto-scrape-booking.js
```

---

## 🎯 Ce que fait le scraper

1. **Ouvre un navigateur Chrome** (Puppeteer)
2. **Pour chaque hôtel** :
   - Recherche sur Booking.com
   - Clique sur le premier résultat
   - Ouvre la galerie photos
   - Extrait 3 URLs d'images haute qualité
   - Télécharge les images
   - Sauvegarde dans `public/images/hotels/{ville}/{hotel}/`

3. **Résultat** :
   - 55 hôtels × 3 photos = 165 images
   - Format : `1.jpg`, `2.jpg`, `3.jpg`
   - Qualité : max1024x768 (parfait pour le web)

---

## ⏱️ Temps d'exécution

- **Test (3 hôtels)** : 2-3 minutes
- **Complet (55 hôtels)** : 30-60 minutes

Le script ajoute des délais entre chaque hôtel pour éviter d'être bloqué par Booking.com.

---

## 📊 Suivi de la progression

Pendant l'exécution, tu verras :

```
📍 TEL-AVIV

  🏨 The Jaffa Hotel Tel Aviv
    🔍 Recherche: https://www.booking.com/...
    📸 3 images trouvées
    ✅ 1.jpg (245KB)
    ✅ 2.jpg (198KB)
    ✅ 3.jpg (212KB)

  🏨 The Norman Tel Aviv
    🔍 Recherche: https://www.booking.com/...
    📸 3 images trouvées
    ✅ 1.jpg (287KB)
    ...
```

---

## ✅ Résumé final

À la fin, tu verras :

```
╔═══════════════════════════════╗
║      RÉSUMÉ AUTO-SCRAPING      ║
╚═══════════════════════════════╝
📊 Total hôtels: 55
✅ Succès: 52
❌ Échecs: 3
📸 Total images: 156 / 165
📁 Dossier: public/images/hotels

🎉 Images téléchargées automatiquement!

💡 PROCHAINES ÉTAPES:
   1. node scripts/migrate-all-hotels-to-card.js
   2. npm run dev
   3. Vérifie http://localhost:3000/hotels/tel-aviv
```

---

## 🛠️ Configuration

Les hôtels sont définis dans `auto-scrape-booking.js` :

```javascript
const hotels = {
  'tel-aviv': [
    {
      slug: 'the-jaffa',
      name: 'The Jaffa Hotel Tel Aviv',
      search: 'The Jaffa a Luxury Collection Hotel Tel Aviv'
    },
    // ...
  ],
  'jerusalem': [
    // ...
  ]
}
```

Si un hôtel n'est pas trouvé, modifie le champ `search` avec un nom plus précis.

---

## 🔧 Options du scraper

### Headless mode (sans interface)

Par défaut, le navigateur est **visible** pour le debug.

Pour le mode invisible, modifie dans le script :

```javascript
const browser = await puppeteer.launch({
  headless: true,  // ← Change false en true
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});
```

### Délais entre les requêtes

Pour éviter d'être bloqué :

- **Entre images** : 500ms
- **Entre hôtels** : 2000ms

Tu peux les modifier dans le script si nécessaire.

---

## ⚠️ Problèmes possibles

### ❌ TimeoutError
- Connexion internet lente
- Booking.com met trop de temps à charger
- **Solution** : Relance le script, il skip les images déjà téléchargées

### ❌ Aucune image trouvée
- L'hôtel n'existe pas sur Booking
- Le nom de recherche est incorrect
- **Solution** : Modifie le champ `search` dans le script

### ❌ HTTP 403 Forbidden
- Booking détecte le bot
- **Solution** : Ajoute plus de délais entre les requêtes

---

## 🎉 Avantages de l'auto-scraper

✅ **Entièrement automatique** - plus besoin de copier-coller manuellement
✅ **Vraies images** - directement depuis Booking.com
✅ **Haute qualité** - format max1024x768
✅ **Robuste** - gère les redirects, erreurs, timeouts
✅ **Réutilisable** - skip les images déjà téléchargées
✅ **Rapide** - 55 hôtels en 30-60 minutes

---

## 📦 Prochaines étapes

Une fois le scraper terminé :

1. **Migrer toutes les pages** :
   ```bash
   node scripts/migrate-all-hotels-to-card.js
   ```

2. **Tester** :
   ```bash
   npm run dev
   ```
   Visite : http://localhost:3000/hotels/tel-aviv

3. **Build** :
   ```bash
   npm run build
   ```

---

🚀 **Plus besoin de manuel ! Tout est automatisé !**
