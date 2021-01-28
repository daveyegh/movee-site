const autoSlide = document.querySelector('.auto__items .swiper-container');

const autoSlider = new Swiper(autoSlide, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.auto-swiper-next',
        prevEl: '.auto-swiper-prev',
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

// items .active class adding

const buttons = document.querySelectorAll('.auto__filter .auto__filter-item');

function buttonClass() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('active')) {
                button.classList.remove('active');
            } else {
                button.classList.add('active');
            }
        });
    });
}

buttonClass();