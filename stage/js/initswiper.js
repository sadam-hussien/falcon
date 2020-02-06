$(document).ready(function () {
    //initialize swiper when document ready
    
    // intro
    var mySwiper = new Swiper ('.intro .swiper-container', {
        loop: false,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
        },

    });

    // blog
    var swiper = new Swiper('.blog_items .swiper-container', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
        },

        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });

    // testimonials
    var mySwiper = new Swiper ('.testim .swiper-container', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
        },

    });

});  