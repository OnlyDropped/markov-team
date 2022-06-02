$('.example-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.jpg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

$('.slider').slick({
  arrows: false,
  //autoplay: true,
  //speed: 500,
  //fade: true,
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



$('.about-work__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.png" alt=""></button>',
  cssEase: 'linear',
})



$(".star").rateYo({
    rating: 5
})


$('.review-letters__slider').slick({
  //lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  arrows: true,
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.png" alt=""></button>',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.png" alt=""></button>',
})
/*осталось доработать слайдер в service.html*/