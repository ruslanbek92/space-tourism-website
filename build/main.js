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
  let planetImg=document.getElementById("planet-img");
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
       switch (e.target.id) {
        case "moon-tab":
          
          planetImg.src="./image-moon.b20b8139.png" 
          break;
          case "mars-tab":
            
            planetImg.src="./image-mars.png" 
           
            break;
          case "europa-tab":
            planetImg.src="./image-europa.png" 
            break;
            case "titan-tab":
              planetImg.src="./image-titan.png" 
              break;
      }
    } else {
      var attr = document.createAttribute("hidden");
      el.setAttributeNode(attr);
    }
  });
};

arrayOfTablist.forEach(function (element) {
  element.addEventListener("click", clickHandler);
});
