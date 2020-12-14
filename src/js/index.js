// import Flickety from "./flickity.pkgd.min.js";
let Flickity = require("flickity")


var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  // contain: true,
  freeScroll: true
});

var flkty = new Flickity( '.main-carousel', {})