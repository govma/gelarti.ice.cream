// scripts.js

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    slide.style.left = i === index ? '0' : '100%';
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Initialisation
showSlide(currentIndex);
// scripts.js

// Sélectionner les boutons et les produits
const filterButtons = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');

// Ajouter un événement de clic à chaque bouton
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Retirer la classe 'active' des autres boutons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filtrer les produits
    const category = button.getAttribute('data-category');
    productItems.forEach(item => {
      if (category === 'all' || item.getAttribute('data-category') === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
