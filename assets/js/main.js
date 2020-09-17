var siteCarousel = function () {

    if ($('.hero-slide').length > 0) {
        $('.hero-slide').owlCarousel({
            loop:true,
            dots: true,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplayHoverPause:true,
            autoplaySpeed: 800,
            margin:10,
            nav:true,
            navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:3
                }
            }
        });
    }

    if ( $('.owl-slide').length > 0 ) {
            $('.owl-slide').owlCarousel({
            center: false,
            loop:true,
            dots: true,
            dotsEach: true,
            infinite: true,
            items: 2,
            speed: 300,
            autoplay: true,
            autoplayHoverPause:true,
            autoplaySpeed: 800,
            margin:20,
            responsiveClass:true,
            responsive:{
            300: {
                items: 1
                },
            600:{
              items: 1
            },
            800: {
                items: 2
            },
            1000:{
              items: 2
            },
            1200:{
              items: 2
            }
            }
         });
    }
}
siteCarousel();


//lightbox
$(document).ready(function(){
    $('.news__lightbox').magnificPopup({
        type: 'image'
    });
});

//Mobile Navigation
function openNav() {
    document.getElementById("myNav").style.width = "50%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
});

//sticky header with vanilla js
window.addEventListener("scroll",function(){document.querySelector("nav").classList.toggle("sticky",0<window.scrollY)});

