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

// Manejo de videos con overlay
const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(card => {
  const video = card.querySelector('video');
  const overlay = card.querySelector('.video-overlay');

  overlay.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      overlay.style.display = 'none'; // Oculta overlay al reproducir
    } else {
      video.pause();
      overlay.style.display = 'flex'; // Muestra overlay al pausar (opcional)
    }
  });

  // Si quieres que al terminar el video se vuelva a mostrar el overlay
  video.addEventListener('ended', () => {
    overlay.style.display = 'flex';
  });
});

