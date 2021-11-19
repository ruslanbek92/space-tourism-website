"use strict";

var menu = document.querySelector(".menu-button");
var list = document.querySelector(".navigation-list");
menu.addEventListener("click", function () {
  var buttonImage = document.getElementById("menu-logo");

  if (buttonImage.src.match("/icon-hamburger.77a5b926.svg")) {
    buttonImage.src = "/icon-close.svg";
    menu.setAttribute("aria-expanded", "true");
  } else {
    buttonImage.src = "/icon-hamburger.77a5b926.svg";
    menu.setAttribute("aria-expanded", "false");
  }

  document.querySelector(".navigation-list").classList.toggle("visible");
});
