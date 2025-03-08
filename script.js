// Menú hamburguesa para móviles
const menuToggle = document.querySelector('.menu-toggle'); // Selecciona el botón del menú
const navLinks = document.querySelector('.nav-links'); // Selecciona la lista de enlaces

// Agrega un evento de clic al botón del menú
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});

// Cambiar color del header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header'); // Selecciona el header
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222'; // Cambia el color del header al hacer scroll
    } else {
        header.style.backgroundColor = '#333'; // Restaura el color original
    }
});
