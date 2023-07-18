document.addEventListener('mousemove', function(event) {
    // Mettre à jour les variables CSS avec les coordonnées de la souris
    document.documentElement.style.setProperty('--mouse-x', event.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', event.clientY + 'px');
  });
  