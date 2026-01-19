/**
 * Portfolio - Cindy Singer
 * JavaScript minimal et léger
 */

(function () {
  "use strict";

  // --- Gestion des erreurs globales ---
  window.addEventListener('error', function(e) {
    console.error('Erreur JS:', e.message, 'à', e.filename, 'ligne', e.lineno);
  });

  // --- DOM ---
  const navToggle = document.querySelector(".nav__toggle");
  const navMenu = document.querySelector(".nav__menu");
  const navLinks = document.querySelectorAll(".nav__menu a");
  const header = document.querySelector(".header");

  // --- Menu Mobile ---
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
      const isActive = navMenu.classList.contains("active");
      document.body.style.overflow = isActive ? "hidden" : "";
      document.body.classList.toggle("menu-open", isActive);
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
        document.body.classList.remove("menu-open");
      });
    });

    // Fermer le menu au clic sur l'overlay
    document.body.addEventListener("click", function (e) {
      if (
        e.target === document.body &&
        document.body.classList.contains("menu-open")
      ) {
        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "";
        document.body.classList.remove("menu-open");
      }
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        document.body.classList.remove('menu-open');
      }
    });
  }

  // --- Effet de défilement de l'en-tête ---
  // Ajuste l'opacité ou l'ombre de l'en-tête lors du défilement
  window.addEventListener(
    "scroll",
    function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
        header.style.background = "rgba(252, 251, 251, 0.95)";
      } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(252, 251, 251, 0.8)";
      }
    },
    { passive: true }
  );

  // --- Défilement fluide pour les ancres ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Lien actif au défilement ---
  const sections = document.querySelectorAll("section[id]");

  function updateActiveLink() {
    const scrollPos = window.pageYOffset + 150;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.style.color = "";
          // Réinitialiser les styles actifs
          // Vérification de la correspondance des ID pour la mise en évidence
          if (link.getAttribute("href") === "#" + id) {
            link.style.color = "#2a2626"; // couleur sombre primaire
            link.style.fontWeight = "600";
          } else {
            link.style.fontWeight = "500";
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });

  // --- Animation d'apparition ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  // Observateur pour modifier les styles directement (simplicité)
  const styleObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        styleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Fonction utilitaire pour configurer l'animation avec délai
  const animateElements = (elements, delayBase = 0) => {
    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.6s ease ${
        delayBase + index * 0.1
      }s, transform 0.6s ease ${delayBase + index * 0.1}s`;
      styleObserver.observe(el);
    });
  };

  // 1. Sections (en-têtes)
  document.querySelectorAll(".section__header").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    styleObserver.observe(el);
  });

  // 2. Blocs de texte À propos
  animateElements(document.querySelectorAll(".about__text p"));

  // 3. Cartes de statistiques
  animateElements(document.querySelectorAll(".stat-card"), 0.2);

  // 4. Compétences
  animateElements(document.querySelectorAll(".skill-card"), 0.1);

  // 5. Projets
  animateElements(document.querySelectorAll(".project-card"), 0.1);

  // 6. Contact
  animateElements(document.querySelectorAll(".contact-container"), 0);

  // Animation du Hero au chargement
  const heroElements = [
    document.querySelector(".hero__label"),
    document.querySelector(".hero__title"),
    document.querySelector(".hero__subtitle"),
    document.querySelector(".hero__actions"),
    document.querySelector(".hero__image-wrapper"),
  ];

  heroElements.forEach((el, index) => {
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = `opacity 0.8s ease ${
        0.2 + index * 0.1
      }s, transform 0.8s ease ${0.2 + index * 0.1}s`;

      // Forcer le reflow
      void el.offsetWidth;

      // Lancer l'animation
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 100);
    }
  });
})();
