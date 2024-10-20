function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
var slideIndex1 = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;
showSlides();
showSlides2();
showSlides3();

function showSlides() {
  var i;
  var slides1 = document.getElementsByClassName("project-1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  if (slideIndex1 >= slides1.length) {slideIndex1 = 0}    
  if (slideIndex1 < 0) {slideIndex1 = slides1.length - 1}
  slides1[slideIndex1].style.display = "block";  
  setTimeout(showSlides, 2000);
}


function showSlides2() {
  var i;
  var slides2 = document.getElementsByClassName("project-2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  if (slideIndex2 >= slides2.length) {slideIndex2 = 0}    
  if (slideIndex2 < 0) {slideIndex2 = slides2.length - 1}
  slides2[slideIndex2].style.display = "block";  
  setTimeout(showSlides2, 2000);
}

function showSlides3() {
  var i;
  var slides3 = document.getElementsByClassName("project-3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";  
  }
  if (slideIndex3 >= slides3.length) {slideIndex3 = 0}    
  if (slideIndex3 < 0) {slideIndex3 = slides3.length - 1}
  slides3[slideIndex3].style.display = "block";  
  setTimeout(showSlides3, 2000);
}


function plusSlides(n) {
  slideIndex1 += n;
  showSlides();
}

function plusSlides2(n) {
  slideIndex2 += n;
  showSlides2();
}

function plusSlides3(n) {
  slideIndex3 += n;
  showSlides3();
}
