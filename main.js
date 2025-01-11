// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
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

  // Scroll to top button
  const topButton = document.querySelector('.top');
  console.log('Top button:', topButton); // Vérifier si le bouton est trouvé

  if (topButton) {
    window.addEventListener('scroll', () => {
      console.log('Scrolling, pageYOffset:', window.pageYOffset); // Vérifier la position du scroll
      if (window.pageYOffset > 100) {
        console.log('Adding active class'); // Vérifier quand la classe est ajoutée
        topButton.classList.add('active');
      } else {
        console.log('Removing active class'); // Vérifier quand la classe est retirée
        topButton.classList.remove('active');
      }
    });

    topButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } else {
    console.error('Top button not found!'); // Afficher une erreur si le bouton n'est pas trouvé
  }

  // Newsletter Form
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      // Ici vous pouvez ajouter la logique pour gérer l'inscription à la newsletter
      alert('Merci de votre inscription à la newsletter !');
      newsletterForm.reset();
    });
  }

  // Animation des liens de navigation
  const menuLinks = document.querySelectorAll('.menu-items li a');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      // Gestion de la classe active
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Défilement vers la section
      if (targetId === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offset = targetElement.tagName.toLowerCase() === 'footer' ? 0 : 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Mise à jour de la classe active pendant le défilement
  const updateActiveLink = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Gestion spéciale pour le haut de la page
    if (scrollPosition < 100) {
      menuLinks.forEach(link => link.classList.remove('active'));
      const homeLink = Array.from(menuLinks).find(link => link.getAttribute('href') === '#home');
      if (homeLink) homeLink.classList.add('active');
      return;
    }

    // Gestion spéciale pour le bas de la page (Contact)
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
      menuLinks.forEach(link => link.classList.remove('active'));
      const contactLink = Array.from(menuLinks).find(link => link.getAttribute('href') === '#Contact');
      if (contactLink) contactLink.classList.add('active');
      return;
    }

    // Pour chaque section, vérifier si elle est visible
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        menuLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  // Écouter l'événement de défilement pour mettre à jour le lien actif
  window.addEventListener('scroll', updateActiveLink);
  
  // Appeler une fois au chargement pour définir le lien actif initial
  updateActiveLink();
});
