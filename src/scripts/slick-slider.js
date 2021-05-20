$('.slider-home-kits').slick({
  initialSlide: 0,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  edgeFriction: 0.1,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

$('.slider-gallery').slick({
  initialSlide:0,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
});

$('.slider-parceiros').slick({
  initialSlide:0,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:true,
  responsive: [
      {
          breakpoint: 996,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
      },
      {            
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {            
          breakpoint: 575,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});

$('.slider-home-eventos').slick({
  initialSlide:0,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false
});

$('.slider-carnes-kit').slick({
  initialSlide:0,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  mobileFirst: true,
  responsive: [
      {            
          breakpoint: 1199,
          settings: "unslick"
      },
      {            
          breakpoint: 767,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
      },
      {            
          breakpoint: 575,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});