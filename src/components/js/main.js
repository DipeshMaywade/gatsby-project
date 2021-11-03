var menu = document.getElementById("menu");
var intro = document.getElementById("intro");
var menuBtn = document.getElementById("menuBtn");
var menuClose = document.getElementById("menuClose");

menuBtn.onclick = function () {
  menu.classList.toggle("active");
  intro.classList.toggle("active");
};
menuClose.onclick = function () {
  menu.classList.remove("active");
  intro.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    intro.classList.remove("active");
  }
};
// var searchBtn = document.getElementById("searchBtn");
// var search = document.getElementById("search");
// searchBtn.onclick = function () {
//   search.classList.toggle("active");
// };
$(".travel__slider").slick({
  dots: false,
  infinite: true,
  speed: 700,
  fade: true,
  cssEase: "linear",
  prevArrow: $(".travel__slider-prev"),
  nextArrow: $(".travel__slider-next"),
});
