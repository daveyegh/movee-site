const autoSlide = document.querySelector('.auto__items .swiper-container');

const autoSlider = new Swiper(autoSlide, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.auto-swiper-next',
        prevEl: '.auto-swiper-prev',
      },
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: '.auto-pagination .swiper-pagination',
                clickable: true,
            },
        }
    }
});