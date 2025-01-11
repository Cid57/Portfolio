// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.querySelector('.top');
    
    // Vérifier si le bouton existe
    if (!topButton) {
        console.error('Le bouton "top" n\'a pas été trouvé dans le DOM');
        return;
    }

    // Fonction pour gérer la visibilité du bouton
    function handleScroll() {
        console.log('Scroll détecté, position:', window.scrollY);
        
        if (window.scrollY > 50) {
            console.log('Affichage du bouton');
            topButton.classList.add('active');
        } else {
            console.log('Masquage du bouton');
            topButton.classList.remove('active');
        }
    }

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener('scroll', handleScroll);

    // Vérifier la position initiale au chargement
    handleScroll();

    // Gérer le clic sur le bouton
    topButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Clic sur le bouton détecté');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
