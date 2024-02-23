document.addEventListener('DOMContentLoaded', function() {
    const iconHamburger = document.getElementById('icon-hamburger');
  
    iconHamburger.addEventListener('click', function() {
      // Rediriger vers la page "nav-page.html" lorsque l'icône hamburger est cliquée
      window.location.href = 'nav-page.html';
    });
  });
  