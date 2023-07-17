/** Sélectionner les images du carrousel
const carouselImages = document.querySelectorAll('.bulle');

// Index de l'image active
let activeImageIndex = 0;

// Fonction pour passer à l'image suivante
function nextImage() {
  // Masquer l'image actuelle
  carouselImages[activeImageIndex].classList.remove('active');

  // Passer à l'image suivante
  activeImageIndex++;
  if (activeImageIndex >= carouselImages.length) {
    activeImageIndex = 0;
  }

  // Afficher l'image suivante
  carouselImages[activeImageIndex].classList.add('active');
}

// Définir l'intervalle pour changer automatiquement d'image toutes les 3 secondes
setInterval(nextImage, 3000);
**/


// Sélectionner les images du carrousel
const carouselImages = document.querySelectorAll('.carousel .slide');

// Index de l'image active
let activeImageIndex = 0;

// Fonction pour passer à l'image suivante
function nextImage() {
  // Masquer l'image actuelle
  carouselImages[activeImageIndex].classList.remove('active');

  // Passer à l'image suivante
  activeImageIndex++;
  if (activeImageIndex >= carouselImages.length) {
    activeImageIndex = 0;
  }

  // Afficher l'image suivante
  carouselImages[activeImageIndex].classList.add('active');
}

// Définir l'intervalle pour changer automatiquement d'image toutes les 3 secondes
setInterval(nextImage, 3000);
