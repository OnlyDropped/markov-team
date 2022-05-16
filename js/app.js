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
});


/*89264694100 евгений 20450

215/65/16c sailun F7769735

малая семеновская 3а
*/

