$(".dis-ng-slick-slider").slick({
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1357,
  centerPadding: '12px',
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev dis-ng-slick-slider-arrow dis-ng-slick-left-arrow"> <img src="./assets/slider-left-arrow.png"> </button>',
  nextArrow: '<button type="button" class="slick-prev dis-ng-slick-slider-arrow dis-ng-slick-right-arrow"> <img src="./assets/slider-right-arrow.png"> </button>',
  responsive: [   
    { 
      breakpoint: 1165,  
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ]
});


