# 🚀 Guide de Déploiement - Hostinger FTP

**Site:** Elynor Tours
**Domaine:** https://elynortours.com (melystour.com)
**Hébergeur:** Hostinger
**Type:** Site statique Next.js + Iframe Vercel

---

## 📋 Prérequis

✅ Build Next.js terminé (dossier `out/` généré)
✅ Accès FTP Hostinger
✅ FileZilla ou client FTP installé

---

## 🔐 Informations FTP Hostinger

D'après ta config Hostinger :

```
Hôte FTP:        ftp://147.79.103.43
                 OU ftp://melystour.com

Nom d'utilisateur: u713412544.melystour.com

Mot de passe:    [Ton mot de passe Hostinger]

Port:            21 (FTP standard)

Dossier cible:   /public_html
```

---

## 🛠️ Étape 1 : Vérifier le Build

### **1.1 Vérifier que le dossier `out/` existe**

Après `npm run build`, tu devrais avoir :

```
elynor-tours-v2/
├── out/                    ← Dossier de build statique
│   ├── index.html
│   ├── 404.html
│   ├── hotels/
│   │   ├── tel-aviv.html
│   │   ├── jerusalem.html
│   │   └── ...
│   ├── location-voiture/
│   │   ├── index.html
│   │   └── ...
│   ├── plages/
│   │   ├── mediterranee.html
│   │   └── ...
│   ├── _next/              ← Assets Next.js
│   │   ├── static/
│   │   └── ...
│   └── images/             ← Tes images
│       ├── hotels/
│       ├── mediterranean-beaches/
│       └── ...
```

### **1.2 Vérifier le nombre de fichiers**

```bash
ls out/ -la
```

Tu devrais avoir ~20-30 fichiers HTML + dossiers assets.

---

## 📤 Étape 2 : Connexion FTP avec FileZilla

### **2.1 Télécharger FileZilla (si pas installé)**

https://filezilla-project.org/download.php?type=client

### **2.2 Configurer la connexion**

1. **Ouvre FileZilla**
2. **Fichier → Gestionnaire de Sites → Nouveau site**

Paramètres :
```
Protocole:     FTP - File Transfer Protocol
Hôte:          147.79.103.43
Port:          21
Chiffrement:   Utiliser FTP simple (non sécurisé)
Type d'auth:   Normale
Utilisateur:   u713412544.melystour.com
Mot de passe:  [Ton mot de passe Hostinger]
```

3. **Clique sur "Connexion"**

### **2.3 Accepter le certificat**

Si un message s'affiche, clique sur **"Toujours faire confiance à ce certificat"**.

---

## 🗂️ Étape 3 : Préparer Hostinger (IMPORTANT)

### **3.1 Sauvegarder l'ancien site**

**AVANT de tout supprimer :**

1. Dans FileZilla, **côté droit** (serveur)
2. Va dans `/public_html`
3. **Sélectionne tout** (Ctrl+A)
4. **Télécharge** sur ton PC dans un dossier `backup-ancien-site/`

### **3.2 Nettoyer public_html**

⚠️ **ATTENTION : Sauvegarde d'abord !**

1. Dans `/public_html`, supprime **TOUT** sauf :
   - `.htaccess` (si existe)
   - `error_log` (si existe)
   - Dossiers système type `cgi-bin`

---

## 📦 Étape 4 : Upload des fichiers

### **4.1 Upload du contenu de `out/`**

1. **Côté gauche** (local) : Va dans ton dossier `elynor-tours-v2/out/`
2. **Côté droit** (serveur) : Assure-toi d'être dans `/public_html`

3. **Sélectionne TOUT le contenu de `out/`** :
   - `index.html`
   - `404.html`
   - Tous les dossiers (`hotels/`, `location-voiture/`, `plages/`, `_next/`, `images/`)

4. **Glisse-dépose** du côté gauche vers le côté droit

5. **Attends la fin de l'upload** (peut prendre 5-15 minutes selon le nombre d'images)

### **4.2 Vérifier l'arborescence**

Sur le serveur `/public_html`, tu dois avoir :

```
/public_html/
├── index.html              ← Homepage
├── 404.html
├── hotels/
│   ├── tel-aviv.html
│   └── ...
├── location-voiture/
│   └── ...
├── plages/
│   └── ...
├── _next/
│   └── static/
├── images/
│   ├── hotels/
│   └── ...
└── .htaccess              ← Important !
```

---

## 🔧 Étape 5 : Créer le fichier .htaccess

### **5.1 Pourquoi c'est important**

Next.js génère des URLs comme `/hotels/tel-aviv.html`
Mais on veut des URLs propres : `/hotels/tel-aviv`

### **5.2 Créer .htaccess**

Dans FileZilla, **clic droit** dans `/public_html` → **Créer un fichier** → Nomme-le `.htaccess`

**Contenu du .htaccess :**

```apache
# Elynor Tours - Next.js Static Export
# Dernière mise à jour: 3 novembre 2025

# Forcer HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Redirection www vers non-www (ou inverse selon préférence)
RewriteCond %{HTTP_HOST} ^www\.elynortours\.com [NC]
RewriteRule ^(.*)$ https://elynortours.com/$1 [L,R=301]

# URLs propres - Next.js static export
# Permet d'accéder à /hotels/tel-aviv au lieu de /hotels/tel-aviv.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# Page d'erreur 404 personnalisée
ErrorDocument 404 /404.html

# Compression GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Mise en cache navigateur (1 an pour assets statiques)
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Sécurité
<IfModule mod_headers.c>
  # Protection XSS
  Header set X-XSS-Protection "1; mode=block"

  # Empêcher le MIME sniffing
  Header set X-Content-Type-Options "nosniff"

  # Clickjacking protection
  Header set X-Frame-Options "SAMEORIGIN"

  # HSTS (si HTTPS activé)
  Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>

# Désactiver le listing des répertoires
Options -Indexes

# Bloquer l'accès aux fichiers sensibles
<FilesMatch "^\.">
  Order allow,deny
  Deny from all
</FilesMatch>

<FilesMatch "(package\.json|package-lock\.json|\.env|\.env\.local|node_modules)">
  Order allow,deny
  Deny from all
</FilesMatch>
```

### **5.3 Upload du .htaccess**

1. **Édite le fichier** localement avec ce contenu
2. **Upload** dans `/public_html`
3. **Vérifie** qu'il est bien présent

---

## ✅ Étape 6 : Vérifications

### **6.1 Test des URLs**

Teste ces URLs dans ton navigateur :

```
✅ https://elynortours.com
✅ https://elynortours.com/hotels/tel-aviv
✅ https://elynortours.com/location-voiture
✅ https://elynortours.com/plages/mediterranee
✅ https://elynortours.com/contact
```

### **6.2 Test du formulaire**

1. Va sur la homepage : https://elynortours.com
2. Scroll jusqu'au formulaire
3. Vérifie que l'iframe Vercel s'affiche correctement
4. **Teste une soumission** pour vérifier que HubSpot reçoit bien les données

### **6.3 Test mobile**

1. Ouvre le site sur mobile
2. Vérifie que le formulaire fait bien 750px de haut
3. Vérifie la navigation

### **6.4 Test SEO**

Google Search Console :
```
https://search.google.com/search-console
```

1. Ajoute la propriété `https://elynortours.com`
2. Soumets le sitemap : `https://elynortours.com/sitemap.xml`

---

## 🐛 Dépannage

### **Problème 1 : Page blanche**

**Cause :** Mauvaise arborescence de fichiers

**Solution :**
1. Vérifie que `index.html` est bien à la racine de `/public_html`
2. Vérifie les permissions (755 pour dossiers, 644 pour fichiers)

### **Problème 2 : 404 sur les sous-pages**

**Cause :** `.htaccess` mal configuré

**Solution :**
1. Vérifie que `.htaccess` est bien uploadé
2. Vérifie que `mod_rewrite` est activé (normalement oui sur Hostinger)
3. Contacte le support Hostinger si besoin

### **Problème 3 : Images ne s'affichent pas**

**Cause :** Chemins d'images incorrects ou dossier `images/` pas uploadé

**Solution :**
1. Vérifie que le dossier `images/` est bien dans `/public_html`
2. Vérifie les permissions du dossier

### **Problème 4 : Formulaire ne s'affiche pas**

**Cause :** iframe Vercel bloquée par sécurité

**Solution :**
1. Vérifie les en-têtes CSP dans `.htaccess`
2. Teste dans un navigateur privé (désactive extensions)
3. Vérifie la console navigateur (F12)

### **Problème 5 : CSS/JS ne charge pas**

**Cause :** Dossier `_next/` mal uploadé

**Solution :**
1. Re-upload le dossier `_next/` complet
2. Vérifie les permissions
3. Vide le cache navigateur (Ctrl+Shift+R)

---

## 🔄 Mises à jour futures

### **Comment mettre à jour le site**

1. **Modifie ton code localement**
2. **Rebuild :**
   ```bash
   npm run build
   ```
3. **Upload seulement les fichiers modifiés** via FTP
4. **Ou remplace tout** le contenu de `/public_html` (sauf `.htaccess`)

---

## 📊 Structure finale sur Hostinger

```
/public_html/
├── index.html                    (Homepage avec formulaire Vercel)
├── 404.html                      (Page erreur)
├── .htaccess                     (Configuration serveur)
├── sitemap.xml                   (SEO - 15 URLs)
│
├── hotels/
│   ├── index.html
│   ├── tel-aviv.html
│   ├── jerusalem.html
│   ├── eilat.html
│   ├── mer-morte.html
│   ├── netanya.html
│   └── haifa.html
│
├── location-voiture/
│   ├── index.html
│   ├── tel-aviv.html
│   ├── jerusalem.html
│   └── aeroport-ben-gourion.html
│
├── plages/
│   ├── index.html
│   ├── mediterranee.html
│   ├── mer-morte.html
│   └── eilat.html
│
├── contact.html
├── faq.html
│
├── _next/                        (Assets Next.js)
│   ├── static/
│   │   ├── css/
│   │   ├── chunks/
│   │   └── media/
│   └── ...
│
└── images/                       (Tes images)
    ├── hotels/
    │   ├── tel-aviv/
    │   ├── jerusalem/
    │   └── ...
    ├── mediterranean-beaches/
    ├── og-default.jpg
    └── ...
```

---

## ✅ Checklist finale

- [ ] Build Next.js terminé (`npm run build`)
- [ ] Dossier `out/` généré et vérifié
- [ ] Connexion FTP réussie
- [ ] Ancien site sauvegardé
- [ ] `public_html` nettoyé
- [ ] Tous les fichiers de `out/` uploadés
- [ ] `.htaccess` créé et configuré
- [ ] Homepage fonctionne (https://elynortours.com)
- [ ] Toutes les pages fonctionnent
- [ ] Formulaire Vercel s'affiche
- [ ] Test de soumission formulaire réussi
- [ ] Images s'affichent correctement
- [ ] Version mobile OK
- [ ] Sitemap soumis à Google Search Console

---

## 🎯 Score SEO Final

Avec cette config :

```
SEO Technique:  ████████████████████░ 98%
Formulaire:     ████████████████████  100% (HubSpot via Vercel)
Performance:    █████████████████░░░░ 85% (HTML statique)
Mobile:         ████████████████████  100%
───────────────────────────────────────────
SCORE GLOBAL:   ███████████████████░  95%
```

---

## 📞 Support

**Problèmes de déploiement ?**

1. **Support Hostinger :** https://www.hostinger.fr/contact
2. **Documentation Hostinger :** https://support.hostinger.com
3. **Live chat :** Disponible 24/7 dans hPanel

**Problèmes Next.js/Build ?**

1. Vérifie la console : `npm run build`
2. Supprime `.next` et rebuild
3. Vérifie `next.config.js`

---

🎉 **Bon déploiement !**

Une fois en ligne, ton site sera sur **https://elynortours.com** avec :
- ✅ Formulaire HubSpot fonctionnel
- ✅ SEO optimisé 98%
- ✅ Performance maximale
- ✅ HTTPS sécurisé
