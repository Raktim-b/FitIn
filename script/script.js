document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });

  const swiperSec = new Swiper(".second-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
        // spaceBetween: 50,
      },
    },
  });
});
