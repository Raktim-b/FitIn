document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    freeMode: true,
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
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
    // autoplay: {
    //   delay: 1500,
    //   disableOnInteraction: false,
    // },
    loop: true,
    pagination: {
      el: ".coach-pagination",
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
  // Add this JavaScript to your page

  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Intersection Observer to detect when element is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const numberElement = entry.target.querySelector(".counter-number");
        if (numberElement) {
          const targetValue = parseInt(numberElement.dataset.target);

          if (entry.isIntersecting) {
            // Reset to 0 and start animation when entering view
            numberElement.textContent = "0";
            animateCounter(numberElement, targetValue);
          } else {
            // Optional: Reset to 0 when leaving view
            numberElement.textContent = "0";
          }
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 50% of element is visible
    }
  );

  // Observe your counter element(s)
  const counterDivs = document.querySelectorAll(".number");
  counterDivs.forEach((counterDiv) => {
    observer.observe(counterDiv);
  });
  const swiperAbout = new Swiper(".about-swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".about-pagination",
    },
  });
  const swiperFilter = new Swiper(".filter-btn-swiper", {
    slidesPerView: 13,
    centeredSlides: true,
    loop: true,
  });
});
