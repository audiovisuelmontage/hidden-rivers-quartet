  // Désactiver le clic droit
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Supprimer l'option "Inspecter"
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') || (e.metaKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
    }
});

// Supprimer l'option "Enregistrer sous" et "Afficher le code source de la page"
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.key === 'S')) {
        e.preventDefault();
    }
});