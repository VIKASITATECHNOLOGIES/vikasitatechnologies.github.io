window.onscroll = function() {stickyNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', animateText);
  });
  
  function animateText() {
    var animatedText = document.querySelector('.animated-text');
    var positionFromTop = animatedText.getBoundingClientRect().top;
  
    var windowHeight = window.innerHeight;
  
    if (positionFromTop - windowHeight <= 0) {
      animatedText.classList.add('show');
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', animateServices);
  });
  
  function animateServices() {
    var services = document.querySelectorAll('.service');
  
    for (var i = 0; i < services.length; i++) {
      var service = services[i];
      var positionFromTop = service.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (positionFromTop - windowHeight <= 0) {
        service.classList.add('show');
      }
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    animateText('.about-us h2', 'fadeInUp');
    animateText('.about-us p', 'fadeInUp');
  });
  
  function animateText(selector, animation) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('animated', animation);
    }
  }
    