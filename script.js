const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Kliknutí na jakýkoliv obrázek v galerii
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

// Zavření klávesou ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('active');
  }
});

// Zavření kliknutím kamkoliv
lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});