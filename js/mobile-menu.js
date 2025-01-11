document.addEventListener('DOMContentLoaded', () => {
    const menuBurger = document.querySelector('.menu-burger');
    const menuItems = document.querySelector('.menu-items');
    const menuLinks = document.querySelectorAll('.menu-items li a');

    function toggleMenu() {
        menuBurger.classList.toggle('active');
        menuItems.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Toggle menu on burger click
    menuBurger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (menuItems.classList.contains('active') && 
            !menuItems.contains(e.target) && 
            !menuBurger.contains(e.target)) {
            toggleMenu();
        }
    });
});
