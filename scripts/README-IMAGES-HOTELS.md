# 📸 Guide: Ajouter les vraies images d'hôtels

## 🎯 Objectif
Remplacer les images Unsplash génériques par les **vraies photos** des hôtels depuis TripAdvisor/Booking.

---

## 📋 ÉTAPE 1: Récupérer les URLs des images

### Option A: TripAdvisor (Recommandé)

1. **Ouvre TripAdvisor** pour un hôtel (ex: The Jaffa Tel Aviv)
   ```
   https://www.tripadvisor.fr/Hotel_Review-g293984-d6569816-The_Jaffa_Hotel.html
   ```

2. **Clique sur la galerie photos** de l'hôtel

3. **Pour chaque photo** (3 photos par hôtel):
   - Clique droit sur l'image
   - Sélectionne **"Copier l'adresse de l'image"** (ou "Copy image address")
   - Tu obtiendras une URL comme:
     ```
     https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/3d/the-jaffa-hotel.jpg
     ```

### Option B: Booking.com

1. Ouvre Booking pour l'hôtel
2. Va dans la galerie photos
3. Clique droit -> Copier l'adresse de l'image
4. URL format Booking:
   ```
   https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456789.jpg
   ```

---

## 📝 ÉTAPE 2: Remplir le fichier JSON

1. **Ouvre:** `scripts/hotel-images-urls.json`

2. **Colle les URLs** pour chaque hôtel:

```json
{
  "tel-aviv": {
    "the-jaffa": {
      "images": [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/3d/the-jaffa-hotel.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/41/pool-area.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9b/8f/45/room-view.jpg"
      ]
    },
    "the-norman": {
      "images": [
        "COLLE_ICI_URL_1",
        "COLLE_ICI_URL_2",
        "COLLE_ICI_URL_3"
      ]
    }
  }
}
```

3. **Sauvegarde** le fichier JSON

---

## ⬇️ ÉTAPE 3: Télécharger les images

Dans le terminal:

```bash
cd "C:\Users\Benisty\Documents\elynor tours\elynor-tours-v2\elynor-tours-v2"
node scripts/download-from-urls-json.js
```

### Résultat attendu:
```
📍 TEL-AVIV
  🏨 the-jaffa
    ✓ 1.jpg
    ✓ 2.jpg
    ✓ 3.jpg
  🏨 the-norman
    ⚠ Aucune image (remplis le JSON d'abord)

=== RÉSUMÉ ===
📊 Total: 3 images
✅ Succès: 3
```

Les images seront dans: `public/images/hotels/tel-aviv/the-jaffa/1.jpg`

---

## 🔄 ÉTAPE 4: Migrer les pages vers HotelCard

Une fois que tu as quelques images, lance la migration:

```bash
node scripts/migrate-all-hotels-to-card.js
```

Cela va:
- ✅ Remplacer toutes les cartes HTML par `<HotelCard>`
- ✅ Ajouter les carrousels d'images
- ✅ Garder toutes les données (prix, features, tags)

---

## 🧪 ÉTAPE 5: Tester

```bash
npm run dev
```

Visite: `http://localhost:3000/hotels/tel-aviv`

Tu devrais voir:
- 🎠 Carrousel d'images sur chaque carte
- ◀️ ▶️ Boutons de navigation (au hover)
- ⚫⚫⚫ Indicateurs de slides
- ⭐ Badge de notation

---

## 📊 Progression

### Images à récupérer:
- [ ] Tel Aviv (15 hôtels × 3 photos = 45 images)
- [ ] Jerusalem (12 hôtels × 3 = 36 images)
- [ ] Eilat (12 hôtels × 3 = 36 images)
- [ ] Mer Morte (5 hôtels × 3 = 15 images)
- [ ] Netanya (6 hôtels × 3 = 18 images)
- [ ] Haifa (5 hôtels × 3 = 15 images)

**TOTAL: 165 images**

---

## 💡 Astuces

### Trouver rapidement les hôtels sur TripAdvisor:

```
The Jaffa Tel Aviv -> https://www.tripadvisor.fr/Search?q=The+Jaffa+Tel+Aviv
King David Jerusalem -> https://www.tripadvisor.fr/Search?q=King+David+Jerusalem
```

### Choisir les bonnes photos:
1. **Photo 1**: Façade/extérieur de l'hôtel
2. **Photo 2**: Piscine, lobby ou vue panoramique
3. **Photo 3**: Chambre type ou équipement phare

### Qualité des images:
- ✅ Préfère les URLs avec `/photo-o/` (originale, haute qualité)
- ❌ Évite les URLs avec `/photo-s/` (small, basse qualité)

---

## 🆘 Problèmes courants

### ❌ "HTTP 403" ou "HTTP 404"
- L'URL est expirée ou invalide
- Retourne sur TripAdvisor et recopie une nouvelle URL

### ❌ Images ne s'affichent pas
- Vérifie que les fichiers sont dans `public/images/hotels/{ville}/{hotel}/`
- Les noms doivent être: `1.jpg`, `2.jpg`, `3.jpg`

### ❌ Carrousel ne fonctionne pas
- Vérifie la console navigateur (F12)
- Le composant HotelCard doit être bien importé

---

## ✅ Checklist finale

- [ ] JSON rempli avec les URLs
- [ ] Images téléchargées (node scripts/download-from-urls-json.js)
- [ ] Pages migrées (node scripts/migrate-all-hotels-to-card.js)
- [ ] Build réussi (npm run build)
- [ ] Test visuel (npm run dev)

---

🎨 **Résultat final**: Des cartes d'hôtels professionnelles avec de vraies photos et un carrousel interactif!
