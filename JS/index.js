"use strict";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu.addEventListener("click", function () {
  nav.classList.toggle("mobile-nav");
});
