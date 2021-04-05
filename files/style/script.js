//MENU SHRINK ON SCROLL
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "10px 25px";
        document.getElementById("navbar").style.backgroundColor = "#131111";
        document.getElementById("navbar").classList.add("shadow-3");

        if ($(window).width() < 992){
            document.getElementById("navbar-brand").style.height = "3rem";
            document.getElementById("navbar").style.padding = "10px 25px";
        } else {
            document.getElementById("navbar-brand").style.height = "3rem";
            document.getElementById("navbar").style.padding = "10px 25px";
        };

    } else {
        document.getElementById("navbar").style.padding = "50px";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("navbar").classList.remove("shadow-3");
        
        if (($(window).width() < 992) && ($(window).height() > 749)){
            document.getElementById("navbar-brand").style.height = "10rem";
        } else {
            document.getElementById("navbar-brand").style.height = "5rem";
        };
        
    };
};


//PARALLAX
window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
    var time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
    };

function parallax() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector(".parallax");
    // You can adjust the 0.4 to change the speed
    var coords = (scrolled * .4) + 'px'
    parallax.style.transform = 'translateY(' + coords + ')';
};





//SLICK SLIDER    
$('.slider-home-kit').slick({
    initialSlide:0,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    mobileFirst: true,
});
$('.slider-home-loja').slick({
    initialSlide:0,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});
$('.slider-home-parceiros').slick({
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