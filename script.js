// script.js


const slideContainer = document.querySelector('.carousel-slide');
const slides = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 0;

// Se calcula el ancho dinámicamente al actualizar
function getSlideSize() {
  return slides[0].clientWidth;
}

// Función para actualizar el slide
function updateSlide() {
  const size = getSlideSize();
  slideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// Siguiente imagen
function nextSlide() {
  counter++;
  if (counter >= slides.length) counter = 0;
  updateSlide();
}

// Imagen anterior
function prevSlide() {
  counter--;
  if (counter < 0) counter = slides.length - 1;
  updateSlide();
}

// Eventos de flechas
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Cambio automático cada 5 segundos
setInterval(nextSlide, 5000);

// Ajustar tamaño al redimensionar
window.addEventListener('resize', () => {
  updateSlide();
});

// Inicializar la posición
updateSlide();

// Script JS para menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
  const video = card.querySelector('video');
  const overlay = card.querySelector('.video-overlay');

  // Solo agregar eventos si video y overlay existen
  if (video && overlay) {
    overlay.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        overlay.style.display = 'none';
      } else {
        video.pause();
        overlay.style.display = 'flex';
      }
    });

    video.addEventListener('ended', () => {
      overlay.style.display = 'flex';
    });
  }
});




