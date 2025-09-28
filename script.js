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
