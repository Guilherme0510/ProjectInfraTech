var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
  // Adiciona animação suave ao clicar nos links da navbar
  var navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      event.preventDefault();
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      var offsetTop = targetSection.offsetTop;
      smoothScroll(offsetTop);
    });
  });

  // Função para rolar suavemente para a posição desejada
  function smoothScroll(targetPosition) {
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    var duration = 600; // Duração da animação em milissegundos

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função para suavizar a animação
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});
function closeNavbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
  }
}
