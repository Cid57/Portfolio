let typed = new Typed(".text", {
  strings: [
    "Développement web",
    "Programmation",
    "JavaScript",
    "PHP",
    "React",
    "Angular",
    "Symphony",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Sélection de l'élément avec la classe "top"
const toTop = document.querySelector(".top");

// Ajout d'un écouteur d'événement pour détecter le défilement de la fenêtre
window.addEventListener("scroll", () => {
  // Vérification de la position de défilement verticale de la fenêtre
  if (document.documentElement.scrollTop > 100) {
    // Ajout de la classe "active" à l'élément "toTop" lorsque la position de défilement est supérieure à 100 pixels
    toTop.classList.add("active");
  } else {
    // Suppression de la classe "active" de l'élément "toTop" lorsque la position de défilement est inférieure ou égale à 100 pixels
    toTop.classList.remove("active");
  }
});
