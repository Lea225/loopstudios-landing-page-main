document.addEventListener('DOMContentLoaded', function() {
    const iconClose = document.getElementById('icon-close');
  
    iconClose.addEventListener('click', function() {
      // Recharger la page principale lorsque l'icône close est cliquée
      window.location.href = 'index.html'; // Assurez-vous de remplacer 'main.html' par le chemin de votre page principale
    });
  });
  