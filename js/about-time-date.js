function updateDateTime() {
    var currentDate = new Date();
    var currentDateString = currentDate.toLocaleDateString();
    var currentTimeString = currentDate.toLocaleTimeString();
  
    var currentDateElement = document.querySelector('.current-date');
    var currentTimeElement = document.querySelector('.current-time');
  
    currentDateElement.textContent = currentDateString;
    currentTimeElement.textContent = currentTimeString;
  }
  
  // Mettre à jour la date et l'heure toutes les secondes
  setInterval(updateDateTime, 1000);
  
  // Appeler la fonction une première fois pour afficher les valeurs initiales
  updateDateTime();
   