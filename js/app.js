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


$('.tovar-thumb').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  //fade: true,
  asNavFor: '.tovar-preview'
});
$('.tovar-preview').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  //autoplay: true,
  //autoplaySpeed: 2000,
  asNavFor: '.tovar-thumb',
  vertical: true,
	//infinite: true,
	verticalSwiping: true,
  arrows: false,
  //dots: true,
  //centerMode: true,
  focusOnSelect: true
});

$('.expert-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider-tovar/next.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-tovar/prev.png" alt=""></button>',
});


$('.professional-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  //autoplay: true,
  //autoplaySpeed: 1000
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider-tovar/next.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider-tovar/prev.png" alt=""></button>',
  cssEase: 'linear',
})

$('.random__inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.png" alt=""></button>',
  cssEase: 'linear',
});
/*осталось доработать слайдер в service.html*/next-arrow