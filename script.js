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
// Selecciona los elementos del carrusel
const portfolioGrid = document.querySelector('.portfolio-grid');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Define el ancho de cada card y el espacio entre ellas
const cardWidth = 300; // Ancho de cada card
const gap = 20; // Espacio entre las cards

// Función para mover el carrusel a la izquierda
leftArrow.addEventListener('click', () => {
    portfolioGrid.scrollBy({
        left: -(cardWidth + gap), // Mueve el carrusel a la izquierda
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Función para mover el carrusel a la derecha
rightArrow.addEventListener('click', () => {
    portfolioGrid.scrollBy({
        left: cardWidth + gap, // Mueve el carrusel a la derecha
        behavior: 'smooth' // Desplazamiento suave
    });
});