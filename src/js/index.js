import 'waypoints/lib/noframework.waypoints'



// FOR THE STICKY NAV
const waypoint = new Waypoint({
  element: document.querySelector(".js--section-intro"),
  handler: (direction) => {
    if (direction == "down") {
      console.log("TAG NAME: ", document.getElementsByTagName("nav"))
      document.querySelector('.nav').classList.add("sticky")
    } else {
      document.querySelector('.nav').classList.remove("sticky")
    }
  }
})

// document.querySelector(".js--section-intro").waypoint(
//   function (direction) {
//     if (direction == "down") {
//       console.log("DOWN");
//     } else {
//       console.log("UP");
//     }
//   },
//   {
//     offset: "60px;",
//   }
// );

// import Flickety from "./flickity.pkgd.min.js";
let Flickity = require("flickity");
import "./waypoints/noframework.waypoints.min.js";

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  arrowShape:
    "M99.44,52.05v-4.09h-89.4L40.8,22.49l-2.64-3.12L1.39,49.92l36.77,30.73l2.63-3.13L10.04,52.05 C10.04,52.05,99.44,52.05,99.44,52.05z",
});

var flkty = new Flickity(".main-carousel", {});

// MOBILE NAV
document.querySelector(".js--nav-icon").addEventListener("click", (e) => {
  e.preventDefault();
  let nav = document.querySelector(".js--main-nav");
  let icon = document.querySelector(".js--nav-icon");

  if (!nav.classList.contains("active")) {
    nav.classList.add("active");
    document.querySelector(".mobile-nav-icon").style.alignSelf = "flex-start"
    nav.style.order = "3";
    nav.style.height = "auto";

    let height = nav.clientHeight + "px";

    nav.style.height = "0px";

    setTimeout(() => {
      nav.style.height = height;
    }, 0);
  } else {
    nav.style.height = "0px";

    nav.addEventListener(
      "transitionend",
      function () {
        nav.classList.remove("active");
      },
      {
        once: true,
      }
    );
  }
  if (icon.src.includes("/menu-outline.svg")) {
    icon.src = "./img/close-outline.svg";
  } else {
    icon.src = "./img/menu-outline.svg";
  }
});
// $('.js--nav-icon').click(function () {
//   let nav = $('.js--main-nav');
//   let icon = $('.js--nav-icon i')
//   nav.slideToggle(200);
//   if (icon.hasClass('ion-navicon-round')) {
//       icon.addClass('ion-close-round')
//       icon.removeClass('ion-navicon-round')
//   } else {
//       icon.addClass('ion-navicon-round')
//       icon.removeClass('ion-close-round')
//   }
// })
