$('.example-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.jpg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
});

$('.slider').slick({
  arrows: false,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplaySpeed: 2000
});