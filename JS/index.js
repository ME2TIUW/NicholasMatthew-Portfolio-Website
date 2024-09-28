"use strict";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("mobile-nav");
});

 if (navigator.userAgent.match(/samsung/i)) {
       alert("Your browser (Samsung Internet) may not show this website" + 
             "correctly. Please consider using a standards-compliant" + 
             "browser instead, or switching from dark mode to light mode! \n\n" +
             "We recommend Firefox, Microsoft Edge, or Google Chrome.");
   }

