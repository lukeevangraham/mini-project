// import Flickety from "./flickity.pkgd.min.js";
let Flickity = require("flickity")


var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  freeScroll: true,
  arrowShape: "M99.44,52.05v-4.09h-89.4L40.8,22.49l-2.64-3.12L1.39,49.92l36.77,30.73l2.63-3.13L10.04,52.05 C10.04,52.05,99.44,52.05,99.44,52.05z"
});

var flkty = new Flickity( '.main-carousel', {})