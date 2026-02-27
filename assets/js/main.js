/**
 * Portfolio - Cindy Singer
 * JavaScript minimal et léger
 */

(function () {
  "use strict";

  // --- Gestion des erreurs globales ---
  window.addEventListener("error", function (e) {
    console.error("Erreur JS:", e.message, "à", e.filename, "ligne", e.lineno);
  });

  // --- DOM ---
  var navToggle = document.querySelector(".nav__toggle");
  var navMenu = document.querySelector(".nav__menu");
  var navLinks = document.querySelectorAll(".nav__menu a");
  var header = document.querySelector(".header");

  // --- Fonction utilitaire pour fermer le menu ---
  function closeMenu() {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  }

  // --- Menu Mobile ---
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isActive = navMenu.classList.contains("active");
      if (isActive) {
        closeMenu();
      } else {
        navToggle.classList.add("active");
        navMenu.classList.add("active");
        navToggle.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
        document.body.classList.add("menu-open");
      }
    });

    // Fermer le menu au clic sur un lien
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    // Fermer le menu au clic sur l'overlay (pseudo-element body::before)
    document.addEventListener("click", function (e) {
      if (
        document.body.classList.contains("menu-open") &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        closeMenu();
        navToggle.focus();
      }
    });
  }

  // --- Effet de défilement de l'en-tête ---
  window.addEventListener(
    "scroll",
    function () {
      if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
      } else {
        header.classList.remove("header--scrolled");
      }
    },
    { passive: true }
  );

  // --- Défilement fluide pour les ancres ---
  // On utilise le scroll-behavior: smooth du CSS, on corrige juste l'offset du header
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var href = this.getAttribute("href");
      if (href === "#") return; // Lien logo : ne pas intercepter
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --- Lien actif au défilement (avec throttle) ---
  var sections = document.querySelectorAll("section[id]");
  var ticking = false;

  function updateActiveLink() {
    var scrollPos = window.scrollY + 150;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });

    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        requestAnimationFrame(updateActiveLink);
        ticking = true;
      }
    },
    { passive: true }
  );

  // --- Animation d'apparition ---
  var observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  var styleObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        styleObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function animateElements(elements, delayBase) {
    delayBase = delayBase || 0;
    elements.forEach(function (el, index) {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition =
        "opacity 0.6s ease " +
        (delayBase + index * 0.1) +
        "s, transform 0.6s ease " +
        (delayBase + index * 0.1) +
        "s";
      styleObserver.observe(el);
    });
  }

  // 1. Sections (en-têtes)
  document.querySelectorAll(".section__header").forEach(function (el) {
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
})();
