"use strict";

var menu = document.querySelector(".menu-button");
var list = document.querySelector(".navigation-list");
menu.addEventListener("click", function () {
  var buttonImage = document.getElementById("menu-logo");

  if (buttonImage.src.match("./images/icon-hamburger.svg")) {
    buttonImage.src = "./images/icon-close.svg";
    menu.setAttribute("aria-expanded", "true");
  } else {
    buttonImage.src = "./images/icon-hamburger.svg";
    menu.setAttribute("aria-expanded", "false");
  }

  document.querySelector(".navigation-list").classList.toggle("visible");
});
