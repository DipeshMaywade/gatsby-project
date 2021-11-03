$(".card__slider").slick({
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".card__slider-prev"),
  nextArrow: $(".card__slider-next"),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".story__slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 700,
  prevArrow: $(".story__slider-prev"),
  nextArrow: $(".story__slider-next"),
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnFocus: false,
  pauseOnHover: false,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1340,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
