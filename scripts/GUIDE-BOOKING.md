# 📸 Guide Simple - Images depuis Booking.com

## 🎯 Méthode Ultra-Rapide (3 étapes)

### ÉTAPE 1: Trouver les URLs des images 🔍

1. **Ouvre Booking** pour l'hôtel (exemple: David Intercontinental)
   ```
   https://www.booking.com/hotel/il/sheraton-tel-aviv-towers.fr.html
   ```

2. **Clique sur une photo** pour ouvrir la galerie

3. **Clique droit sur l'image** → "Copier l'adresse de l'image"

4. **Tu obtiens une URL comme:**
   ```
   https://cf.bstatic.com/xdata/images/hotel/max1024x768/512249242.jpg?k=67da342feb48008ccaaaf9185062f2058cf4ae0169a3cd13be95e9d1615aa01f&o=
   ```

5. **Répète 3 fois** (pour 3 photos différentes):
   - Photo façade/extérieur
   - Photo piscine/lobby
   - Photo chambre

---

### ÉTAPE 2: Coller dans le JSON 📝

1. **Ouvre:** `scripts/booking-urls.json`

2. **Trouve l'hôtel** (exemple: `david-intercontinental`)

3. **Colle les 3 URLs** dans `manual_images`:

```json
"david-intercontinental": {
  "manual_images": [
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512249242.jpg?k=67da342feb48008ccaaaf9185062f2058cf4ae0169a3cd13be95e9d1615aa01f&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512249247.jpg?k=xxx&o=",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/512249245.jpg?k=xxx&o="
  ]
}
```

4. **Sauvegarde** le fichier

---

### ÉTAPE 3: Télécharger 📥

```bash
node scripts/download-booking-images.js
```

**Résultat:**
```
📍 TEL-AVIV
  🏨 david-intercontinental
    ✅ 1.jpg (245KB)
    ✅ 2.jpg (198KB)
    ✅ 3.jpg (212KB)

✅ 3 images téléchargées!
```

Les images seront dans: `public/images/hotels/tel-aviv/david-intercontinental/`

---

## 🚀 Automatiser pour TOUS les hôtels

### Méthode rapide par lot:

1. **Ouvre 2 fenêtres côte à côte:**
   - Gauche: Booking.com
   - Droite: `booking-urls.json` dans VS Code

2. **Pour chaque hôtel:**
   - Cherche sur Booking (ex: "The Jaffa Tel Aviv")
   - Copie 3 URLs d'images
   - Colle dans le JSON
   - Passe au suivant

3. **Tous les 5-10 hôtels, lance:**
   ```bash
   node scripts/download-booking-images.js
   ```

### Temps estimé:
- **1 hôtel** = 2 minutes (trouver + copier 3 URLs)
- **15 hôtels Tel Aviv** = 30 minutes
- **55 hôtels total** = 2 heures max

---

## 💡 Astuces pour aller vite

### 🔎 Recherche rapide Booking:

| Hôtel | Recherche Booking |
|-------|-------------------|
| The Jaffa | `The Jaffa Tel Aviv site:booking.com` |
| King David | `King David Jerusalem site:booking.com` |
| Isrotel Eilat | `Isrotel Royal Garden Eilat site:booking.com` |

### 📋 Template de recherche Google:
```
[NOM HOTEL] [VILLE] site:booking.com
```

### 🎯 Choix des photos (ordre recommandé):
1. **Photo 1**: Extérieur/façade de l'hôtel
2. **Photo 2**: Piscine, vue panoramique ou lobby
3. **Photo 3**: Chambre type ou équipement phare (spa, restaurant, etc.)

---

## ✅ Checklist par ville

### Tel Aviv (15 hôtels)
- [ ] the-jaffa
- [ ] the-norman
- [x] david-intercontinental (EXEMPLE FAIT)
- [ ] setai
- [ ] 65-hotel
- [ ] brown-tlv
- [ ] lighthouse
- [ ] alma
- [ ] cinema
- [ ] market-house
- [ ] dan-tel-aviv
- [ ] carlton
- [ ] melody
- [ ] port-hotel

**Commande:** `node scripts/download-booking-images.js`

### Jerusalem (12 hôtels)
- [ ] waldorf-astoria
- [ ] king-david
- [ ] mamilla
- [ ] david-citadel
- [ ] inbal
- [ ] dan-panorama
- [ ] leonardo-plaza
- [ ] arthur
- [ ] harmony
- [ ] prima-kings
- [ ] prima-park
- [ ] american-colony

### Eilat (12 hôtels)
- [ ] isrotel-royal-garden
- [ ] herods-boutique
- [ ] orchid
- [ ] leonardo-royal
- [ ] queen-of-sheba
- [ ] club-hotel
- [ ] isrotel-yam-suf
- [ ] u-magic-palace
- [ ] dan-eilat
- [ ] astral-nirvana
- [ ] astral-maris
- [ ] nova-like

### Mer Morte (5 hôtels)
- [ ] isrotel-dead-sea
- [ ] david-dead-sea
- [ ] crowne-plaza-dead-sea
- [ ] leonardo-club-dead-sea
- [ ] lot-spa

### Netanya (6 hôtels)
- [ ] seasons
- [ ] margoa
- [ ] island
- [ ] residence
- [ ] blue-bay
- [ ] galil

### Haifa (5 hôtels)
- [ ] colony
- [ ] crowne-plaza
- [ ] dan-carmel
- [ ] dan-panorama
- [ ] villa-carmel

---

## 🎬 Après le téléchargement

Une fois que tu as téléchargé les images pour plusieurs hôtels:

```bash
# Migrer les pages pour utiliser HotelCard avec images
node scripts/migrate-all-hotels-to-card.js

# Tester
npm run dev
```

Visite: `http://localhost:3000/hotels/tel-aviv`

Tu verras les carrousels d'images fonctionner! 🎉

---

## ❓ FAQ

**Q: Faut-il garder le `?k=xxx&o=` dans l'URL?**
R: Oui! C'est important, ça contient les paramètres de qualité de Booking.

**Q: Les images sont trop grandes?**
R: Non, `max1024x768` est parfait pour le web. Le script les garde telles quelles.

**Q: Je peux mélanger Booking et TripAdvisor?**
R: Oui! Utilise les URLs qui fonctionnent. Booking est généralement plus stable.

**Q: Combien de temps les URLs restent valides?**
R: Booking garde ses URLs longtemps (plusieurs mois/années), contrairement à TripAdvisor.

---

## 📊 Progression globale

```
Total: 55 hôtels × 3 photos = 165 images
Téléchargées: __ / 165 (__%)
Temps restant estimé: __ minutes
```

---

🎯 **But final**: Site avec 165 vraies photos d'hôtels de qualité professionnelle!
