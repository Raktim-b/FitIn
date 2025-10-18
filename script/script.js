document.addEventListener("DOMContentLoaded", () => {
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
});
