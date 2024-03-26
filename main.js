let typed = new Typed(".text", {
  strings: [
    "Développement web",
    "Programmation",
    "JavaScript",
    "PHP",
    "React",
    "Angular",
    "Symfony",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Sélection de l'élément de la barre de navigation
const navbar = document.querySelector(".navbar");

// Sélection de l'élément avec la classe "top"
const toTop = document.querySelector(".top");

// Position de défilement précédente
let lastScrollTop = 0;

// Fonction pour gérer le défilement
window.addEventListener("scroll", function () {
  // Obtenez la position actuelle de défilement
  const scrollTop = window.scrollY;

  // Vérifiez si l'utilisateur fait défiler vers le bas et si la barre de navigation n'est pas déjà masquée
  if (scrollTop > lastScrollTop && !navbar.classList.contains("hidden")) {
    // L'utilisateur fait défiler vers le bas, masquez la barre de navigation
    navbar.classList.add("hidden");
  }
  // Vérifiez si l'utilisateur fait défiler vers le haut et si la barre de navigation est masquée
  else if (scrollTop < lastScrollTop && navbar.classList.contains("hidden")) {
    // L'utilisateur fait défiler vers le haut, affichez la barre de navigation
    navbar.classList.remove("hidden");
  }

  // Mise à jour de la position de défilement précédente
  lastScrollTop = scrollTop;

  // Vérification de la position de défilement verticale de la fenêtre pour afficher ou masquer le bouton "Retour en haut"
  if (document.documentElement.scrollTop > 100) {
    // Ajout de la classe "active" à l'élément "toTop" lorsque la position de défilement est supérieure à 100 pixels
    toTop.classList.add("active");
  } else {
    // Suppression de la classe "active" de l'élément "toTop" lorsque la position de défilement est inférieure ou égale à 100 pixels
    toTop.classList.remove("active");
  }
});
