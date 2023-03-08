import Swiper, { Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  spaceBetween: 12,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 22,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
