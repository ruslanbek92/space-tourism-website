"use strict"; // code for mobile menu// 

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
}); //code for destinations tab panel// 

var arrayOfTablist = document.querySelectorAll(".navigation-text");

var clickHandler = function clickHandler(e) {
  var arrayOfTabpanels = document.querySelectorAll(".tabpanel");
  arrayOfTabpanels.forEach(function (el) {
    if (el.getAttribute("aria-labelledby") == e.target.id) {
      e.target.ariaSelected = "true";
      el.removeAttribute("hidden");
      e.target.classList.add("visited-link");
      arrayOfTablist.forEach(function (elem) {
        if (e.target.id !== elem.id) {
          elem.ariaSelected = "false";
          elem.classList.remove("visited-link");
        }
      });
    } else {
      var attr = document.createAttribute("hidden");
      el.setAttributeNode(attr);
    }
  });
};

arrayOfTablist.forEach(function (element) {
  element.addEventListener("click", clickHandler);
});