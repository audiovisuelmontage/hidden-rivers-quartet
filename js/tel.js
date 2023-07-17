const telephoneInput = document.getElementById('telephone');

telephoneInput.addEventListener('input', function (event) {
  let value = event.target.value;
  value = value.replace(/\D/g, ''); // Supprime tous les caractères non numériques
  value = value.replace(/^(0\d{0,1})(\d{0,2})(\d{0,2})(\d{0,2})(\d{0,2})$/, '$1-$2-$3-$4-$5');
  event.target.value = value;
});


telephoneInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 8) { // Vérifie si la touche "Backspace" est pressée
    let value = event.target.value;
    value = value.replace(/-/g, ''); // Supprime tous les tirets
    event.target.value = value;
  }
});
