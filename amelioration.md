# Améliorations - Portfolio Cindy Singer

**Dernière mise à jour :** 27 février 2026

---

## TERMINÉ

### SEO
- Balises Open Graph (Facebook, LinkedIn)
- Balises Twitter Card
- Données structurées Schema.org (Person)
- Canonical URL et meta robots
- Sitemap.xml et robots.txt
- Preconnect pour les fonts Google
- Meta `og:image` et `twitter:image` ajoutées (image à créer)
- Attributs `alt` descriptifs sur toutes les images
- `aria-label` uniques par projet sur les liens

### Accessibilité
- Skip link visible au focus clavier
- Balise `<main>` avec id
- Rôles ARIA corrects sur toutes les sections (`role="region"`)
- `aria-expanded` dynamique sur le bouton hamburger
- `aria-controls` reliant le bouton au menu
- `aria-hidden="true"` sur tous les SVG décoratifs
- `aria-label` sur le lien de téléchargement du CV
- `rel="noopener noreferrer"` sur tous les liens externes
- Focus ramené sur le bouton hamburger après fermeture par Escape
- Font-size base corrigée de 15px à 16px

### CSS
- Fonts Google chargées via `<link>` (plus de `@import` bloquant)
- Variables CSS complètes (transitions, z-index, radius)
- Classe `.header--scrolled` (plus de styles inline JS)
- Classe `.active` pour les liens nav (plus de `style.color` en JS)
- Grille projets en `auto-fit` (responsive naturel)
- Fallback `backdrop-filter` avec `@supports`
- Classes CSS pour les variantes visuelles des cartes (dark, agent-lift, logo, 3d-viewer)
- Classe `.project-link--disabled` pour les projets en cours
- Code mort supprimé (`.footer__social`, `.project-card__number`)
- `will-change: transform` déplacé vers le `:hover`
- Z-index du header utilise `var(--z-sticky)`
- Print styles complets

### JavaScript
- `window.scrollY` (remplacement de `pageYOffset` déprécié)
- `requestAnimationFrame` pour throttle le scroll spy
- Classes CSS au lieu de styles inline pour les liens actifs et le header
- Fermeture du menu par overlay corrigée
- `aria-expanded` mis à jour dynamiquement
- Fonction `closeMenu()` factorisée
- Syntaxe `function()` unifiée
- Lien logo `href="#"` non intercepté par preventDefault

### Performance
- Model Viewer chargé en lazy (IntersectionObserver)
- `loading="lazy"` sur toutes les images de projets
- 8 images inutilisées archivées (~18.7 MB économisés)
- Styles inline remplacés par des classes CSS

### Serveur (.htaccess)
- Redirection HTTPS
- ErrorDocument 404 vers /404.html
- Headers de sécurité (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy)
- Compression GZIP activée
- Cache navigateur configuré (images 1 an, CSS/JS 1 mois)

### Bugs corrigés
- Coquille "ServiceS" → "Services"
- Image Madagascar pointant vers un dossier inexistant → remplacée
- Double scroll smooth (CSS + JS) → supprimé du CSS

---

## À FAIRE (manuel)

### CRITIQUE - Optimisation des images
- [ ] Convertir `moi.PNG` (1.8 MB) en WebP (~100 KB) via Squoosh.app
- [ ] Convertir `teeqode.jpg` (1.8 MB) en WebP (~150 KB)
- [ ] Compresser `site-kuck.jpg` (325 KB → ~100 KB)
- [ ] Compresser `vandvdelice.jpg` (323 KB → ~100 KB)
- [ ] Mettre à jour les `src` dans index.html après conversion

### IMPORTANT - Image de partage social
- [ ] Créer `assets/img/og-image.jpg` (1200x630 pixels)
  - Photo + "Cindy Singer" + "Développeuse Full-Stack"
  - Couleurs cohérentes avec le portfolio

### OPTIONNEL
- [ ] Créer `manifest.json` + icônes PWA (192x192 et 512x512)
- [ ] Supprimer définitivement le dossier `assets/img/_archive/`
- [ ] Ajouter un dark mode (`prefers-color-scheme: dark`)
- [ ] Compresser le CV PDF (2.9 MB → < 500 KB)
