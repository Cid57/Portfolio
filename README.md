# Portfolio v2 - Cindy Singer

Portfolio personnel professionnel présentant mes compétences en développement Full-Stack, mes projets SaaS et mes expériences immersives (WebAR, 3D, visites virtuelles).

## Description

Site portfolio moderne et responsive développé avec HTML5, CSS3 et JavaScript vanilla. Design élégant avec effet glassmorphism et palette de couleurs chaleureuse.

### Spécialités présentées

- **Applications SaaS** pour équipes terrain (chantier, conformité, documentation)
- **Expériences immersives** : Scan 3D, WebAR, visites virtuelles
- **Développement Full-Stack** : PHP/Laravel, React.js, MySQL

## Technologies utilisées

- **HTML5** : Structure sémantique et accessible
- **CSS3** : Glassmorphism, animations, responsive design
- **JavaScript** : Vanilla JS pour interactions et animations
- **Model Viewer** : Intégration de modèles 3D et WebAR
- **Google Fonts** : Outfit & Playfair Display

## Structure du projet

```
portfolio-v2/
├── index.html              # Page principale
├── assets/
│   ├── css/
│   │   └── style.css      # Styles organisés par sections
│   ├── js/
│   │   └── main.js        # Scripts interactifs
│   └── img/               # Images et ressources visuelles
├── logo-kuck-ar/          # Projet WebAR
└── madagascar/            # Projet vitrine Madagascar
```

## Organisation du CSS

Le fichier CSS est organisé en 11 sections clairement identifiées :

1. **Polices & Variables** - Configuration des couleurs et espacements
2. **Reset & Base** - Normalisation et styles de base
3. **Utilitaires** - Classes réutilisables
4. **En-tête / Navigation** - Header fixe avec menu responsive
5. **Section Hero** - Page d'accueil avec présentation
6. **Section À propos** - Présentation détaillée et statistiques
7. **Section Compétences** - Grille de compétences techniques
8. **Section Projets** - Cartes de projets avec liens
9. **Section Contact** - Formulaire et liens sociaux
10. **Pied de page** - Footer minimaliste
11. **Media Queries** - Responsive design multi-breakpoints

## Breakpoints responsive

Le site est optimisé pour toutes les tailles d'écran :

- **Desktop** : > 1200px
- **Tablettes & petits desktop** : 900px - 1200px
- **Tablettes** : 768px - 900px
- **Mobiles** : 480px - 768px
- **Petits mobiles** : < 480px

## Fonctionnalités

### Navigation
- Header fixe avec effet de transparence au scroll
- Menu hamburger animé sur mobile
- Overlay sombre lors de l'ouverture du menu mobile
- Navigation smooth scroll vers les sections
- Indicateur de section active

### Animations
- Intersection Observer pour animations au scroll
- Animations d'apparition progressive des éléments
- Transitions fluides sur tous les états interactifs
- Respect des préférences utilisateur (prefers-reduced-motion)

### Accessibilité
- Structure sémantique HTML5
- États de focus visibles pour navigation clavier
- Labels ARIA sur boutons interactifs
- Contraste de couleurs optimisé (WCAG AA)
- Support du mode réduit de mouvement

### Performance
- CSS optimisé avec propriété `will-change`
- Polices Google Fonts avec `display=swap`
- Images optimisées
- JavaScript vanilla sans dépendances lourdes
- Lazy loading natif pour images

## Projets présentés

1. **Teeqode** - Plateforme SaaS pour gestion documentaire chantiers
2. **WebAR Logo Kuck** - Expérience de réalité augmentée web
3. **Site Kuck** - Vitrine agence solutions immersives
4. **V&V Délice** - Site restaurant avec réservation
5. **Assistant IA Chantier** - Agent vocal pour assistance terrain (en cours)
6. **Madagascar** - Vitrine touristique découverte

## Installation & Utilisation

```bash
# Cloner le repository
git clone [url-du-repo]

# Ouvrir le fichier index.html dans un navigateur
# Ou utiliser un serveur local (recommandé pour tester les features avancées)
python -m http.server 8000
# ou
npx serve
```

Accéder à `http://localhost:8000` dans votre navigateur.

## Optimisations appliquées

- Organisation CSS par sections avec table des matières
- Media queries multiples pour un responsive précis
- États de focus pour accessibilité clavier
- Overlay menu mobile pour meilleure UX
- Animations respectueuses des préférences utilisateur
- Code commenté et maintenable

## Contact

- **Email** : contact@cindysinger.fr
- **LinkedIn** : [Cindy Singer](https://www.linkedin.com/in/cindy-singer/)
- **GitHub** : [Cid57](https://github.com/Cid57)
- **Localisation** : Metz / Luxembourg

---

© 2026 Cindy Singer. Tous droits réservés.
