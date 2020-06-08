// Slider hier

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
} 

// Burger-menü click-event
var navLinks = document.querySelectorAll("ul li a");
var burgerMenu = document.querySelector(".burger");
var navUl = document.querySelectorAll(".nav-links");
function toggleNav(){
  navUl[0].classList.toggle('open');
  burgerMenu.classList.toggle('openedBurger');
}

burgerMenu.addEventListener('click',function(){
  toggleNav();
});

for (var i=0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function(){
    toggleNav();
  });
}



