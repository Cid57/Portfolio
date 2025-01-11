// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with enhanced settings
    AOS.init({
        duration: 1200,          // Durée plus longue pour mieux voir l'animation
        easing: 'ease-out-back', // Animation plus dynamique
        once: false,             // Les animations se répètent à chaque défilement
        offset: 50,              // Déclenche plus tôt
        delay: 100,              // Petit délai pour un effet plus naturel
        mirror: true,            // Active les animations dans les deux sens
        anchorPlacement: 'top-bottom', // Déclenche quand le haut de l'élément atteint le bas de la fenêtre
        animatedClassName: 'aos-animate',
        initClassName: 'aos-init'
    });
});

// Hide loader when page is fully loaded
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
            // Refresh AOS after loader is hidden
            AOS.refresh();
        }, 500);
    }
});
