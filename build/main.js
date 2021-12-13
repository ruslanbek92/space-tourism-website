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
  var planetImg = document.getElementById("planet-img");
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
          planetImg.src = "/image-moon.b20b8139.png";
          break;

        case "mars-tab":
          planetImg.src = "/image-mars.png";
          break;

        case "europa-tab":
          planetImg.src = "/image-europa.png";
          break;

        case "titan-tab":
          planetImg.src = "/image-titan.png";
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
}); // code for feature detection for css gap property. 

function checkFlexGap() {
  // create flex container with row-gap set
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px"; // create two, elements inside it

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div")); // append to the DOM (needed to obtain scrollHeight)

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap

  flex.parentNode.removeChild(flex);
  return isSupported;
}

if (checkFlexGap()) {
  document.documentElement.classList.add("flexbox-gap");
} else {
  document.documentElement.classList.add("no-flexbox-gap");
} // code for crew page tab


var arrayOfCrewTablist = document.querySelectorAll(".navigation-circle");
var crewSection = document.querySelector(".section-crew");
console.log(crewSection);

var crewClickHandler = function crewClickHandler(ev) {
  var arrayOfTabpanels = document.querySelectorAll(".info");
  var specialistImg = document.getElementById("specialist-image");
  console.log(ev.target);
  arrayOfTabpanels.forEach(function (el) {
    if (el.getAttribute("aria-labelledby") == ev.target.id) {
      ev.target.ariaSelected = "true";
      el.removeAttribute("hidden");
      ev.target.classList.add("active-circle");
      arrayOfCrewTablist.forEach(function (elem) {
        if (ev.target.id !== elem.id) {
          elem.ariaSelected = "false";
          elem.classList.remove("active-circle");
        }
      });

      switch (ev.target.id) {
        case "commander-tab":
          specialistImg.width = "514";
          specialistImg.height = "675";
          specialistImg.src = "/image-douglas-hurley.40559e77.png";
          specialistImg.classList.remove("shuttleworth glover anousheh")
          specialistImg.classList.add("douglas")
          crewSection.style.gap = "5vw";
          break;

        case "specialist-tab":
          specialistImg.width = "433";
          specialistImg.height = "568";
          specialistImg.src = "/image-mark-shuttleworth.png";
          specialistImg.classList.remove("douglas glover anousheh")
          specialistImg.classList.add("shuttleworth")
          crewSection.style.gap = "0";
          break;

        case "pilot-tab":
          specialistImg.width = "549";
          specialistImg.height = "645";
          specialistImg.src = "/image-victor-glover.png";
          specialistImg.classList.remove("shuttleworth douglas anousheh")
          specialistImg.classList.add("glover")
          crewSection.style.gap = "5vw";
          break;

        case "engineer-tab":
          specialistImg.width = "575";
          specialistImg.height = "602";
          specialistImg.src = "/image-anousheh-ansari.png";
          specialistImg.classList.remove("shuttleworth glover douglas")
          specialistImg.classList.add("anousheh")
          crewSection.style.gap = "5vw";
          break;
      }
    } else {
      var attr = document.createAttribute("hidden");
      el.setAttributeNode(attr);
    }
  });
};

arrayOfCrewTablist.forEach(function (element) {
  element.addEventListener("click", crewClickHandler);
});
